import {
  queryOptions,
  useSuspenseQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { getUserProfile, updateUser } from '../user.api';
import { userKeys } from '../user.keys';
import { User, GetUserResponse } from '../user.types';

const profileQueryOption = queryOptions<UserProfileResponse>({
  queryKey: ['user-profile'],
  queryFn: getUserProfile,
  retry: false,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
});

export const useUserProfile = () => {
  return useQuery<UserProfileResponse>(profileQueryOption);
};

export const useUserProfileWithSuspense = () => {
  return useSuspenseQuery(profileQueryOption);
};

export const useGetUser = () => {
  return useQuery<GetUserResponse, Error, User>({
    queryKey: userKeys.base,
    queryFn: () => getUserProfile(),
    select: (data) => data.result,
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: userKeys.base });
    },
  });
};
