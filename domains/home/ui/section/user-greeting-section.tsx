import { UserProfileCard } from '@/domains/home/ui';
import { useUserProfileWithSuspense } from '@/domains/user/hooks';
import { QueryErrorBoundary } from '@/shared/ui/async-boundary';

export const UserGreetingSectionContent = () => {
  const {
    data: { result },
  } = useUserProfileWithSuspense();

  return (
    <UserProfileCard.Root>
      <UserProfileCard.Item
        userId={result.id}
        nickname={result.nickname}
        imgPath={result.imgPath}
      />
    </UserProfileCard.Root>
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
