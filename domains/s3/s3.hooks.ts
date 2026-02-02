import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

import { createPresignedUrl, uploadFileWithPresignedUrl } from './s3.api';
import { CreatePresignedUrlRequest, PresignedUrlResponse } from './s3.types';

export const useCreatePresignedUrl = () => {
  return useMutation<PresignedUrlResponse, Error, CreatePresignedUrlRequest>({
    mutationFn: createPresignedUrl,
  });
};

export const useUploadFileWithPresignedUrl = () => {
  return useMutation({
    mutationFn: uploadFileWithPresignedUrl,
    onError: () => {
      toast.error(
        '파일을 업로드하는 과정에서 오류가 발생했어요. 다시 시도해주세요.',
      );
    },
  });
};
