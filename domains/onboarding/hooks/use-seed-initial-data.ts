import { useEffect } from 'react';

import { DEFAULT_CATEGORY } from '@/domains/category/constants';
import { useCategories, useCreateCategory } from '@/domains/category/hooks';

let hasRun = false;

export const useSeedInitialData = () => {
  const { data = [], isSuccess } = useCategories();
  const createCategory = useCreateCategory({ showSuccessToast: false });

  useEffect(() => {
    if (hasRun) return;
    if (!isSuccess || data.length !== 0) return;

    hasRun = true;

    const runOnce = async () => {
      await createCategory.mutateAsync(DEFAULT_CATEGORY);
    };

    runOnce();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return null;
};
