import { useMemo } from 'react';

import { useAtomValue } from 'jotai';

import { useTodosWithSuspense } from '@/domains/home/hooks';
import { todoYearMonthAtom } from '@/domains/home/store';
import { HabitStreakCard } from '@/domains/home/ui';
import { getContinuousDays } from '@/domains/home/utils';
import { QueryErrorBoundary } from '@/shared/ui/async-boundary';

const HabitStreakSectionContent = () => {
  const yearMonth = useAtomValue(todoYearMonthAtom);
  const { data } = useTodosWithSuspense(yearMonth);

  const allDates = useMemo(() => {
    return new Set(
      data.flatMap((todos) => todos.todo.map((todo) => todo.date)),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.length]);

  const continuousDays = getContinuousDays(allDates);

  return (
    <HabitStreakCard.Root>
      <HabitStreakCard.Content continuousDays={continuousDays} />
    </HabitStreakCard.Root>
  );
};

export const HabitStreakSection = () => {
  return (
    <QueryErrorBoundary
      loadingFallback={<HabitStreakCard.Skeleton />}
      errorFallback={<HabitStreakCard.Skeleton />}
    >
      <HabitStreakSectionContent />
    </QueryErrorBoundary>
  );
};
