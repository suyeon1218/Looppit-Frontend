'use client';

import { initAxiosInstance } from '@/shared/api/utils/api.instance';
import {
  setupErrorInterceptors,
  setupRequestInterceptor,
} from '@/shared/api/utils/api.interceptors';

import { ApiClient } from './api.core';
import { PROJECT_ENV } from '../constants';

export const createNextServerAxiosClient = () => {
  const instance = initAxiosInstance(PROJECT_ENV.nextServerEndPoint);

  setupRequestInterceptor(instance);
  setupErrorInterceptors(instance);

  return instance;
};

export const apiNextServerClient = new ApiClient(createNextServerAxiosClient());
