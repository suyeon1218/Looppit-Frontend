import { useMutation } from '@tanstack/react-query';

import { postSignupRequest } from './signup.api';

export const useSignup = () => {
  return useMutation({
    mutationFn: postSignupRequest,
  });
};
