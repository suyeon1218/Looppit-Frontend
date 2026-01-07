import { Typography } from './Typography';

import type { Meta, StoryObj } from '@storybook/nextjs';

const meta = {
  title: 'Style Guide/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Looppit의 타이포그래피 시스템은 **Geist Sans** 폰트를 기반으로 하며, 명확한 계층 구조와 가독성을 위해 크기와 굵기를 조합한 **6가지 스타일**을 제공합니다.<br/>' +
          '아래에 표시된 텍스트 크기들은 모두 **Tailwind CSS className**으로 사용됩니다.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'select',
      options: [
        'text-title-lg',
        'text-title-medium',
        'text-body-bold',
        'text-body-semibold',
        'text-caption-bold',
        'text-caption-medium',
      ],
      description: '폰트 굵기를 선택하세요',
    },
    children: {
      control: 'text',
      description: '표시할 텍스트를 입력하세요',
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TitleLarge: Story = {
  args: {
    className: 'text-title-lg',
    children: '메인 제목 (18px Bold)',
  },
};

export const TitleMedium: Story = {
  args: {
    className: 'text-title-medium',
    children: '서브 제목 (16px Bold)',
  },
};

export const BodyBold: Story = {
  args: {
    className: 'text-body-bold',
    children: '강조 본문 (14px Bold)',
  },
};

export const BodySemibold: Story = {
  args: {
    className: 'text-body-semibold',
    children: '본문 내용 (14px Semibold)',
  },
};

export const CaptionBold: Story = {
  args: {
    className: 'text-caption-bold',
    children: '캡션 (12px Bold)',
  },
};

export const CaptionMedium: Story = {
  args: {
    className: 'text-caption-medium',
    children: '캡션 (12px Medium)',
  },
};
