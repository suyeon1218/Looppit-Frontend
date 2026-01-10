import { ApiResponse } from '../api.types';

export const createApiResponse = <T>(
  data: T,
  message?: string,
): ApiResponse<T> => {
  return {
    data,
    message: message || '요청이 성공했습니다.',
    timestamp: new Date().toISOString(),
  };
};
