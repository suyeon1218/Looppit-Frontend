'use client';

import { useMemo } from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { BottomNavigationBase } from './bottom-navigation.base';
import { NAV_ITEMS } from './bottom-navigation.constants';
import { isNavItemActive } from './bottom-navigation.utils';

export const BottomNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const itemsWithActiveState = useMemo(
    () =>
      NAV_ITEMS.map((item) => ({
        ...item,
        isActive: isNavItemActive(pathname, item.href, item.strategy),
      })),
    [pathname],
  );

  return (
    <BottomNavigationBase>
      {itemsWithActiveState.map((item) => (
        <BottomNavigationBase.Item
          key={item.href}
          label={item.label}
          icon={item.iconName}
          activeIcon={item.activeIconName}
          isActive={item.isActive}
          onClick={() => router.push(item.href)}
        />
      ))}
    </BottomNavigationBase>
  );
};
