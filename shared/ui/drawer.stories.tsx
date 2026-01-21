import { createHiddenArgs } from '@/shared/stories/components';

import { Button } from './button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerOverlay,
  DrawerTrigger,
} from './drawer';

import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Looppit의 Drawer 컴포넌트는 **바텀시트**를 표시하는 데 사용됩니다.' +
          'Looppit의 Drawer 컴포넌트는 **shadcn UI의 Drawer 컴포넌트를 기반**으로 합니다' +
          '**Drawer**의 사용법은 [shadcn UI Drawer 문서](https://ui.shadcn.com/docs/components/drawer)를 참조하세요.<br/>' +
          'direction 속성을 통해 바텀시트의 방향을 설정할 수 있습니다.',
      },
    },
  },
  argTypes: {
    direction: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: '바텀시트 방향 설정',
    },
    ...createHiddenArgs(Drawer, ['open', 'onOpenChange']),
  },
  args: {
    direction: 'bottom',
  },
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <div>
        <DrawerOverlay />
        <DrawerTrigger>
          <Button>Open</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>제목</DrawerHeader>
          <DrawerDescription>설명</DrawerDescription>
          <DrawerClose>닫기</DrawerClose>
        </DrawerContent>
      </div>
    ),
  },
};
