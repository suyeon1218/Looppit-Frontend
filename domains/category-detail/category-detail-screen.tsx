'use client';

import { useParams } from 'next/navigation';

import { useCategoriesWithSuspense } from '@/domains/category/hooks';
import {
  CategoryDetailInfo,
  CategoryDetailLoading,
  CategoryDetailNotFound,
  CategoryDetailHeader,
} from '@/domains/category-detail/ui';
import { QueryErrorBoundary } from '@/shared/ui/async-boundary';
import { ConditionalRender } from '@/shared/ui/condition-render';

const CategoryDetailContent = () => {
  const { id } = useParams<{ id: string }>();
  const { data: categories = [] } = useCategoriesWithSuspense();
  const category = categories.find(
    ({ id: categoryId }) => categoryId === Number(id),
  );

  return (
    <ConditionalRender when={!!category} fallback={<CategoryDetailNotFound />}>
      <CategoryDetailHeader />
      <CategoryDetailInfo category={category!} />
    </ConditionalRender>
  );
};

export const CategoryDetailScreen = () => {
  return (
    <QueryErrorBoundary loadingFallback={<CategoryDetailLoading />}>
      <CategoryDetailContent />
    </QueryErrorBoundary>
  );
};
