import { useMemo } from 'react';

import { TodoCalendar } from '@/domains/todo/ui';

import { useTodosByDate } from '../hooks';
import { getCompletedCategoryData } from '../utils';
import { MonthlyCalendarSheet } from './sheets';

interface CalendarSectionProps {
  todoYearMonth: string;
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
}

export const CalendarSection = ({
  todoYearMonth,
  selectedDate,
  setSelectedDate,
}: CalendarSectionProps) => {
  const { data: todos } = useTodosByDate(todoYearMonth);
  const completedCategoryData = useMemo(() => {
    if (!todos) return {};
    return getCompletedCategoryData(todos);
  }, [todos]);

  const handleSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <div className="relative">
      <TodoCalendar
        mode="single"
        type="weekly"
        selected={new Date(selectedDate)}
        onSelect={handleSelect}
        completedColors={completedCategoryData}
      />
      <MonthlyCalendarSheet
        selectedDate={selectedDate}
        onSelect={handleSelect}
        completedCategoryData={completedCategoryData}
      />
    </div>
  );
};
