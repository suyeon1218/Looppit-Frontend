import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getDefaultStore } from 'jotai';

import { refreshTokenAtom, tokenAtom } from '@/shared/store/auth.atom';

import { fetchRefreshToken } from './api.action';

const store = getDefaultStore();

class RefreshTokenHandler {
  private isRefreshing: boolean;
  private suspendedRequests: InternalAxiosRequestConfig[];

  constructor() {
    this.isRefreshing = false;
    this.suspendedRequests = [];
  }

  private addSuspendedRequest(error: InternalAxiosRequestConfig): void {
    this.suspendedRequests.push(error);
  }

  private clearSuspendedRequests(): void {
    this.suspendedRequests = [];
  }

  private processSuspendedRequests(
    refreshToken: string,
  ): Promise<InternalAxiosRequestConfig> {
    return new Promise((resolve) => {
      this.suspendedRequests.forEach((request) => {
        if (!request) {
          throw new Error('Failed to refresh token');
        }
        request.headers.Authorization = `Bearer ${refreshToken}`;
        resolve(request);
      });
    });
  }

  async handleAuthorizedError(
    error: AxiosError,
  ): Promise<InternalAxiosRequestConfig> {
    this.isRefreshing = true;
    const originalRequest = error.config;

    if (!originalRequest) {
      return Promise.reject(error);
    }
    if (this.isRefreshing) {
      this.addSuspendedRequest(originalRequest);
    }

    try {
      const { accessToken, refreshToken } = await fetchRefreshToken();

      store.set(tokenAtom, accessToken);
      store.set(refreshTokenAtom, refreshToken);

      return await this.processSuspendedRequests(accessToken);
    } catch (error) {
      throw error;
    } finally {
      this.isRefreshing = false;
      this.clearSuspendedRequests();
    }
  }
}

const refreshTokenHandler = new RefreshTokenHandler();

export const handleAuthorizedError = async (error: AxiosError) =>
  await refreshTokenHandler.handleAuthorizedError(error);
