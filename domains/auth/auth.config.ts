import Kakao from 'next-auth/providers/kakao';
import Naver from 'next-auth/providers/naver';

import {
  ACCOUNT_PROVIDER_BY_SOCIAL_PROVIDER_ID,
  SocialProvider,
  SOCIAL_PROVIDERS,
} from '@/domains/auth/auth.types';
import { PROJECT_PRIVATE_ENV } from '@/shared/constants/environment.server';
import { createTypeValidator, withSearchParams } from '@/shared/utils';

import type { NextAuthConfig } from 'next-auth';

const isSocialProvider = createTypeValidator<SocialProvider>(SOCIAL_PROVIDERS);

export const authConfig = {
  providers: [
    Kakao({
      clientId: PROJECT_PRIVATE_ENV.kakao.id,
      clientSecret: PROJECT_PRIVATE_ENV.kakao.secret,
    }),
    Naver({
      clientId: PROJECT_PRIVATE_ENV.naver.id,
      clientSecret: PROJECT_PRIVATE_ENV.naver.secret,
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
    async signIn({ user, account }) {
      const email = user.email;
      const providerId = account?.providerAccountId;
      const socialProviderId = account?.provider;

      if (!email || !providerId || !socialProviderId) return false;
      if (!isSocialProvider(socialProviderId)) return false;

      const provider = ACCOUNT_PROVIDER_BY_SOCIAL_PROVIDER_ID[socialProviderId];

      const baseUrl = PROJECT_PRIVATE_ENV.nextauth.baseUrl;
      if (!baseUrl) return false;

      const url = new URL('/api/auth/oauth/exchange', baseUrl);
      const params = withSearchParams(url.searchParams, {
        email,
        providerId,
        provider,
      });

      return `${url.origin}${url.pathname}?${params}`;
    },
  },
} satisfies NextAuthConfig;
