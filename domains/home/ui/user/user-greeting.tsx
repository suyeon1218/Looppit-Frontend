import { useUserProfileWithSuspense } from '@/domains/user/user.hooks';
import { QueryErrorBoundary } from '@/shared/ui/async-boundary';

import { UserProfileCard } from './user-profile-card';

export const UserGreetingContent = () => {
  const { data } = useUserProfileWithSuspense();

  return (
    <UserProfileCard.Root>
      <UserProfileCard.Item
        userId={data.id}
        nickname={data.nickname}
        imagePath={data.imagePath}
      />
    </UserProfileCard.Root>
  );
};

export const UserGreeting = () => {
  return (
    <QueryErrorBoundary
      loadingFallback={<UserProfileCard.Skeleton />}
      errorFallback={<UserProfileCard.Skeleton />}
    >
      <UserGreetingContent />
    </QueryErrorBoundary>
  );
};
