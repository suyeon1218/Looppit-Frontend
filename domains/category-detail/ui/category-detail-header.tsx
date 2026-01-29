'use client';

import { useRouter } from 'next/navigation';

import { DetailHeader } from '@/shared/ui/detail-header';

export const CategoryDetailHeader = () => {
  const router = useRouter();

  return (
    <DetailHeader
      title="상세 정보"
      onLeftClick={() => router.back()}
      rightIcon="ic_more_horiz"
    />
  );
};

export const CategoryDetailHeaderFallback = () => {
  const router = useRouter();

  return <DetailHeader title="상세 정보" onLeftClick={() => router.back()} />;
};
