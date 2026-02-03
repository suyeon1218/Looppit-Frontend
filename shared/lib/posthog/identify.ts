import type { UserProfile } from '@/domains/user/user.types';

import { isPostHogReady, posthogClient } from './posthog';

export interface UserIdentifyProperties extends Pick<
  UserProfile,
  'nickname' | 'provider'
> {
  user_id: UserProfile['id'];
}

const extractIdentifyProperties = (
  user: UserProfile,
): UserIdentifyProperties => {
  return {
    nickname: user.nickname,
    provider: user.provider,
    user_id: user.id,
  };
};

export const identifyUser = (user: UserProfile): void => {
  if (!isPostHogReady()) {
    return;
  }

  const properties = extractIdentifyProperties(user);
  posthogClient.identify(String(user.id), properties);
};
