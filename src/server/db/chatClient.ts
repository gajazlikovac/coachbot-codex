import { cache } from 'react';
import { Chat, Message } from '@prisma/client';

import prisma from '@/lib/prisma';
import { Chat as ChatModel } from '../../lib/models/chat.models';

export const getUserChat = cache(
  async (id: string, userId: string): Promise<(Chat & { Messages: Message[] }) | null> => {
    try {
      return prisma.chat.findFirst({
        where: { id, userId },
        include: {
          Messages: {
            orderBy: {
              created_at: 'desc',
            },
          },
        },
      });
    } catch (error) {
      console.error(`[chatClient] Error fetching chat ${id}:`, error);

      return null;
    }
  }
);

export const getUserChats = async (userId: string): Promise<ChatModel[] | null> => {
  try {
    const chats = await prisma.chat.findMany({
      where: { userId },
      orderBy: {
        created_at: 'desc',
      },
    });

    return chats.map((chat: Chat) => ({
      ...chat,
      stageAnalysis: typeof chat.stageAnalysis === 'string' ? JSON.parse(chat.stageAnalysis) : chat.stageAnalysis,
    }));
  } catch (error) {
    console.error(`[chatClient] Error fetching user ${userId} chats:`, error);

    return null;
  }
};

export const createChat = async (userId: string, chat: any): Promise<Chat> => {
  try {
    const createdChat = await prisma.chat.create({ data: { ...chat, userId }, include: { Messages: true } });

    return createdChat;
  } catch (error) {
    console.error(`[chatClient] Error creating chat for user ${userId}:`, error);

    throw new Error('[chatClient] Could not create new chat');
  }
};

export const updateUserChat = async (id: string, data: any): Promise<Chat> => {
  try {
    const result = await prisma.chat.update({ where: { id }, data: { ...data }, include: { Messages: true } });

    return result;
  } catch (error) {
    console.log(`[chatActions debugger] updating chat ${id} error`, JSON.stringify(error));
    console.error(`[chatClient] Error updating chat ${id}:`, error);

    throw new Error('[chatClient] Could not upadte chat');
  }
};

export const removeChat = async (userId: string, id: string): Promise<Chat> => {
  try {
    return prisma.chat.delete({ where: { userId, id } });
  } catch (error) {
    console.error(`[chatClient] Error removing chat ${id}:`, error);

    throw new Error('[chatClient] Could not remove chat');
  }
};

export const createChatMessage = async (chatId: string, message: any): Promise<Message> => {
  try {
    return await prisma.message.create({ data: { ...message, chatId, created_at: new Date(message.created_at) } });
  } catch (error) {
    console.error(`[chatClient] Error during creating message for chat ${chatId}:`, error);

    throw new Error('[chatClient] Could not create chat message');
  }
};

export const updateMessage = async (id: string, data: Partial<Message>): Promise<Message> => {
  try {
    return await prisma.message.update({
      where: { id },
      data,
    });
  } catch (error) {
    console.error(`[chatClient] Error during updating message  ${id}:`, error);

    throw new Error('[chatClient] Could not upadte message');
  }
};

export const updateLastMessageInChat = async (chatId: string, data: Partial<Message>): Promise<Message | null> => {
  try {
    const lastMessage = await prisma.message.findFirst({
      where: { chatId },
      orderBy: { created_at: 'desc' },
    });

    if (!lastMessage) return null;

    return await updateMessage(lastMessage.id, data);
  } catch (error) {
    console.error(`[chatClient] Error updating last message in chat ${chatId}:`, error);

    throw new Error('[chatClient] Could not update last message');
  }
};
