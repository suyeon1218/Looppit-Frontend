import { StrictPropsWithChildren } from '@/shared/types/components';
import { BottomNavigation } from '@/shared/ui/bottom-navigation';

export default function MainLayout({ children }: StrictPropsWithChildren) {
  return (
    <>
      {children}
      <div className="h-[65px]" />
      <div className="fixed bottom-0 w-full max-w-xl">
        <BottomNavigation />
      </div>
    </>
  );
}
