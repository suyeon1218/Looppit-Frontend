'use server';

import { apiServerClient } from '@/shared/api/api.server-client';
import { applySetCookieHeader, makeNextResponseError } from '@/shared/utils';

import { createApiResponse } from './api.response-format';

/**
 * 리프레시 토큰 재발급 api route
 * refresh token의 path를 임의로 조정해놓은 상태이므로 추후에 문제가 될 경우 Request를 수정하여 보내야 합니다.
 */
export const fetchRefreshToken = async () => {
  try {
    const response = await apiServerClient.requestRaw('/auth/reissue', {
      method: 'POST',
    });
    const setCookieHeaders = response.headers['set-cookie'];

    if (setCookieHeaders && Array.isArray(setCookieHeaders)) {
      await applySetCookieHeader(setCookieHeaders);
    }

    return createApiResponse(response.data, '토큰 재발급에 성공했습니다.');
  } catch (error) {
    return makeNextResponseError(error);
  }
};
