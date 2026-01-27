import * as icons from '@/shared/assets/icons';
import { Container, createHiddenArgs } from '@/shared/stories/components';
import { IconName } from '@/shared/ui/icon';
import { IconButton } from '@/shared/ui/icon-button';

import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Looppit의 IconButton 컴포넌트는 **3가지 size**를 제공합니다. (28, 36, 40)<br/>' +
          '아이콘 버튼으로 사용되며, `iconClassName`과 `style`을 통해 커스터마이징할 수 있습니다.',
      },
    },
  },
  argTypes: {
    icon: {
      control: 'select',
      options: Object.keys(icons) as IconName[],
      description: '표시할 아이콘 이름',
      table: {
        required: true,
        type: { summary: 'IconName' },
      },
    },
    size: {
      control: 'select',
      options: ['28', '36', '40'],
      description: '버튼 크기를 선택하세요',
      table: { defaultValue: { summary: '28' } },
    },
    iconClassName: {
      control: 'text',
      description: '아이콘에 적용할 추가 클래스명',
    },
    ...createHiddenArgs(IconButton, ['asChild', 'type', 'className']),
  },
  args: {
    icon: 'ic_add',
    size: '28',
  },
  decorators: [
    (Story) => (
      <Container>
        <Story />
      </Container>
    ),
  ],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'ic_add',
    size: '28',
    className: 'text-white/40',
    iconClassName: 'fill-current',
  },
};

export const WithCustomColor: Story = {
  args: {
    icon: 'ic_add',
    size: '28',
    className: 'text-[#8B5CF6] border-[#8B5CF640]',
    iconClassName: 'fill-current',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton
        size="28"
        icon="ic_add"
        iconClassName="fill-current"
        className="text-[#8B5CF6] border-[#8B5CF640]"
      />
      <IconButton
        size="28"
        icon="ic_add"
        iconClassName="fill-current"
        className="text-[#1c763c] border-[#1c763c40]"
      />
      <IconButton
        size="36"
        icon="ic_calendar_month"
        iconClassName="fill-current"
        className="text-secondary"
      />
      <IconButton
        size="40"
        icon="ic_add"
        iconClassName="fill-current"
        className="text-white bg-primary border-primary"
      />
    </div>
  ),
};
