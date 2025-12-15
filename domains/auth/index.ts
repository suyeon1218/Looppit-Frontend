export { handlers } from '@/domains/auth/auth';
export { auth, signIn, signOut } from './auth';
export { authConfig } from './auth.config';
export {
  OAUTH_ERROR_CODES,
  SOCIAL_PROVIDER_GOOGLE,
  SOCIAL_PROVIDER_KAKAO,
  SOCIAL_PROVIDER_NAVER,
} from './oauth.constants';
export type { OAuthErrorCode } from './oauth.constants';
export { classifyOAuthError, getOAuthErrorMessage } from './oauth.error';
export type { OAuthError } from './oauth.error';
export { exchangeOAuthToken } from './oauth.service';
export type { OAuthExchangeResult } from './oauth.service';
export { parseOAuthParams } from './oauth.utils';
export { ACCOUNT_PROVIDERS, SOCIAL_PROVIDERS } from './auth.types';
export type { AccountProvider, SocialProvider } from './auth.types';
