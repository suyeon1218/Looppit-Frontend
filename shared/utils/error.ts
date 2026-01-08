import { NextResponse } from 'next/server';

import { AxiosError } from 'axios';

/**
 * Error 객체인지 확인하는 타입 가드
 * @param error - 확인할 에러 객체
 * @returns Error 인스턴스인지 여부
 */
export const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

/**
 * 에러 메시지를 추출하는 유틸
 * @param error - 에러 객체
 * @param defaultMessage - 기본 메시지
 * @returns 에러 메시지 또는 기본 메시지
 */
export const getErrorMessage = (
  error: unknown,
  defaultMessage: string,
): string => {
  return isError(error) ? error.message : defaultMessage;
};

export const makeNextResponseError = (
  error: unknown,
  defaultMessage: string = '알 수 없는 에러가 발생했습니다.',
) => {
  const errorCode = error instanceof AxiosError ? error.response?.status : 500;
  const errorMessage =
    error instanceof AxiosError
      ? error.response?.data?.message
      : defaultMessage;

  return NextResponse.json({ message: errorMessage }, { status: errorCode });
};
