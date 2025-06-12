'use server';

import { SignedPostPolicyV4Output, Storage } from '@google-cloud/storage';

const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/gm, '\n'),
  },
});

const getGcpBucket = (bucketName: string) => storage.bucket(bucketName);

export async function getGcpStorageSignedUrl(
  filename: string,
  bucketName: string,
  displayName?: string
): Promise<string> {
  const options = {
    version: 'v4' as const,
    action: 'read' as const,
    expires: Date.now() + 5 * 60 * 1000, //  5 minutes,
    responseDisposition: 'attachment; filename="' + displayName || filename + '"',
  };
  const bucket = getGcpBucket(bucketName || '');
  const [url] = await bucket.file(filename).getSignedUrl(options);

  return url;
}

export async function getSignedUrlForUpload(
  fileName: string,
  contentType: string,
  bucketName: string
): Promise<SignedPostPolicyV4Output> {
  const bucket = getGcpBucket(bucketName || '');
  const buckteFile = bucket.file(fileName);
  const options = {
    expires: Date.now() + 10 * 60 * 1000, //  10 minute,
    fields: {
      'Content-Type': contentType,
      'x-goog-meta-source': 'cbs-project',
    },
  };

  const [response] = await buckteFile.generateSignedPostPolicyV4(options);
  return response;
}

export const deleteGcpStorageFile = async (bucketName: string, filename: string): Promise<void> => {
  const bucket = getGcpBucket(bucketName || '');
  await bucket.file(filename).delete();
};
