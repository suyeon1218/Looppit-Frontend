import { OAuthExchangeResult } from '@/domains/auth/oauth';
import { ONE_MONTH_SECONDS } from '@/shared/constants/time';
import { setCookie } from '@/shared/utils/cookie';

import { postOAuthSignupRequest } from './oauth.api';

import type { OAuthSignupRequest } from './oauth.api';

export const exchangeOAuthToken = async (
  params: OAuthSignupRequest,
  baseUrl: string,
): Promise<OAuthExchangeResult> => {
  const { email, providerId, provider } = params;

  const {
    result: { accessToken, refreshToken },
  } = await postOAuthSignupRequest({
    email,
    providerId,
    provider,
  });

  await setCookie('refreshToken', refreshToken, {
    maxAge: ONE_MONTH_SECONDS,
    httpOnly: true,
  });

  const redirectUrl = new URL('/oauth/bridge', baseUrl);
  redirectUrl.searchParams.set('accessToken', accessToken);

  return { redirectUrl };
};
