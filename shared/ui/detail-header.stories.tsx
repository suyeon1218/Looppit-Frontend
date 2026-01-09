import * as icons from '@/shared/assets/icons';
import { Container, createHiddenArgs } from '@/shared/stories/components';
import { DetailHeader } from '@/shared/ui/detail-header';
import { IconName } from '@/shared/ui/icon';

import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Components/DetailHeader',
  component: DetailHeader,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Looppit의 DetailHeader 컴포넌트는 상세 페이지에서 사용되는 헤더입니다.<br/>' +
          '왼쪽 뒤로가기 버튼, 중앙 타이틀, 오른쪽 액션 버튼으로 구성됩니다.',
      },
    },
  },
  argTypes: {
    title: {
      control: 'text',
      description: '헤더 타이틀 (빈 문자열 가능)',
      table: {
        required: true,
        type: { summary: 'string' },
      },
    },
    leftIcon: {
      control: 'select',
      options: Object.keys(icons) as IconName[],
      description: '왼쪽 버튼 아이콘 (기본값: ic_arrow_back_ios_new)',
      table: {
        type: { summary: 'IconName' },
        defaultValue: { summary: 'ic_arrow_back_ios_new' },
      },
    },
    rightIcon: {
      control: 'select',
      options: [undefined, ...(Object.keys(icons) as IconName[])],
      description: '오른쪽 버튼 아이콘 (없으면 렌더링 안 함)',
      table: {
        type: { summary: 'IconName | undefined' },
      },
    },
    onLeftClick: {
      action: 'left-clicked',
      description: '왼쪽 버튼 클릭 핸들러',
      table: {
        type: { summary: '() => void' },
      },
    },
    onRightClick: {
      action: 'right-clicked',
      description: '오른쪽 버튼 클릭 핸들러',
      table: {
        type: { summary: '() => void' },
      },
    },
    ...createHiddenArgs(DetailHeader, ['className']),
  },
  args: {
    title: '상세 정보',
    leftIcon: 'ic_arrow_back_ios_new',
    onLeftClick: () => {},
  },
  decorators: [
    (Story) => (
      <Container className="p-0!">
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof DetailHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: '상세 정보',
    onLeftClick: () => {},
  },
};

export const WithRightIcon: Story = {
  args: {
    title: '상세 정보',
    rightIcon: 'ic_more_horiz',
    onLeftClick: () => {},
    onRightClick: () => {},
  },
};

export const CustomLeftIcon: Story = {
  args: {
    title: '설정',
    leftIcon: 'ic_close',
    onLeftClick: () => {},
  },
};

export const EmptyTitle: Story = {
  args: {
    title: '',
    onLeftClick: () => {},
    onRightClick: () => {},
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 w-full bg-card-lighter">
      <DetailHeader title="기본 헤더" onLeftClick={() => {}} />
      <DetailHeader
        title="오른쪽 아이콘 포함"
        rightIcon="ic_more_horiz"
        onLeftClick={() => {}}
        onRightClick={() => {}}
      />
      <DetailHeader
        title="커스텀 왼쪽 아이콘"
        leftIcon="ic_close"
        onLeftClick={() => {}}
      />
      <DetailHeader title="" onLeftClick={() => {}} onRightClick={() => {}} />
      <DetailHeader
        title="긴 타이틀 텍스트가 있는 헤더입니다 긴 타이틀 텍스트가 있는 헤더입니다"
        rightIcon="ic_info"
        onLeftClick={() => {}}
        onRightClick={() => {}}
      />
    </div>
  ),
};
