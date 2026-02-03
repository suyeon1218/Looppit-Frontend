'use client';

import { useEffect } from 'react';

import { useUserProfile } from '@/domains/user/user.hooks';

import { identifyUser } from './identify';

export const PostHogUserIdentify = () => {
  const { data } = useUserProfile();

  useEffect(() => {
    if (data) {
      identifyUser(data);
    }
  }, [data]);

  return null;
};
