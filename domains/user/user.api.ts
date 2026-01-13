import { apiNextServerClient } from '@/shared/api/api.next-server-client';

import { UserProfileResponse } from './user.types';

export const getUserProfile = async () => {
  return await apiNextServerClient.get<UserProfileResponse>('/user');
};
