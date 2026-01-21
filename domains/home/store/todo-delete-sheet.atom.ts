import { atom } from 'jotai';

import { TodoApiResponse } from '@/domains/home/types/todo.types';

export type TodoDeleteSheetProps = {
  todo: TodoApiResponse;
  categoryId: number;
};

export const todoDeleteSheetOpenAtom = atom<boolean>(false);
export const todoDeleteSheetTodoAtom = atom<TodoApiResponse | null>(null);
export const todoDeleteSheetCategoryIdAtom = atom<number | null>(null);

export const openTodoDeleteSheetAtom = atom(
  null,
  (get, set, { todo, categoryId }: TodoDeleteSheetProps) => {
    set(todoDeleteSheetTodoAtom, todo);
    set(todoDeleteSheetCategoryIdAtom, categoryId);
    set(todoDeleteSheetOpenAtom, true);
  },
);

export const closeTodoDeleteSheetAtom = atom(null, (get, set) => {
  set(todoDeleteSheetOpenAtom, false);
  set(todoDeleteSheetTodoAtom, null);
  set(todoDeleteSheetCategoryIdAtom, null);
});
