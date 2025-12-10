'use server';

import { cookies } from 'next/headers';

import { ERROR_MESSAGE_MAP } from '@/shared/api/api.constants';
import { ApiError, ErrorStatusKey } from '@/shared/api/api.types';

import { LoginResponse } from '../types';

export const loginAction = async (
  formData: FormData,
): Promise<LoginResponse | ApiError | undefined> => {
  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_API_BASE_URL + '/user/login',
      {
        method: 'POST',
        body: formData,
      },
    );
    if (!response.ok) {
      throw new Error(
        JSON.stringify({
          code: response.status,
          message: ERROR_MESSAGE_MAP[response.status as ErrorStatusKey],
          field: undefined,
        }),
      );
    }

    const data: LoginResponse = await response.json();
    await setTokensToCookies(data);

    return data;
  } catch (error) {
    if (error instanceof Error) {
      const errorData = JSON.parse(error.message) as ApiError;

      return {
        code: errorData.code,
        message: errorData.message,
        field: errorData.field,
      };
    }

    return {
      code: 'HTTP_500',
      message: '로그인에 실패했습니다. 잠시 후 다시 시도해주세요.',
      field: undefined,
    };
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
