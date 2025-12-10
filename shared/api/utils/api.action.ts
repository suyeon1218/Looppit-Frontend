'use server';

import { cookies } from 'next/headers';

import { LoginResponse } from '@/domains/login/types';

import { RefreshTokenResponse } from '../api.types';

export const fetchRefreshToken = async (): Promise<RefreshTokenResponse> => {
  const cookieStore = await cookies();
  const refreshToken = cookieStore.get('refreshToken')?.value;

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/reissue',
      {
        method: 'POST',
        body: JSON.stringify({ refreshToken }),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to fetch refresh token');
    }

    const data = await response.json();

    await setTokensToCookies(data);

    return data;
  } catch (error) {
    throw error;
  }
};

const setTokensToCookies = async (data: LoginResponse) => {
  const cookieStore = await cookies();

  cookieStore.set('accessToken', data.accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 5,
  });
  cookieStore.set('refreshToken', data.refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7,
  });
};
