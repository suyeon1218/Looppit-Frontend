'use server';

import { cookies } from 'next/headers';

import { ENV_CONFIG, setRefreshTokenToCookie } from '@/shared/utils';

import { RefreshTokenResponse } from '../api.types';

export const fetchRefreshToken = async (): Promise<RefreshTokenResponse> => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;
  const { apiEndPoint } = ENV_CONFIG;

  const response = await fetch(apiEndPoint + '/auth/reissue', {
    method: 'POST',
    body: JSON.stringify({ refreshToken }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    const error = new Error('Failed to fetch refresh token');

    (error as Error & { status?: number }).status = response.status;
    throw error;
  }

  const data = await response.json();

  await setRefreshTokenToCookie(data.refreshToken);

  return data;
};
