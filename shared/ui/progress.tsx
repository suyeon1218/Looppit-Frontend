'use client';

import * as React from 'react';

import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '@/shared/utils';

function Progress({
  className,
  bgColor,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & { bgColor: string }) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-card relative h-1.5 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full rounded-full transition-all duration-500"
        style={{
          transform: `translateX(-${100 - (value || 0)}%)`,
          background: bgColor,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
