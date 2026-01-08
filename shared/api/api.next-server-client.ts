import { initAxiosInstance } from '@/shared/api/utils/api.instance';

import { ApiClient } from './api.core';
import { PROJECT_ENV } from '../constants';

const endPoint = PROJECT_ENV.nextServerApiEndPoint;

export const apiNextServerClient = new ApiClient(initAxiosInstance(endPoint));
