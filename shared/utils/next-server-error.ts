'use server';

import { NextResponse } from 'next/server';

import { getSafeErrorInfo } from './error';

export const makeNextResponseError = (
  error: unknown,
  defaultMessage: string = '알 수 없는 에러가 발생했습니다.',
) => {
  const { code, message } = getSafeErrorInfo(error, defaultMessage);

  return NextResponse.json({ message }, { status: code });
};
