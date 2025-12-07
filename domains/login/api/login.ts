import { apiClient } from '@/shared/api/api.client';

import { LoginRequest, LoginResponse } from '../types/api';

export const postLoginRequest = async (data: LoginRequest) => {
  const response = await apiClient.post<LoginResponse>('/user/login', data);

  return response.data;
};
