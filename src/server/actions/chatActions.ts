'use server';

import { revalidateTag } from 'next/cache';

import { AnalyzeStageData } from '@/lib/models/api.models';
import { Chat, ChatInfo, Message } from '@/lib/models/chat.models';
import { generateSessionName } from '@/lib/utils/chat.utils';
import {
  createChat,
  getUserChat,
  getUserChats,
  removeChat,
  updateLastMessageInChat,
  updateUserChat,
} from '../db/chatClient';
import { getFirstStage } from './instructionsActions';
import { sendMessage } from './messagesAction';
import { getSessionUser, verifySession } from './sessionActions';

export async function handleStageAnalysis(chatId: string, stageAnalysis: AnalyzeStageData | null): Promise<void> {
  try {
    if (!stageAnalysis) return;

    const { transition_required, current_stage, next_stage } = stageAnalysis;

    const [chat] = await Promise.all([
      updateUserChat(chatId, {
        stageAnalysis,
        currentStage: transition_required ? next_stage : current_stage,
      }),
      updateLastMessageInChat(chatId, { stageAnalysis: JSON.stringify(stageAnalysis) }),
    ]);

    const eventEmitter = (await import('@/lib/eventEmitter')).default;
    eventEmitter.emit(`message:${chat.userId}`, {
      user_id: chat.userId,
      event: 'chat-update',
      data: { chatId: chat.id, type: 'stage-analysis' },
    });
  } catch (error) {
    console.error(`[chatActions] error during saving chat ${chatId} stage analysis`, error);
  }
}

export async function getChats(): Promise<any> {
  let userId;
  try {
    userId = await getSessionUser();

    return userId ? await getUserChats(userId) : [];
  } catch (error) {
    console.error(`[chatsActions] Error fetching user ${userId} chats:`, error);

    return [];
  }
}

export async function getChat(id: string): Promise<Chat | null> {
  let userId;
  try {
    userId = await getSessionUser();

    if (!userId) return null;

    const chat = await getUserChat(id, userId);

    return chat as any;
  } catch (error) {
    console.error(`[chatsActions] Error fetching user ${userId} chats:`, error);

    return null;
  }
}

export async function deleteChat(chatId: string) {
  let user_id;
  try {
    user_id = (await getSessionUser()) || '';
    await removeChat(user_id, chatId);

    revalidateTag(`chats`);
  } catch (error) {
    console.error(`[chatsActions] Error during deleting userr ${user_id} chat ${chatId}: `, error);
  }
}

export async function createNewChat(userId: string, assistantId: string): Promise<string> {
  try {
    const firstStage = await getFirstStage();
    const newChat = await createChat(userId, {
      currentStage: firstStage?.name,
      name: generateSessionName(),
      assistantId,
    });

    return newChat.id;
  } catch (error) {
    console.error(`[chatsActions] Error creating new chat for user ${userId}:`, error);

    return '';
  }
}

export async function updateChat(
  currentChatId: string | undefined,
  messages: Message[],
  chatInfo: ChatInfo
): Promise<string> {
  let user_id;
  try {
    const { userId, assistantId } = (await verifySession()) || {};
    user_id = userId;

    if (!userId || !assistantId) return '';

    const [newMessage, ...prevMessages] = messages;
    const chat_id = currentChatId || (await createNewChat(userId, assistantId));
    await sendMessage({ userId, assistantId, newMessage, prevMessages, chat_id, chatInfo });

    !currentChatId && revalidateTag(`chats`);
    // TODO: instead revalidate try to return assistant message directly
    return chat_id;
  } catch (error) {
    console.error(`[chatsActions] Error fetching user ${user_id} chats:`, error);

    return '';
  }
}
