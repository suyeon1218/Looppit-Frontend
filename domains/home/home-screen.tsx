'use client';

import { useState } from 'react';

import HabitStreakCard from '@/domains/home/ui/habit-streak-card';
import UserGreeting from '@/domains/home/ui/user-greeting';
import useSwipeable from '@/shared/hooks/use-swipeable';
import { IconButton } from '@/shared/ui/icon-button';
import SwipeableContainer from '@/shared/ui/swipeable-container';
import { TodoItem } from '@/shared/ui/todo/todo-item';
import { TodoItemHeader } from '@/shared/ui/todo/todo-item-header';

export default function HomeScreen() {
  const [isChecked, setIsChecked] = useState(false);
  const { isOpened } = useSwipeable();

  const handleCategoryEditSheet = () => {
    console.log('@@ 수정하기 바텀시트');
  };

  const handleAddTodo = () => {
    console.log('@@ 투두 추가 바텀시트');
  };

  const handleClickTask = () => {
    if (isOpened) return;
  };

  return (
    <div className="pt-9 px-5 min-h-screen flex flex-col gap-5">
      <UserGreeting
        name="Alex"
        profileImage="https://picsum.photos/seed/alex/200/200"
      />
      <HabitStreakCard />
      <TodoItemHeader
        title="건강"
        color="#1c763c"
        completedCount={3}
        totalCount={10}
      />
      <SwipeableContainer actions={<TodoActions />}>
        <TodoItem
          label="조깅하기"
          isChecked={isChecked}
          onCheckedChange={setIsChecked}
          onLabelClick={handleClickTask}
        />
      </SwipeableContainer>
    </div>
  );
}

const TodoActions = () => {
  return (
    <div className="shrink-0 w-[130px] flex items-center justify-center gap-2 px-3">
      <IconButton
        icon="ic_more_horiz"
        size="40"
        iconClassName="fill-current"
        className="bg-card-lighter text-secondary"
      />
      <IconButton
        icon="ic_delete"
        size="40"
        iconClassName="fill-current"
        className="bg-destructive text-white"
      />
    </div>
  );
};
