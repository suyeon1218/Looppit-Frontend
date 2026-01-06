import { SocialProvider } from '@/domains/auth';
import {
  SOCIAL_PROVIDER_GOOGLE,
  SOCIAL_PROVIDER_KAKAO,
  SOCIAL_PROVIDER_NAVER,
} from '@/domains/auth/oauth';

export const getSocialProviderStyles = (provider: SocialProvider): string => {
  switch (provider) {
    case SOCIAL_PROVIDER_GOOGLE:
      return 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700';
    case SOCIAL_PROVIDER_KAKAO:
      return 'bg-[#FEE500] text-[#000000] hover:bg-[#FDD835]';
    case SOCIAL_PROVIDER_NAVER:
      return 'bg-[#03C75A] text-white hover:bg-[#02B350]';
    default:
      return '';
  }
};
