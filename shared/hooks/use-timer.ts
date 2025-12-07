/**
 * 타이머를 세팅하고, 시간을 반환하는 훅
 */

import { useCallback, useRef, useState } from 'react';

import { formatTime } from '@/shared/utils/time-format';

export function useTimer(
  initialTime: number = 60,
  format: 'mm:ss' | 'ss' = 'mm:ss',
) {
  const [time, setTime] = useState<number>(initialTime);
  const timeRef = useRef<number>(time);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      if (timeRef.current <= 0) {
        if (timerRef.current) {
          clearInterval(timerRef.current);
        }
        return;
      }

      setTime((prev) => prev - 1);
      timeRef.current = timeRef.current - 1;
    }, 1000);
  }, []);

  const endTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      setTime(initialTime);
      timeRef.current = initialTime;
    }
  }, [initialTime]);

  return {
    time,
    formattedTime: formatTime(time, format),
    startTimer,
    endTimer,
  };
}
