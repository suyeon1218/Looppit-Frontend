import { Icon } from '@/shared/ui/icon';
import { cn } from '@/shared/utils';

import { BottomNavItemProps } from './bottom-navigation.types';

const BottomNavItem = ({
  label,
  icon,
  activeIcon,
  isActive,
  onClick,
}: BottomNavItemProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex flex-col items-center gap-0.5 p-2 transition-colors',
        isActive ? 'text-primary opacity-100' : 'text-secondary opacity-50',
      )}
    >
      <Icon
        icon={isActive ? activeIcon : icon}
        size="24"
        className="fill-current"
      />
      <span className="typography-caption-bold tracking-tight">{label}</span>
    </button>
  );
};

type BottomNavigationProps = {
  children: React.ReactNode;
};

const BottomNavigationRoot = ({ children }: BottomNavigationProps) => {
  return (
    <nav className="w-full h-[65px] bg-background border-t border-white/5 z-10 shrink-0">
      <div className="flex items-center justify-around h-full">{children}</div>
    </nav>
  );
};

BottomNavigationRoot.Item = BottomNavItem;

export { BottomNavigationRoot as BottomNavigationBase };
