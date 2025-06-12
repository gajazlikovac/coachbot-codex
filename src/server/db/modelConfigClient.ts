import { ModelConfig } from '@prisma/client';

import prisma from '@/lib/prisma';

export const getAssistantModelConfig = async (assistantId: string): Promise<ModelConfig | null> => {
  try {
    return prisma.modelConfig.findFirst({
      where: { assistantId },
    });
  } catch (error) {
    console.error(`[modelConfigClient] Error fetching assistant ${assistantId} model config:`, error);

    return null;
  }
};
