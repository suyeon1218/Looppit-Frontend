'use server';

import { NextResponse } from 'next/server';

import { AxiosError } from 'axios';

import { apiServerClient } from '@/shared/api/api.server-client';
import { applySetCookieHeader } from '@/shared/utils';

export const postLogin = async (formData: FormData) => {
  try {
    const response = await apiServerClient.requestRaw('/user/login', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    const setCookieHeaders = response.headers['set-cookie'];

    if (setCookieHeaders && Array.isArray(setCookieHeaders)) {
      await applySetCookieHeader(setCookieHeaders);
    }

    return {
      code: 'HTTP_200',
      message: '로그인에 성공했습니다.',
    };
  } catch (error) {
    const errorCode =
      error instanceof AxiosError ? error.response?.status : 500;
    const errorMessage =
      error instanceof AxiosError
        ? error.response?.data?.message
        : '로그인에 실패했습니다. 잠시 후 다시 시도해주세요';

    return NextResponse.json(
      {
        message: errorMessage,
      },
      { status: errorCode },
    );
  }
};
