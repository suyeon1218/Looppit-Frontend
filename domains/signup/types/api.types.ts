import { SignupFormValues } from './signup.types';

export type SignupRequest = SignupFormValues;

export type SignupResponse = {
  id: string;
  email: string;
  password: string;
};
