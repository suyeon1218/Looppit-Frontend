import { NextRequest } from 'next/server';

import {
  KAKAO_DEFAULT_ERROR_MESSAGE,
  KAKAO_ERROR_MESSAGES,
  KakaoErrorCode,
} from '@/domains/auth/oauth/kakao.constants';
import { OAUTH_DEFAULT_ERROR_MESSAGE } from '@/domains/auth/oauth/oauth.constants';
import {
  createTypeValidator,
  getErrorMessage,
  requireSearchParams,
} from '@/shared/utils';

import { ACCOUNT_PROVIDERS, AccountProvider } from '../auth.types';

import type { OAuthSignupRequest } from './oauth.api';

const isValid = createTypeValidator<AccountProvider>(ACCOUNT_PROVIDERS);

export const parseOAuthParams = (
  request: NextRequest,
): OAuthSignupRequest | null => {
  const params = requireSearchParams(request, [
    'email',
    'providerId',
    'provider',
  ]);

  if (!params) {
    return null;
  }

  const providerValue = params.provider.toUpperCase();

  if (!isValid(providerValue)) {
    return null;
  }

  return {
    email: params.email,
    providerId: params.providerId,
    provider: providerValue,
  };
};

/**
 * 에러를 처리하고 사용자에게 알림을 표시합니다.
 */
export const handleOauthError = (error: unknown) => {
  const errorMessage = getErrorMessage(error, OAUTH_DEFAULT_ERROR_MESSAGE);
  alert(errorMessage);
};

export const getKakaoErrorMessage = (error: KakaoErrorCode): string => {
  return KAKAO_ERROR_MESSAGES[error] ?? KAKAO_DEFAULT_ERROR_MESSAGE;
};
