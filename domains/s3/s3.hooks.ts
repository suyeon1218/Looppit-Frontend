import { useMutation } from '@tanstack/react-query';

import { createPresignedUrl } from './s3.api';

export const useCreatePresignedUrl = () => {
  return useMutation({
    mutationFn: createPresignedUrl,
  });
};
