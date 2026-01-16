import { type ReactNode } from 'react';

import { type Dayjs } from 'dayjs';

import { dayjs } from '@/shared/lib';
import { Chip } from '@/shared/ui/chip';
import { Icon } from '@/shared/ui/icon';
import { IconButton } from '@/shared/ui/icon-button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/shared/ui/sheet';

type AddTodoSheetRootProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: ReactNode;
};

const AddTodoSheetRoot = ({
  open,
  onOpenChange,
  children,
}: AddTodoSheetRootProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="bottom" className="bg-card rounded-t-3xl p-6">
        <SheetHeader>
          <SheetTitle className="sr-only">투두 추가</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

type AddTodoSheetInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
};

const AddTodoSheetInput = ({
  value,
  onChange,
  onSubmit,
}: AddTodoSheetInputProps) => {
  return (
    <input
      placeholder="할 일을 입력하세요"
      className="w-full bg-transparent border-none text-[18px] font-bold text-white placeholder:text-white/20 outline-none p-0"
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onSubmit();
        }
      }}
    />
  );
};

type AddTodoSheetOptionsBarProps = {
  date: Dayjs;
  selectedCategory:
    | { id: number; categoryName: string; color: string }
    | undefined;
  onDateClick: () => void;
  onCategoryClick: () => void;
};

const AddTodoSheetOptionsBar = ({
  date,
  selectedCategory,
  onDateClick,
  onCategoryClick,
}: AddTodoSheetOptionsBarProps) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar pb-1">
      <Chip asChild size="md">
        <button
          type="button"
          onClick={onDateClick}
          className="typography-body-semibold text-white"
        >
          <Icon icon="ic_calendar_month" size="16" className="fill-current" />
          {dayjs(date).format('M. D. (ddd)')}
        </button>
      </Chip>
      <Chip asChild onClick={onCategoryClick} size="md">
        <button type="button">
          {selectedCategory ? (
            <>
              <div
                className="size-2.5 rounded-full shadow-sm mr-1"
                style={{ backgroundColor: selectedCategory.color }}
              />
              <span className="typography-body-semibold">
                {selectedCategory.categoryName}
              </span>
            </>
          ) : (
            <span className="typography-body-semibold">카테고리 선택</span>
          )}
          <Icon
            icon="ic_keyboard_arrow_down"
            size="14"
            className="opacity-50 fill-white"
          />
        </button>
      </Chip>
    </div>
  );
};

type AddTodoSheetSuggestedTagsProps = {
  onTagClick: (tag: string) => void;
};

const SUGGESTED_TAGS = [
  '미팅하기',
  '보고서쓰기',
  '이메일 보내기',
  '디자인하기',
] as const;

const AddTodoSheetSuggestedTags = ({
  onTagClick,
}: AddTodoSheetSuggestedTagsProps) => {
  return (
    <div className="flex-1 overflow-x-auto pb-1 no-scrollbar">
      <div className="flex items-center gap-2 whitespace-nowrap">
        {SUGGESTED_TAGS.map((tag) => (
          <Chip
            asChild
            key={tag}
            variant="ghost"
            onClick={() => onTagClick(tag)}
          >
            <button type="button">{tag}</button>
          </Chip>
        ))}
      </div>
    </div>
  );
};

type AddTodoSheetSubmitButtonProps = {
  disabled: boolean;
  onClick: () => void;
};

const AddTodoSheetSubmitButton = ({
  disabled,
  onClick,
}: AddTodoSheetSubmitButtonProps) => {
  return (
    <IconButton
      icon="ic_arrow_upward"
      size="40"
      className="bg-white-softer border-white-softer text-white/20"
      iconClassName="fill-current"
      disabled={disabled}
      onClick={onClick}
    />
  );
};

export const AddTodoSheetUI = Object.assign(AddTodoSheetRoot, {
  Input: AddTodoSheetInput,
  OptionsBar: AddTodoSheetOptionsBar,
  SuggestedTags: AddTodoSheetSuggestedTags,
  SubmitButton: AddTodoSheetSubmitButton,
});
