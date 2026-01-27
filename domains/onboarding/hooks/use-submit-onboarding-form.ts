import { useCallback } from 'react';

import { useUpdateProfile } from '@/domains/user/hooks';
import { UpdateUserRequest } from '@/domains/user/user.types';

type UpdateFormData = Pick<UpdateUserRequest, 'nickname'> & {
  imageFile?: File;
};

export const useSubmitOnboardingForm = () => {
  const { updateProfile } = useUpdateProfile();

  const submitForm = useCallback(
    async (data: UpdateFormData) => {
      await updateProfile(data);
    },
    [updateProfile],
  );

  return { submitForm };
};
