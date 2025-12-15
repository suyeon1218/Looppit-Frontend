import axios, { AxiosInstance } from 'axios';

import { ENVS } from '@/shared/constants';

import { API_TIMEOUT } from '../api.constants';

export const initAxiosInstance = (): AxiosInstance => {
  return axios.create({
    baseURL: ENVS.BASE_URL,
    timeout: API_TIMEOUT,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
