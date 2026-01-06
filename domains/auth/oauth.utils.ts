import type { ReadonlyURLSearchParams } from 'next/navigation';

import { ACCOUNT_PROVIDERS, AccountProvider } from '@/domains/auth/auth.types';
import { OAuthSignupRequest } from '@/domains/auth/oauth/oauth.api';
import { createTypeValidator, getSearchParams } from '@/shared/utils';

const isValid = createTypeValidator<AccountProvider>(ACCOUNT_PROVIDERS);

export const parseOAuthParams = (
  searchParams: URLSearchParams | ReadonlyURLSearchParams,
): OAuthSignupRequest | null => {
  const params = getSearchParams(searchParams, [
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
