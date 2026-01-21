'use client';

import type { ComponentProps } from 'react';
import { DayPicker } from 'react-day-picker';

import { Button } from '@/shared/ui/button';

import { MonthlyCalendar } from './monthly-calendar';
import { WeeklyCalendar } from './weekly-calendar';

type CalendarProps = ComponentProps<typeof DayPicker> & {
  buttonVariant?: ComponentProps<typeof Button>['variant'];
} & {
  type: 'weekly' | 'monthly';
  SubDayComponent?: React.ReactNode;
};

function Calendar({ type = 'monthly', ...props }: CalendarProps) {
  return type === 'monthly' ? (
    <MonthlyCalendar {...props} />
  ) : (
    <WeeklyCalendar {...props} />
  );
}

export { Calendar };
