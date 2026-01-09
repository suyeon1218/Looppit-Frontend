import { IconName } from '@/shared/ui/icon';

export type NavItemStrategy = 'exact' | 'prefix' | 'regex';

export interface NavItem {
  /** 메뉴명 (예: "홈", "카테고리", "더보기") */
  label: string;
  /** 이동할 경로 (예: "/", "/category", "/settings") */
  href: string;
  /** 기본 상태의 아이콘 이름 (예: "ic_home") */
  iconName: IconName;
  /** 활성 상태의 아이콘 이름 (예: "ic_home_fill") */
  activeIconName: IconName;
  /** 활성화 판단 모드 */
  strategy: NavItemStrategy;
}

export interface BottomNavItemProps {
  /** 메뉴명 */
  label: string;
  /** 기본 상태의 아이콘 이름 */
  icon: IconName;
  /** 활성 상태의 아이콘 이름 */
  activeIcon: IconName;
  /** 활성화 여부 */
  isActive: boolean;
  /** 클릭 핸들러 */
  onClick: () => void;
}
