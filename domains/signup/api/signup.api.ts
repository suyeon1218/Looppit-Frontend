import { apiClient } from '@/shared/api/api.client';
import {
  SignupRequest,
  SignupResponse,
} from '@/domains/signup/types/api.types';

export const postSignupRequest = async (data: SignupRequest) => {
  const response = await apiClient.post<SignupResponse>('/signup', data);

  return response.data;
};
