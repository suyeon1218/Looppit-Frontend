export const ACCOUNT_PROVIDERS = ['GOOGLE', 'KAKAO', 'NAVER'] as const;

export type AccountProvider = (typeof ACCOUNT_PROVIDERS)[number];

export const SOCIAL_PROVIDERS = ['google', 'kakao', 'naver'] as const;

export type SocialProvider = (typeof SOCIAL_PROVIDERS)[number];
