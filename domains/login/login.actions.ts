import { signIn } from 'next-auth/react';

import { bridgeRequest, logger, platformHandler } from '@/shared/utils';

/**
 * Auth 도메인 브릿지 액션 상수
 */
const ACTION_TYPE = 'USER_ACTION';
const NEXT_AUTH_OPTIONS = {
  callbackUrl: '/',
};

/**
 * Google 로그인 처리
 * - 웹: NextAuth를 통해 Google OAuth 로그인 진행
 */
export const handleGoogleLogin = async () => {
  try {
    await signIn('google', NEXT_AUTH_OPTIONS);
  } catch (error) {
    logger.log('@@ 네트워크나 기타 알 수 없는 에러', error);
  }
};

/**
 * 카카오 로그인 처리
 * - 앱: 브릿지를 통해 네이티브 앱에 카카오 로그인 요청
 * - 웹: NextAuth를 통해 카카오 OAuth 로그인 진행
 */
export const handleKakaoLogin = async () => {
  try {
    await platformHandler()
      .app(async () => {
        await bridgeRequest(ACTION_TYPE, {
          action: 'kakao_login',
        });
      })
      .web(async () => {
        await signIn('kakao', NEXT_AUTH_OPTIONS);
      })
      .execute();
  } catch (error) {
    logger.log('@@ 네트워크나 기타 알 수 없는 에러', error);
  }
};

/**
 * 네이버 로그인 처리
 * - 웹: NextAuth를 통해 네이버 OAuth 로그인 진행
 */
export const handleNaverLogin = async () => {
  try {
    await signIn('naver', NEXT_AUTH_OPTIONS);
  } catch (error) {
    logger.log('@@ 네트워크나 기타 알 수 없는 에러', error);
  }
};
