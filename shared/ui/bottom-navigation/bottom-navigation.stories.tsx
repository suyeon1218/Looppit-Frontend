import * as icons from '@/shared/assets/icons';
import { Container } from '@/shared/stories/components';
import { BottomNavigationBase } from '@/shared/ui/bottom-navigation';
import { IconName } from '@/shared/ui/icon';

import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Components/BottomNavigation',
  component: BottomNavigationBase.Item,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Looppit의 BottomNavigation 컴포넌트는 화면 하단에 고정되는 네비게이션 바를 제공합니다.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: '메뉴명',
      table: {
        type: { summary: 'string' },
      },
    },
    icon: {
      control: 'select',
      options: Object.keys(icons) as IconName[],
      description: '표시할 아이콘을 선택하세요',
    },
    activeIcon: {
      control: 'select',
      options: Object.keys(icons) as IconName[],
      description: '표시할 활성 상태의 아이콘을 선택하세요',
    },
    isActive: {
      control: 'boolean',
      description: '활성화 여부',
      table: {
        type: { summary: 'boolean' },
      },
    },
    onClick: {
      action: 'clicked',
      description: '클릭 핸들러',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
  args: {
    label: '홈',
    icon: 'ic_home',
    activeIcon: 'ic_home_fill',
    isActive: true,
    onClick: () => {},
  },
} satisfies Meta<typeof BottomNavigationBase.Item>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '홈',
    icon: 'ic_home',
    activeIcon: 'ic_home_fill',
    isActive: true,
    onClick: () => {},
  },
};

export const ActiveStatesStory: Story = {
  render: () => (
    <Container className="relative [&>nav]:absolute [&>nav]:bottom-0 h-[250px] p-0!">
      <BottomNavigationBase>
        <BottomNavigationBase.Item
          label="홈"
          icon="ic_home"
          activeIcon="ic_home_fill"
          isActive={true}
          onClick={() => {}}
        />
        <BottomNavigationBase.Item
          label="카테고리"
          icon="ic_category"
          activeIcon="ic_category_fill"
          isActive={false}
          onClick={() => {}}
        />
        <BottomNavigationBase.Item
          label="더보기"
          icon="ic_more_horiz"
          activeIcon="ic_more_horiz"
          isActive={false}
          onClick={() => {}}
        />
      </BottomNavigationBase>
    </Container>
  ),
};
