import { z } from 'zod';

import { apiServerClient } from '@/shared/api/api.server-client';

import { ACCOUNT_PROVIDERS } from '../auth.types';

const oAuthProviderInfoSchema = z.object({
  provider: z.enum(ACCOUNT_PROVIDERS),
  providerId: z.string(),
  email: z.string(),
});

export type OAuthSignupRequest = z.infer<typeof oAuthProviderInfoSchema>;

const oAuthSignupResponseSchema = z.object({
  responseCode: z.literal('SUCCESS'),
  result: oAuthProviderInfoSchema.extend({
    status: z.literal('ACTIVE'),
    accessToken: z.string(),
    refreshToken: z.string(),
    createAt: z.coerce.date(),
    deletedAt: z.null(),
  }),
});

export const postOAuthSignupRequest = async (data: OAuthSignupRequest) => {
  const response = await apiServerClient.post('/auth/signup', data);
  return oAuthSignupResponseSchema.parse(response);
};
