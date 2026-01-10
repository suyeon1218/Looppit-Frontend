import { isAxiosError } from 'axios';

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

/**
 * 에러 코드를 추출하는 유틸
 * @param error - 에러 객체
 * @returns 에러 코드
 */
export const getErrorCode = (error: unknown): number => {
  if (isAxiosError(error)) {
    return error.response?.status ?? 500;
  }

  if (isError(error)) {
    return 500;
  }

  return 500;
};

export const getSafeErrorInfo = (error: unknown, defaultMessage: string) => {
  return {
    code: getErrorCode(error),
    message: getErrorMessage(error, defaultMessage),
  };
};
