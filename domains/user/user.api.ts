import { apiClient } from '@/shared/api/api.client';
import { ApiResponse } from '@/shared/api/api.types';

import { UpdateUserRequest, GetUserResponse } from './user.types';

export const getUserProfile = async () => {
  return await apiClient.get<GetUserResponse>('/user');
};

export const updateUser = async (data: UpdateUserRequest) => {
  return await apiClient.put<GetUserResponse>('/user', data);
};
