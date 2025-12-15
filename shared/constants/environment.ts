const OAUTH = {
  NEXT_AUTH: {
    SECRET: process.env.AUTH_SECRET,
    BASE_URL: process.env.AUTH_URL,
  },
  GOOGLE: {
    ID: process.env.AUTH_GOOGLE_ID,
    SECRET: process.env.AUTH_GOOGLE_SECRET,
  },
  KAKAO: {
    ID: process.env.AUTH_KAKAO_ID,
    SECRET: process.env.AUTH_KAKAO_SECRET,
  },
  NAVER: {
    ID: process.env.AUTH_NAVER_ID,
    SECRET: process.env.AUTH_NAVER_SECRET,
  },
};

const URL = {
  API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
};

export const ENVS = {
  ...OAUTH,
  ...URL,
};
