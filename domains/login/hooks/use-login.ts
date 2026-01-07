import { useRouter } from 'next/navigation';

import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { isApiError } from '@/shared/guard';
import { useSetTokenAtom } from '@/shared/store/auth.atom';

import { loginAction } from '../api';

export const useLogin = () => {
  const setTokenAtom = useSetTokenAtom();
  const router = useRouter();

  return useMutation({
    mutationFn: (formData: FormData) => loginAction(formData),
    onError: (error) => {
      if (isApiError(error)) {
        toast.error(error.message);
      }
    },
    onSuccess: (data) => {
      if (data && 'accessToken' in data) {
        setTokenAtom(data.accessToken);
        router.push('/');
      }
    },
  });
};
