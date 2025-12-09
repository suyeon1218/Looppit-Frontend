import { LoginErrorMessageValues } from './login.types';

export const LOGIN_ERROR_MESSAGES: LoginErrorMessageValues = {
  email: {
    invalid_type: '이메일 형식이 올바르지 않습니다.',
    too_small: '이메일을 입력해주세요.',
    server: '이메일 혹은 비밀번호가 일치하지 않습니다.',
  },
  password: {
    invalid_type: '비밀번호를 입력해주세요.',
    server: '이메일 혹은 비밀번호가 일치하지 않습니다.',
    too_small: '비밀번호를 입력해주세요.',
  },
} as const;
