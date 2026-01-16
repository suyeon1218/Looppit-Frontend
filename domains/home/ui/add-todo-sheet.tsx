'use client';

import { AddTodoSheetUI } from '@/domains/home/ui/add-todo-sheet.ui';

import { useAddTodoSheet } from '../hooks/use-add-todo-sheet';

type AddTodoSheetProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  initialCategoryId?: number | null;
};

export const AddTodoSheet = ({
  open,
  onOpenChange,
  initialCategoryId,
}: AddTodoSheetProps) => {
  const {
    todoText,
    setTodoText,
    selectedCategory,
    today,
    handleSubmit,
    isSubmitting,
    selectedCategoryId,
    handleSheetOpenChange,
  } = useAddTodoSheet({
    open,
    onOpenChange,
    initialCategoryId,
  });

  const handleDateClick = () => {
    // TODO: 날짜 선택 모달 구현
  };

  const handleCategoryClick = () => {
    // TODO: 카테고리 선택 모달 구현
  };

  return (
    <AddTodoSheetUI open={open} onOpenChange={handleSheetOpenChange}>
      <AddTodoSheetUI.Input
        value={todoText}
        onChange={setTodoText}
        onSubmit={handleSubmit}
      />
      <div className="h-px w-full bg-white/5" />
      <AddTodoSheetUI.OptionsBar
        date={today}
        selectedCategory={selectedCategory}
        onDateClick={handleDateClick}
        onCategoryClick={handleCategoryClick}
      />
      <div className="mt-4 flex items-center gap-4">
        <AddTodoSheetUI.SuggestedTags onTagClick={setTodoText} />
        <AddTodoSheetUI.SubmitButton
          disabled={!todoText.trim() || !selectedCategoryId || isSubmitting}
          onClick={handleSubmit}
        />
      </div>
    </AddTodoSheetUI>
  );
};
