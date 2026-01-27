import { z } from 'zod';

export const createPresignedUrlRequestSchema = z.object({
  fileName: z.string(),
});

export type CreatePresignedUrlRequest = z.infer<
  typeof createPresignedUrlRequestSchema
>;

export const presignedUrlSchema = z.object({
  url: z.string(),
});

export type PresignedUrlResponse = z.infer<typeof presignedUrlSchema>;
