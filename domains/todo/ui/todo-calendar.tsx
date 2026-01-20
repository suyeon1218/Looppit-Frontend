'use client';

import type { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

import { Button } from '@/shared/ui/button';
import { Calendar } from '@/shared/ui/calendar';

import { TodoCalendarCompletedDots } from './todo-calendar-completed-dots';

type CalendarProps = ComponentProps<typeof DayPicker> & {
  buttonVariant?: ComponentProps<typeof Button>['variant'];
} & {
  type: 'weekly' | 'monthly';
  completedColors: { color: string; id: string }[];
};

function TodoCalendar({ type = 'monthly', completedColors, ...props }: CalendarProps) {
  return (
    <Calendar type={type} SubDayComponent={<TodoCalendarCompletedDots colors={completedColors} />} {...props} />
  )
}

export { TodoCalendar };
