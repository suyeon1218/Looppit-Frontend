import { Button } from '@/shared/ui/button';
import { IconName } from '@/shared/ui/icon';
import { IconButton } from '@/shared/ui/icon-button';
import { cn } from '@/shared/utils';

interface AccountCardLeftIconProps {
  icon: IconName;
  className?: string;
  iconClassName?: string;
}

function AccountCardLeftIcon({
  icon,
  className,
  iconClassName,
}: AccountCardLeftIconProps) {
  return (
    <Button.OutlineIcon
      icon={icon}
      iconClassName={cn(iconClassName)}
      className={cn('bg-white/5 size-8', className)}
    />
  );
}

interface AccountCardItemRootProps {
  label: string;
  variant?: 'ghost' | 'outline';
  children?: React.ReactNode;
}

function AccountCardItemRoot({
  label,
  variant = 'ghost',
  children,
}: AccountCardItemRootProps) {
  return (
    <div
      className={cn(
        'pr-4 flex items-center justify-between',
        variant === 'outline' &&
          'bg-card rounded-small border border-white/10 overflow-hidden shadow-lg divide-y divide-white/5',
      )}
    >
      <Button
        variant="ghost"
        align="start"
        className="typography-caption-medium gap-2 text-white/90"
      >
        {children}
        {label}
      </Button>
      <IconButton
        className="border-none"
        icon="ic_chevron_right"
        size="28"
        iconClassName="fill-secondary opacity-40"
      />
    </div>
  );
}

const AccountCardItem = Object.assign(AccountCardItemRoot, {
  LeftIcon: AccountCardLeftIcon,
});

export { AccountCardItem };
