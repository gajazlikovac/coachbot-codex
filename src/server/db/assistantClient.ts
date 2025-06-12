'use server';

import { unstable_cache } from 'next/cache';
import {
  Assistant,
  AssistantConfiguration,
  AssistantMeta,
  ModelConfig,
  ModerationRule,
  ModerationTemplate,
  Prisma,
  Stage,
  Style,
  Template,
} from '@prisma/client';

import prisma from '@/lib/prisma';
import { getFullConfiguration } from './configurationClient';

export type ConfigurationRelations = {
  modelConfigs: ModelConfig[];
  moderationRules: (ModerationRule & { ModerationTemplate: ModerationTemplate[] })[];
  stages: Stage[];
  styles: Style[];
  meta: AssistantMeta;
  configuration: AssistantConfiguration;
};

export const getAllTemplates = async (): Promise<Template[]> => {
  try {
    return prisma.template.findMany({
      include: {
        stages: true,
        modelConfigs: true,
      },
    });
  } catch (error) {
    console.error(`[assistantClient] Error fetching templates:`, error);

    return [];
  }
};

export const getUserAssitants = unstable_cache(
  async (userId: string, include?: any): Promise<Assistant[]> => {
    try {
      return prisma.assistant.findMany({ where: { userId }, orderBy: { created_at: 'desc' }, include });
    } catch (error) {
      console.error(`[assistantClient] Error fetching assistants for user ${userId}:`, error);

      return [];
    }
  },
  ['userAssistants'],
  { tags: ['assistants'], revalidate: 3600 }
);

export const getAssistans = async (ids: string[], include?: any): Promise<Assistant[]> => {
  try {
    return prisma.assistant.findMany({ where: { id: { in: ids } }, include });
  } catch (error) {
    console.error(`[assistantClient] Error fetching assistants:`, error);

    return [];
  }
};

export const getAssistantData = async (
  id: string,
  include?: any
): Promise<(Assistant & { meta?: AssistantMeta; configuration?: AssistantConfiguration }) | null> => {
  try {
    return prisma.assistant.findFirst({
      where: { id },
      include,
    });
  } catch (error) {
    console.error(`[assistantClient] Error fetching assistants ${id}:`, error);

    return null;
  }
};

export const createUserAssistant = async (
  userId: string,
  data: Pick<Assistant, 'name' | 'description'>,
  template: Template & ConfigurationRelations
): Promise<Assistant | null> => {
  try {
    if (!template) {
      console.error('[assistantClient] Could not find initial templater');
      return null;
    }

    return prisma.$transaction(async (tx) => {
      const { modelConfigs, stages, instructions, onboarding, onboardingAnalyzer, id } = template;

      const newAssistant = await tx.assistant.create({
        data: {
          ...data,
          userId,
          templateId: id,
        },
      });

      await tx.assistantConfiguration.create({
        data: {
          assistantId: newAssistant.id,
          templateId: id,
          instructions,
          onboarding,
          onboardingAnalyzer,
          modelConfigs: {
            createMany: {
              data: modelConfigs.map(({ model, temperature, top_p, frequency_penalty, presence_penalty }) => ({
                model,
                temperature,
                top_p,
                frequency_penalty,
                presence_penalty,
              })),
            },
          },
          stages: {
            createMany: {
              data: stages.map(({ name, instructions, analyzer, order }) => ({
                name,
                instructions,
                analyzer,
                order,
              })),
            },
          },
        },
      });

      await tx.assistantMeta.create({ data: { assistantId: newAssistant.id } });

      return newAssistant;
    });
  } catch (error) {
    console.error(`[assistantClient] Error creating assistant for user ${userId}:`, error);

    return null;
  }
};

export const duplicateAssistant = async (userId: string, original: any): Promise<Assistant | null> => {
  try {
    if (!original) {
      console.error('[assistantClient] No original assistant provided');
      return null;
    }

    return prisma.$transaction(async (tx) => {
      const { name, description, mode, meta } = original;
      const configuration = await getFullConfiguration(original.id, true);

      const newAssistant = await tx.assistant.create({
        data: {
          name: `${name} (copy)`,
          description,
          userId,
          mode,
        },
      });

      await tx.assistantConfiguration.create({
        data: {
          assistantId: newAssistant.id,
          templateId: configuration.templateId,
          instructions: configuration.instructions,
          onboarding: configuration.onboarding,
          onboardingAnalyzer: configuration.onboardingAnalyzer,
          tokensLimit: configuration.tokensLimit,
          usageType: configuration.usageType,
          communicationModes: configuration.communicationModes,
          modelConfigs: {
            createMany: {
              data: configuration.modelConfigs.map(
                ({ model, temperature, top_p, frequency_penalty, presence_penalty }: ModelConfig) => ({
                  model,
                  temperature,
                  top_p,
                  frequency_penalty,
                  presence_penalty,
                })
              ),
            },
          },
          stages: {
            createMany: {
              data: configuration.stages.map(({ name, instructions, analyzer, order }: Stage) => ({
                name,
                instructions,
                analyzer,
                order,
              })),
            },
          },
        },
      });

      await tx.assistantMeta.create({
        data: {
          assistantId: newAssistant.id,
          topics: meta.topics,
          visibility: meta.visibility,
          accessLevel: meta.accessLevel,
          price: meta.price
            ? {
                create: {
                  amount: meta.price.amount,
                  monthly: meta.price.monthly,
                  yearly: meta.price.yearly,
                  currency: meta.price.currency,
                  trialDays: meta.price.trialDays,
                },
              }
            : undefined,
        },
      });

      return newAssistant;
    });
  } catch (error) {
    console.error(`[assistantClient] Error duplicating assistant for user ${userId}:`, error);
    return null;
  }
};

export async function updateUserAssistant(userId: string, id: string, data: Partial<Assistant>) {
  try {
    return prisma.assistant.update({ where: { userId, id }, data });
  } catch (error) {
    console.error(`[assistantClient] Error updating user ${userId} assistant ${id}:`, error);

    return null;
  }
}

export async function updateAssistantMeta(assistantId: string, data: Prisma.AssistantMetaUpdateInput) {
  try {
    return prisma.assistantMeta.update({ where: { assistantId }, data });
  } catch (error) {
    console.error(`[assistantClient] Error updating user assistant  ${assistantId} meta:`, error);

    return null;
  }
}

export async function upsertAssistantPrice(assistantMetaId: string, data: Prisma.PriceConfigurationCreateInput) {
  try {
    return await prisma.priceConfiguration.upsert({
      where: { assistantMetaId },
      update: data,
      create: {
        ...data,
        assistantMeta: {
          connect: { id: assistantMetaId },
        },
      },
    });
  } catch (error) {
    console.error(`[assistantClient] Error updating user assistant meta ${assistantMetaId} price:`, error);

    return null;
  }
}

export async function deleteUserAssistant(userId: string, id: string) {
  try {
    return prisma.assistant.delete({ where: { userId, id } });
  } catch (error) {
    console.error(`[assistantClient] Error deleting user ${userId} assistant ${id}:`, error);

    return null;
  }
}
