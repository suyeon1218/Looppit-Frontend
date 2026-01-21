'use client';

import { useMemo } from 'react';

import { useTodoDeleteSheet } from '@/domains/home/hooks/use-todo-delete-sheet';
import { useDeleteTodo } from '@/domains/home/hooks/use-todo-mutations';
import { TodoDeleteSheet } from '@/domains/home/ui/todo-delete-sheet';
import { dayjs } from '@/shared/lib';

export const TodoDeleteSheetContainer = () => {
  const { isOpen, categoryId, todo, closeSheet } = useTodoDeleteSheet();

  const yearMonth = useMemo(() => dayjs().format('YYYY-MM'), []);
  const deleteTodoMutation = useDeleteTodo(yearMonth);

  const handleDelete = () => {
    if (!todo || !categoryId) return;
    deleteTodoMutation.mutate({
      categoryId,
      todoId: todo.todoId,
    });
  };

  return (
    <TodoDeleteSheet
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          closeSheet();
        }
      }}
      onDelete={handleDelete}
    />
  );
};
