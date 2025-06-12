'use server';

import { revalidateTag } from 'next/cache';
import { v4 as uuidv4 } from 'uuid';

import eventEmitter from '@/lib/eventEmitter';
import { FileStatus, KnowledgeFile } from '@/lib/models/common.models';
import { deleteGcpStorageFile, getGcpStorageSignedUrl, getSignedUrlForUpload } from '../db/gcpClient';
import { deleteUserFile, editUserFile, getUserFiles, uploadUserFiles } from '../db/userClient';
import { getSessionUser } from './sessionActions';

export const uploadFileToGCP = async (userId: string, file: File, name: string): Promise<string | null> => {
  try {
    const formData = new FormData();
    const fileName = `${userId}/${name}`;
    const { url, fields } = await getSignedUrlForUpload(fileName, file.type, process.env.GCP_KB_BUCKET_NAME || '');

    Object.entries({ ...fields, file }).forEach(([key, value]) => {
      formData.append(key, value as any);
    });

    const response = await fetch(url, { method: 'POST', body: formData });

    if (!response.ok) {
      console.error(`Failed to upload file: ${response.status} ${response.statusText}`);
    }

    return `${process.env.GCP_KB_BUCKET_NAME || ''}/${fileName}`;
  } catch (error) {
    console.error(`[fileActions] Error uploading user ${userId} file "${file.name}":`, error);
    return null;
  }
};

export async function getFiles(): Promise<KnowledgeFile[]> {
  let userId;
  try {
    userId = await getSessionUser();

    return getUserFiles(userId || '');
  } catch (error) {
    console.error(`[filesActions] Error fetching user ${userId} files`, error);

    return [];
  }
}

export async function uploadFile({ id, content }: { id: string; content: File }): Promise<string | null> {
  let user_id: string | undefined;
  try {
    user_id = (await getSessionUser()) || '';

    if (!user_id) {
      console.error('[filesActions] User not authenticated');
      return null;
    }

    const fileId = uuidv4();
    const location = await uploadFileToGCP(user_id || '', content, fileId);
    const uploadedFile = await uploadUserFiles({
      id: fileId,
      name: content.name,
      status: FileStatus.processing,
      location,
      user_id,
    });

    eventEmitter.emit(`message:${user_id}`, { user_id, event: 'fileUploaded', data: uploadedFile });
    return id;
  } catch (error) {
    console.error(`[filesActions] Error updating account data for user ${user_id}`, error);

    return null;
  }
}

export async function revalidateFilesTag() {
  revalidateTag('files');
}

export async function editFile(
  id: string,
  data: Partial<KnowledgeFile>,
  user_id?: string
): Promise<KnowledgeFile | null> {
  let userId;
  try {
    userId = user_id || (await getSessionUser());

    if (!userId) {
      console.error('[filesActions] User not authenticated');
      return null;
    }

    const editedFile = await editUserFile(userId, id, data);
    revalidateTag('files');

    return editedFile;
  } catch (error) {
    console.error(`[filesActions] Error updating user ${userId} file ${id}`, error);
    return null;
  }
}

export async function deleteFile(file: KnowledgeFile): Promise<void> {
  let userId;
  try {
    userId = await getSessionUser();

    if (!userId) {
      return console.error('[filesActions] User not authenticated');
    }

    if (!file.location) {
      return console.error('[filesActions] File name or bucket is not set!');
    }

    const filename = file.location.replace(`${process.env.GCP_KB_BUCKET_NAME}/` || '', '');

    await deleteGcpStorageFile(process.env.GCP_KB_BUCKET_NAME || '', filename);
    await deleteUserFile(userId, file.id);
    revalidateTag('files');
  } catch (error) {
    console.error(`[filesActions] Error deleting user ${userId} file ${file.id}`, error);
  }
}

export async function getFileLink(file: KnowledgeFile): Promise<string | null> {
  let userId;
  try {
    userId = await getSessionUser();

    if (!userId) {
      console.error('[filesActions] User not authenticated');
      return null;
    }

    if (!file.location || !process.env.GCP_KB_BUCKET_NAME) {
      console.error('[filesActions] File name or bucket is not set!');
      return null;
    }

    const filename = file.location.replace(`${process.env.GCP_KB_BUCKET_NAME}/` || '', '');

    return getGcpStorageSignedUrl(filename, process.env.GCP_KB_BUCKET_NAME || '', file.name);
  } catch (error) {
    console.error(`[filesActions] Error getting link for user ${userId} file ${file.id}`, error);
    return null;
  }
}
