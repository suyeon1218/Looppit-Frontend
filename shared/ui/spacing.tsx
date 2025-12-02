'use client';

import { cn } from '../utils';

interface SpacingProps extends React.ComponentProps<'div'> {
  size: number;
  direction?: 'vertical' | 'horizontal';
}

function Spacing({
  size,
  direction = 'vertical',
  className,
  ...props
}: SpacingProps) {
  const style =
    direction === 'vertical' ? { height: `${size}px` } : { width: `${size}px` };

  return <div className={cn('flex-0', className)} style={style} {...props} />;
}

export { Spacing };
