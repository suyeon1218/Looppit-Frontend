export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

export const envs = {
  urls: {
    apiEndPoint: process.env.NEXT_PUBLIC_API_BASE_URL!,
  },
} as const;

export const PROJECT_ENV = {
  ...envs.urls,
} as const;
