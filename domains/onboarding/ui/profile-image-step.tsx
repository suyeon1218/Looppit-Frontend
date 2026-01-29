import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { toast } from 'sonner';

import { InputProfileImage } from '@/shared/ui/user';
import { getImageFileValidatorError } from '@/shared/utils';

import { OnboardingFormValues } from '../onboarding.types';

function ProfileImageStep() {
  const { setValue, watch } = useFormContext<OnboardingFormValues>();
  const profileImage = watch('profileImage');

  const imageUrl = (() => {
    if (!profileImage) return null;
    if (profileImage instanceof File) {
      return URL.createObjectURL(profileImage);
    }
    return profileImage;
  })();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const error = getImageFileValidatorError(file);

    if (!file) return;
    if (error) {
      toast.error(error);
      return;
    }
    setValue('profileImage', file);
  };

  /**
   * 이미지 URL이 blob URL인 경우 메모리 누수 방지용 코드
   * 이전 이미지 URL을 참조하는 객체가 없어지면 메모리 누수가 발생할 수 있음
   */
  useEffect(() => {
    const url = imageUrl;
    return () => {
      if (url && url.startsWith('blob:')) {
        URL.revokeObjectURL(url);
      }
    };
  }, [imageUrl]);

  return (
    <InputProfileImage
      imageUrl={imageUrl}
      handleFileChange={handleFileChange}
    />
  );
}

export { ProfileImageStep };
