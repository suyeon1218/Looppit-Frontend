import { useCallback } from 'react';

import { useUpdateProfile } from '@/domains/user/hooks';
import { UpdateUserRequest } from '@/domains/user/user.types';

type UpdateFormData = Omit<UpdateUserRequest, 'content'>;

export const useSubmitOnboardingForm = () => {
  const { updateProfile } = useUpdateProfile();

  const submitOnboardingForm = useCallback(
    async (data: UpdateFormData, onSuccess?: () => void) => {
      await updateProfile({
        form: data,
        onSuccess,
      });
    },
    [updateProfile],
  );

  return { submitOnboardingForm };
};
