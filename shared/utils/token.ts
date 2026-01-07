import { deleteCookie, setCookie } from '@/shared/utils';

import { COOKIE_KEYS, COOKIE_OPTIONS } from '../constants';

export const setAccessTokenToCookie = async (accessToken: string) => {
  await setCookie(COOKIE_KEYS.ACCESS_TOKEN, accessToken, {
    maxAge: COOKIE_OPTIONS.MAX_AGE,
  });
};

export const setRefreshTokenToCookie = async (refreshToken: string) => {
  await setCookie(COOKIE_KEYS.REFRESH_TOKEN, refreshToken, {
    maxAge: COOKIE_OPTIONS.MAX_AGE_REFRESH,
  });
};

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const setTokensToCookies = async (data: Tokens) => {
  await setAccessTokenToCookie(data.accessToken);
  await setRefreshTokenToCookie(data.refreshToken);
};

export const removeTokensFromCookies = async () => {
  await deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);
  await deleteCookie(COOKIE_KEYS.REFRESH_TOKEN);
};
