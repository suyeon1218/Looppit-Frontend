import { AxiosInstance } from 'axios';

import {
  handleNetworkError,
  handleResponseError,
} from '@/shared/api/utils/api.error';

export const setupRequestInterceptor = (instance: AxiosInstance) => {
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => Promise.reject(error),
  );
};

export const setupErrorInterceptors = (instance: AxiosInstance) => {
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (!error.response) {
        return handleNetworkError();
      }

      return handleResponseError(error);
    },
  );
};
