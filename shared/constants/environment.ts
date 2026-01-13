import { validateEnv } from '@/shared/utils/env';

const envs = {
  node: {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
  },
  urls: {
    apiEndPoint: process.env.NEXT_PUBLIC_API_BASE_URL!,
    nextServerEndPoint: process.env.NEXT_PUBLIC_NEXT_SERVER_END_POINT!,
  },
} as const;

export const PROJECT_ENV = validateEnv({
  ...envs.urls,
  ...envs.node,
});
