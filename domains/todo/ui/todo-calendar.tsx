'use client';

import { CompletedCategoryData } from '@/domains/home/utils';
import { Calendar } from '@/shared/ui/calendar';
import { CalendarProps } from '@/shared/ui/calendar';

import { TodoCalendarCompletedDots } from './todo-calendar-completed-dots';

type TodoCalendarProps = CalendarProps & {
  completedColors: CompletedCategoryData;
};

function TodoCalendar({
  type = 'monthly',
  completedColors,
  ...props
}: TodoCalendarProps) {
  return (
    <Calendar
      type={type}
      SubDayComponent={({ day }) => (
        <TodoCalendarCompletedDots
          day={day}
          completedColorsByDate={completedColors}
        />
      )}
      {...props}
    />
  );
}

export { TodoCalendar };
