import Link from 'next/link';

import { UserProfileCard } from '@/domains/home/ui';
import { useUserProfileWithSuspense } from '@/domains/user/hooks';
import { QueryErrorBoundary } from '@/shared/ui/async-boundary';

export const UserGreetingSectionContent = () => {
  const { data } = useUserProfileWithSuspense();

  return (
    <Link href="/profile">
      <UserProfileCard.Root>
        <UserProfileCard.Item
          userId={data.id}
          nickname={data.nickname}
          imgPath={data.imgPath}
          content={data.content}
        />
      </UserProfileCard.Root>
    </Link>
  );
};

export const UserGreetingSection = () => {
  return (
    <QueryErrorBoundary
      loadingFallback={<UserProfileCard.Skeleton />}
      errorFallback={<UserProfileCard.Skeleton />}
    >
      <UserGreetingSectionContent />
    </QueryErrorBoundary>
  );
};
