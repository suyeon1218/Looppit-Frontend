import { apiClient } from '@/shared/api/api.client';
import { ApiResponse, ServerFetchOptions } from '@/shared/api/api.types';
import { toRequestHeadersFromOptions } from '@/shared/api/utils';

import {
  UpdateUserRequest,
  GetUserResponse,
  DeleteUserRequest,
} from './user.types';

export const getUserProfile = async (
  options?: ServerFetchOptions,
): Promise<GetUserResponse> => {
  const headers = toRequestHeadersFromOptions(options);
  const response = await apiClient.get<ApiResponse<GetUserResponse>>(
    '/user',
    headers,
  );
  return response.result;
};

export const updateUser = async (data: UpdateUserRequest) => {
  return await apiClient.put<GetUserResponse>('/user', data);
};

export const deleteUser = async (data: DeleteUserRequest) => {
  return await apiClient.delete<void>('/user', data);
};
