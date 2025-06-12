import { NextRequest } from 'next/server';

import { Assistant } from '@/lib/models/assistant.models';
import { getAssistans } from '@/server/db/assistantClient';

export async function POST(request: NextRequest) {
  try {
    const ids = await request.json();

    const requestedAssistants = await getAssistans(ids, { configuration: true });
    const assistants = requestedAssistants.map(({ id, name, description, configuration, userId }: Assistant) => ({
      id,
      name,
      description,
      userId,
      instructions: configuration?.instructions,
      usageType: configuration?.usageType,
      tokensLimit: configuration?.tokensLimit,
      communicationModes: configuration?.communicationModes,
    }));

    return Response.json({ success: true, assistants }, { status: 200 });
  } catch (error) {
    console.error('[assistantPostApi] Error handling assistant POST request:', error);

    return Response.json({ success: false, error }, { status: 500 });
  }
}
