export function formatTime(time: number, format: 'mm:ss' | 'ss') {
  if (format === 'mm:ss') {
    return `${Math.floor(time / 60)
      .toString()
      .padStart(2, '0')}:${(time % 60).toString().padStart(2, '0')}`;
  }

  return `${time}`;
}
