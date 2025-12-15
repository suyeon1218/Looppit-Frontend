'use client';

import { Button } from '@/shared/ui/button';
import { Separator } from '@/shared/ui/separator';

import {
  handleGoogleLogin,
  handleKakaoLogin,
  handleNaverLogin,
} from '../login.actions';
import { SocialProvider } from '../login.types';
import { getSocialProviderStyles } from './social-login.utils';

interface SocialLoginButtonProps {
  provider: SocialProvider;
  label: string;
}

const SOCIAL_LOGIN_HANDLERS: Record<SocialProvider, () => Promise<void>> = {
  google: handleGoogleLogin,
  kakao: handleKakaoLogin,
  naver: handleNaverLogin,
};

export default function SocialLoginButtons() {
  return (
    <div className="flex flex-col gap-3">
      <div className="relative flex items-center justify-center">
        <Separator className="w-full" />
        <span className="absolute bg-white px-2 text-sm text-gray-500 dark:bg-black dark:text-gray-400">
          또는
        </span>
      </div>
      <div className="flex flex-col gap-2">
        <SocialLoginButton provider="google" label="Google로 로그인" />
        <SocialLoginButton provider="kakao" label="카카오로 로그인" />
        <SocialLoginButton provider="naver" label="네이버로 로그인" />
      </div>
    </div>
  );
}

const SocialLoginButton = ({ provider, label }: SocialLoginButtonProps) => {
  const handleSocialLogin = async () => {
    await SOCIAL_LOGIN_HANDLERS[provider]();
  };

  return (
    <Button
      type="button"
      variant="outline"
      className={`w-full ${getSocialProviderStyles(provider)}`}
      onClick={handleSocialLogin}
    >
      {label}
    </Button>
  );
};
