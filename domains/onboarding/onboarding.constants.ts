import { OnboardingStep } from './onboarding.types';

export const ONBOARDING_STEPS: Record<string, OnboardingStep> = {
  NICKNAME_STEP: 'nicknameStep',
  PROFILE_IMAGE_STEP: 'profileImageStep',
  COMPLETED_STEP: 'completedStep',
} as const;

export const ONBOARDING_STEPS_INFO = {
  [ONBOARDING_STEPS.NICKNAME_STEP]: {
    step: 1,
    title: '사용할 이름을 알려주세요',
    description: '앱에서 표시될 이름이에요',
  },
  [ONBOARDING_STEPS.PROFILE_IMAGE_STEP]: {
    step: 2,
    title: '프로필 사진을 추가해 보세요',
    description: '사진은 나중에 변경할 수 있어요',
  },
  [ONBOARDING_STEPS.COMPLETED_STEP]: {
    step: 3,
    title: '이제, 루핏을 이용할 수 있어요',
    description: '오늘 할 일을 기록하고, 하나씩 실행해 보세요',
  },
};
