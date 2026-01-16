import { useEffect } from 'react';

import { useAddTodoForm } from './use-add-todo-form';

type UseAddTodoSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialCategoryId?: number | null;
};

export const useAddTodoSheet = ({
  open,
  onOpenChange,
  initialCategoryId,
}: UseAddTodoSheetProps) => {
  const form = useAddTodoForm(() => {
    onOpenChange(false);
  }, initialCategoryId);

  useEffect(() => {
    if (open && initialCategoryId !== undefined) {
      form.setSelectedCategoryId(initialCategoryId);
    }
  }, [open, initialCategoryId, form, form.setSelectedCategoryId]);

  const handleSheetOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      form.reset();
    }
    onOpenChange(isOpen);
  };

  return {
    ...form,
    handleSheetOpenChange,
  };
};
