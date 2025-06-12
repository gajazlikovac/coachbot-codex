import { NextRequest } from 'next/server';

import { getAssistantConfiguration } from '@/server/actions/assistantActions';
import { getAssistantFirstStage } from '@/server/db/configurationClient';

export async function GET(_: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;

    if (!id) {
      throw new Error('Assistant id is not provided!');
    }

    const [assistantConfig, firstStage] = await Promise.all([
      getAssistantConfiguration(id),
      getAssistantFirstStage(id),
    ]);

    if (!assistantConfig) {
      throw new Error('Assistant not found!');
    }
    const { usageType, tokensLimit, communicationModes, instructions } = assistantConfig;

    return Response.json(
      {
        instructions: instructions,
        firstStage: firstStage?.name,
        success: true,
        usageType,
        tokensLimit,
        communicationModes,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[assistantApi] Error handling GET request:', error);

    return Response.json({ success: false, message: 'Assistant not found' }, { status: 404 });
  }
}
