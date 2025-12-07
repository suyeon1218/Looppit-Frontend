import { useMutation } from '@tanstack/react-query';

import { postLoginRequest } from '../api';

export const useLogin = () => {
  return useMutation({
    mutationFn: postLoginRequest,
  });
};
