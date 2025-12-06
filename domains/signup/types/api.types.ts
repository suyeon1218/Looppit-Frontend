import { SignupFormValues } from './signup.types';

export type SignupRequest = SignupFormValues;

export type SignupResponse = {
  id: string;
  email: string;
  password: string;
};

export type VerifyEmailRequest = {
  email: string;
};

export type VerifyEmailResponse = unknown;
