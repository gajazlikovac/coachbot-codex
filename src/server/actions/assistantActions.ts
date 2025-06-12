'use server';

import { revalidateTag } from 'next/cache';
import { PriceConfiguration } from '@prisma/client';

import { Assistant, AssistantConfiguration, AssistantEditable, AssistantMeta } from '@/lib/models/assistant.models';
import { State, Template } from '@/lib/models/common.models';
import { assistantPriceSchema, assistantSchema, mapRelationConfig } from '@/lib/utils/db.utils';
import {
  createUserAssistant,
  deleteUserAssistant,
  duplicateAssistant,
  getAllTemplates,
  getUserAssitants,
  updateAssistantMeta,
  updateUserAssistant,
  upsertAssistantPrice,
} from '../db/assistantClient';
import { getFullConfiguration } from '../db/configurationClient';
import { getSessionUser, verifySession } from './sessionActions';

export async function getCurrentAssistant(): Promise<string> {
  try {
    const { assistantId } = (await verifySession()) || {};

    return assistantId || '';
  } catch (error) {
    console.error(`[authActions] Error fetching current assistant`, error);

    return '';
  }
}

export async function getTemplates(): Promise<Template[]> {
  try {
    const templates: any[] = await getAllTemplates();

    return templates.map(mapRelationConfig);
  } catch (e) {
    console.error(`[assistantClient] Error fetching templates:`, e);
    return [];
  }
}

export async function getAssistants(include?: any): Promise<Assistant[]> {
  let userId;
  try {
    userId = await getSessionUser();

    if (!userId) return [];

    const assistants = await getUserAssitants(userId, include);

    return assistants;
  } catch (e) {
    console.error(`[assistantClient] Error fetching assistants for user ${userId}:`, e);
    return [];
  }
}

export async function upsertAssistant(
  { template, ...assistantData }: AssistantEditable,
  id?: string
): Promise<State<Assistant | null>> {
  let userId;
  try {
    userId = await getSessionUser();
    let assistant;

    if (!userId) return { value: null };

    const parsedData = assistantSchema.safeParse({ template, ...assistantData });

    if (!parsedData.success) {
      return { errors: parsedData.error.errors.map(({ message, path }) => ({ name: path.join('.'), message })) };
    }

    if (!!id) {
      assistant = await updateUserAssistant(userId, id, {
        name: assistantData.name,
        description: assistantData.description,
        mode: assistantData.mode,
        status: assistantData.status,
      });
    } else {
      assistant = await createUserAssistant(userId, assistantData, template as any);
    }

    revalidateTag('assistants');

    return { value: assistant };
  } catch (e) {
    console.error(`[assistantClient] Error ${!!id ? 'updating' : 'creating'} assistant for user ${userId}:`, e);
    return { value: null, error: '' };
  }
}

export async function getAssistantConfiguration(
  id?: string,
  full: boolean = true
): Promise<AssistantConfiguration | null> {
  let assistantId;
  try {
    assistantId = id || (await getCurrentAssistant());

    if (!assistantId) {
      console.warn('Assistant not found or user not authenticated');
      return null;
    }

    return (await getFullConfiguration(assistantId || '', full)) as any;
  } catch (error) {
    console.error(`[instructionsClient] Error getting assistant ${assistantId} data:`, error);

    return null;
  }
}

export async function createCopyAssistant(assistant: Assistant): Promise<Assistant | null> {
  try {
    const userId = await getSessionUser();

    if (!assistant || !userId) {
      console.warn('Assistant not passed or user not authenticated!');
      return null;
    }

    const copy = await duplicateAssistant(userId, assistant);
    revalidateTag('assistants');

    return copy;
  } catch (error) {
    console.error(`[instructionsClient] Error creating copy of assistant ${assistant.id}:`, error);

    return null;
  }
}

export async function updateAssistantMetaData(id: string, data: Partial<AssistantMeta>): Promise<AssistantMeta | null> {
  let assistantId;
  try {
    assistantId = id || (await getCurrentAssistant());

    if (!assistantId) {
      console.warn('Assistant not found or user not authenticated');
      return null;
    }

    const updatedMeta = await updateAssistantMeta(assistantId, data as any);

    revalidateTag('assistants');
    return updatedMeta;
  } catch (error) {
    console.error(`[instructionsClient] Error getting assistant ${assistantId} data:`, error);

    return null;
  }
}

export async function updateAssistantMetaPrice(
  assistant: Assistant,
  formData: FormData
): Promise<State<PriceConfiguration | null>> {
  let assistantId;
  try {
    assistantId = assistant.id || (await getCurrentAssistant());

    if (!assistantId) {
      console.warn('Assistant not found or user not authenticated');
      return { error: 'General.errors.unexpectedError', value: null };
    }
    const price = [...formData].reduce((data: any, [key, value]: any) => ({ ...data, [key]: value }), {});
    const validatedData = assistantPriceSchema.parse(price);

    if (validatedData instanceof Error) {
      return { error: validatedData.message };
    }

    const updatedPrice = await upsertAssistantPrice(assistant.meta?.id || '', {
      ...validatedData,
      trialDays: !!validatedData.trialDays ? 14 : null,
    } as any);

    revalidateTag('assistants');
    return { successMessage: 'General.successMessages.dataSaved', value: updatedPrice };
  } catch (error) {
    console.error(`[instructionsClient] Error updating assistant ${assistantId} meta price data:`, error);

    return { error: 'General.errors.unexpectedError', value: null };
  }
}

export async function deleteAssistant(id: string) {
  let userId;
  try {
    userId = await getSessionUser();

    if (!userId) return;

    await deleteUserAssistant(userId, id);
    revalidateTag('assistants');
  } catch (error) {
    console.error(`[assistantClient] Error removing user ${userId} assistant ${id}:`, error);
  }
}
