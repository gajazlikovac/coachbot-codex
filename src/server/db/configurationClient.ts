import { unstable_cache } from 'next/cache';
import { AssistantConfiguration, ModerationRule, ModerationTemplate, Prisma, Stage, Style } from '@prisma/client';

import prisma from '@/lib/prisma';
import { convertDecimalValues } from '@/lib/utils/server.utils';

export const getFullConfiguration = async (assistantId: string, full?: boolean) => {
  try {
    const config: any = await prisma.assistantConfiguration.findUnique({
      where: { assistantId },
      include: full
        ? {
            stages: true,
            styles: true,
            modelConfigs: true,
            moderationRules: true,
          }
        : undefined,
    });

    return {
      ...config,
      modelConfigs: full ? config.modelConfigs.map(convertDecimalValues) : undefined,
    };
  } catch (error) {
    console.error(`[instructionsClient] Error fetching assistant ${assistantId} full configuration:`, error);

    return null;
  }
};

export const getAssistantStyles = unstable_cache(
  async (assistantId: string): Promise<Style[]> => {
    try {
      return await prisma.style.findMany({
        where: { AssistantConfiguration: { assistantId } },
        orderBy: { created_at: 'asc' },
      });
    } catch (error) {
      console.error(`[instructionsClient] Error fetching assistant ${assistantId} styles:`, error);

      return [];
    }
  },
  ['assistantStyles'],
  { tags: ['styles'], revalidate: 3600 }
);

export const updateAssistantStyle = async (
  assistantId: string,
  id: number,
  data: Partial<Style>
): Promise<Style | null> => {
  try {
    const updatedData: Prisma.StyleUpdateInput = {
      ...data,
      greeting_templates: data.greeting_templates || undefined,
      response_patterns: data.response_patterns || undefined,
      closing_templates: data.closing_templates || undefined,
    };

    return await prisma.style.update({
      where: {
        id,
        AssistantConfiguration: { assistantId },
      },
      data: { ...updatedData },
    });
  } catch (error) {
    console.error(`[instructionsClient] Error updating assistant ${assistantId} style ${id}:`, error);

    return null;
  }
};

export const createAssistantStyle = async (
  assistantConfigurationId: string,
  data: Prisma.StyleCreateInput
): Promise<Style | null> => {
  try {
    return await prisma.style.create({
      data: {
        ...data,
        AssistantConfiguration: { connect: { id: assistantConfigurationId } },
      },
    });
  } catch (error) {
    console.error(
      `[instructionsClient] Error creating assistant configuration ${assistantConfigurationId} style:`,
      error
    );

    return null;
  }
};

export const deleteAssistantStyle = async (id: number): Promise<void> => {
  try {
    await await prisma.style.delete({ where: { id } });
  } catch (error) {
    console.error(`[instructionsClient] Error deleting style ${id}:`, error);
  }
};

export const updateConfigurationInstructions = async (
  assistantId: string,
  data: Partial<AssistantConfiguration>
): Promise<AssistantConfiguration> => {
  try {
    return await prisma.assistantConfiguration.update({ where: { assistantId }, data });
  } catch (error) {
    console.error(`[instructionsClient] Error updating assistant ${assistantId} instructions:`, error);
    throw new Error('Error updating assistant instructions');
  }
};

export const getAssistantStages = unstable_cache(
  async (assistantId: string): Promise<Stage[]> => {
    try {
      return await prisma.stage.findMany({
        where: { AssistantConfiguration: { assistantId } },
        orderBy: { order: 'asc' },
      });
    } catch (error) {
      console.error(`[instructionsClient] Error fetching assistant ${assistantId} stages:`, error);

      return [];
    }
  },
  ['assistantStages'],
  { tags: ['stages'], revalidate: 3600 }
);

export const updateAssistantStage = async (
  assistantId: string,
  id: string,
  data: Prisma.StageUpdateInput
): Promise<Stage> => {
  try {
    return prisma.stage.update({
      where: { id, AssistantConfiguration: { assistantId } },
      data: { ...data },
    });
  } catch (error) {
    console.error(`[instructionsClient] Error updating assistant ${assistantId} stage ${id}:`, error);

    throw new Error('Error updating assistant stage');
  }
};

export const updateAssistantStagesOrder = async (
  assistantId: string,
  stages: Pick<Stage, 'id' | 'order'>[]
): Promise<Stage[]> => {
  try {
    return Promise.all(
      stages.map((stage) =>
        prisma.stage.update({
          where: { id: stage.id, AssistantConfiguration: { assistantId } },
          data: { order: stage.order },
        })
      )
    );
  } catch (error) {
    console.error(`[instructionsClient] Error updating assistant ${assistantId} stages:`, error);
    throw new Error('Error updating assistant stages');
  }
};

export const getAssistantFirstStage = unstable_cache(
  async (assistantId: string, sortingOrder: 'asc' | 'desc' = 'asc', id?: string): Promise<Stage | null> => {
    try {
      const where = !!id ? { id } : { AssistantConfiguration: { assistantId } };

      return prisma.stage.findFirst({
        where,
        orderBy: { order: sortingOrder },
      });
    } catch (error) {
      console.error(`[instructionsClient] Error getting assistant ${assistantId} first stage:`, error);
      throw new Error('Error getting assistant first stage');
    }
  },
  ['assistantFirstStage'],
  { tags: ['firstStage'] }
);

export const createAssistantStage = async (
  assistantConfigurationId: string,
  { name }: Pick<Stage, 'name'>
): Promise<Stage> => {
  try {
    const lastStage = await getAssistantFirstStage('', 'desc', assistantConfigurationId);
    const order = lastStage ? lastStage.order + 1 : 1;

    return prisma.stage.create({
      data: {
        name,
        order,
        AssistantConfiguration: { connect: { id: assistantConfigurationId } },
      },
    });
  } catch (error) {
    console.error(
      `[instructionsClient] Error creating assistant configuration ${assistantConfigurationId} stage:`,
      error
    );
    throw new Error('Error creating assistant stage');
  }
};

export const deleteAssistantStage = async (id: string): Promise<Stage> => {
  try {
    return prisma.stage.delete({ where: { id } });
  } catch (error) {
    console.error(`[instructionsClient] Error deleting assistant stage ${id}:`, error);
    throw new Error('Error deleting assistant stage');
  }
};

export const getAssistantModerationRules = unstable_cache(
  async (assistantId: string): Promise<ModerationRule[]> => {
    try {
      return prisma.moderationRule.findMany({
        where: { AssistantConfiguration: { assistantId } },
        orderBy: { created_at: 'asc' },
        include: { ModerationTemplate: true },
      });
    } catch (error) {
      console.error(`[instructionsClient] Error fetching assistant ${assistantId} moderation rules:`, error);

      return [];
    }
  },
  ['assistantModerationRules'],
  { tags: ['moderationRules'], revalidate: 3600 }
);

export const createAssistantModerationRule = async (
  assistantConfigurationId: string,
  data: Pick<ModerationRule, 'name' | 'custom'>
): Promise<ModerationRule> => {
  try {
    return prisma.moderationRule.create({
      data: {
        ...data,
        AssistantConfiguration: { connect: { id: assistantConfigurationId } },
      },
      include: { ModerationTemplate: true },
    });
  } catch (error) {
    console.error(
      `[instructionsClient] Error creating assistant configuration ${assistantConfigurationId} moderation rule:`,
      error
    );
    throw new Error('Error creating assistant moderation rule.');
  }
};

export const updateAssistantModerationRule = async (
  assistantId: string,
  id: string,
  data: any
): Promise<ModerationRule> => {
  try {
    const updatedData: Prisma.ModerationRuleUpdateInput = {
      ...data,
      response_template: undefined,
      instructions: data.instructions || undefined,
      updated_at: new Date(),
      ModerationTemplate: data.ModerationTemplate?.length
        ? {
            updateMany: data.ModerationTemplate.map((template: ModerationTemplate) => ({
              where: {
                id: template.id,
                rule_id: id,
              },
              data: {
                ...template,
                updated_at: new Date(),
              },
            })),
          }
        : undefined,
    };

    return prisma.moderationRule.update({
      where: { id, AssistantConfiguration: { assistantId } },
      data: { ...updatedData },
      include: { ModerationTemplate: true },
    });
  } catch (error) {
    console.error(`[instructionsClient] Error updating assistant ${assistantId} moderation rule:`, error);
    throw new Error('Error creating assistant moderation rule.');
  }
};

export const deleteAssistantModerationRule = async (id: string): Promise<ModerationRule> => {
  try {
    return prisma.moderationRule.delete({ where: { id } });
  } catch (error) {
    console.error(`[instructionsClient] Error deleting moderation rule ${id}:`, error);
    throw new Error('Error deleting assistant moderation rule.');
  }
};

export const createAssistantModerationTemplate = async (
  _: any,
  data: ModerationTemplate
): Promise<ModerationTemplate> => {
  try {
    return prisma.moderationTemplate.create({ data, include: { ModerationRule: true } });
  } catch (error) {
    console.error(`[instructionsClient] Error creating new template for moderation rule ${data.rule_id}:`, error);
    throw new Error('Error creating assistant moderation template.');
  }
};

export const updateAssistantModerationTemplate = async (
  _: any,
  id: string,
  data: Partial<ModerationTemplate>
): Promise<ModerationTemplate> => {
  try {
    return prisma.moderationTemplate.update({ where: { id }, data, include: { ModerationRule: true } });
  } catch (error) {
    console.error(`[instructionsClient] Error deleting moderation template ${id}:`, error);
    throw new Error('Error deleting assistant moderation template.');
  }
};

export const deleteAssistantModerationTemplate = async (id: string): Promise<ModerationTemplate> => {
  try {
    return prisma.moderationTemplate.delete({ where: { id } });
  } catch (error) {
    console.error(`[instructionsClient] Error deleting moderation template ${id}:`, error);
    throw new Error('Error deleting assistant moderation template.');
  }
};
