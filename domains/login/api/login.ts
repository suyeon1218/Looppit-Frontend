import { apiClient } from '@/shared/api/api.client';

import { LoginRequest } from '../types/api';

export const postLoginRequest = async (data: LoginRequest) => {
  const formData = new FormData();
  formData.append('email', data.email);
  formData.append('password', data.password);
  const response = await apiClient.post('/user/login', formData, {
    'Content-Type': 'multipart/form-data',
  });

  return response.data;
};
