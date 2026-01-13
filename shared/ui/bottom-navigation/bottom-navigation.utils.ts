import { NavItemStrategy } from './bottom-navigation.types';

export function isNavItemActive(
  pathname: string,
  href: string,
  strategy: NavItemStrategy,
): boolean {
  switch (strategy) {
    case 'exact':
      return pathname === href;
    case 'prefix':
      return pathname.startsWith(href);
    case 'regex':
      return new RegExp(href).test(pathname);
    default:
      return false;
  }
}
