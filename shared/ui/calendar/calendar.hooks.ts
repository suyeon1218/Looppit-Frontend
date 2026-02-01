import { useState } from 'react';

import { addWeeks, isSameWeek, startOfWeek, subWeeks } from 'date-fns';

export const useWeeklyCalendar = (selectedDate?: Date) => {
  const [month, setMonth] = useState<Date>(() =>
    selectedDate ? startOfWeek(selectedDate) : new Date(),
  );

  // 선택된 날짜가 바뀌면 해당 날짜가 포함된 주로 표시 주 동기화 (렌더 시점 동기화로 effect 회피)
  const selectedTime = selectedDate?.getTime();
  const weekOfSelected =
    selectedTime != null ? startOfWeek(new Date(selectedTime)) : null;

  if (weekOfSelected && weekOfSelected.getTime() !== month.getTime()) {
    setMonth(weekOfSelected);
  }

  // 주 단위일 때 현재 표시되는 주를 인덱스로 반환
  const currentWeekStart = startOfWeek(month);

  // 현재 주가 아닌 날짜들을 식별하는 modifier (주 단위 숨김을 위해 사용)
  const isNotCurrentWeek = (date: Date) => {
    return !isSameWeek(date, currentWeekStart);
  };

  const onClickPreviousWeek = () => {
    setMonth(startOfWeek(subWeeks(month, 1)));
  };

  const onClickNextWeek = () => {
    setMonth(startOfWeek(addWeeks(month, 1)));
  };

  return {
    isNotCurrentWeek,
    onClickPreviousWeek,
    onClickNextWeek,
    month,
    setMonth,
  };
};
