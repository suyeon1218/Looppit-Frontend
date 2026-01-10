import { deleteCookie } from '@/shared/utils';

import { COOKIE_KEYS } from '../constants';

export const removeTokensFromCookies = async () => {
  await deleteCookie(COOKIE_KEYS.ACCESS_TOKEN);
  await deleteCookie(COOKIE_KEYS.REFRESH_TOKEN);
};
