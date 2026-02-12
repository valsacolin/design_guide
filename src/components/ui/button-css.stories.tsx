import type { Meta, StoryObj } from '@storybook/react';
import { ButtonCSS } from './button-css';

const meta = {
  title: 'Components/ButtonCSS',
  component: ButtonCSS,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'destructive', 'outline', 'ghost'],
      description: '버튼의 색상 스타일',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '버튼의 크기',
    },
    disabled: {
      control: 'boolean',
      description: '버튼 비활성화 여부',
    },
  },
} satisfies Meta<typeof ButtonCSS>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 버튼
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: '버튼',
  },
};

// 보조 버튼
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: '보조 버튼',
  },
};

// 위험 버튼
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'medium',
    children: '삭제',
  },
};

// 아웃라인 버튼
export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'medium',
    children: '아웃라인',
  },
};

// 고스트 버튼
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'medium',
    children: '고스트',
  },
};

// 작은 크기
export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: '작은 버튼',
  },
};

// 큰 크기
export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: '큰 버튼',
  },
};

// 비활성화
export const Disabled: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: '비활성화',
    disabled: true,
  },
};

// 모든 변형 한눈에 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <ButtonCSS variant="primary">Primary</ButtonCSS>
        <ButtonCSS variant="secondary">Secondary</ButtonCSS>
        <ButtonCSS variant="destructive">Destructive</ButtonCSS>
        <ButtonCSS variant="outline">Outline</ButtonCSS>
        <ButtonCSS variant="ghost">Ghost</ButtonCSS>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <ButtonCSS variant="primary" size="small">Small</ButtonCSS>
        <ButtonCSS variant="primary" size="medium">Medium</ButtonCSS>
        <ButtonCSS variant="primary" size="large">Large</ButtonCSS>
      </div>
      
      <div style={{ display: 'flex', gap: '12px' }}>
        <ButtonCSS variant="primary" disabled>Disabled</ButtonCSS>
        <ButtonCSS variant="secondary" disabled>Disabled</ButtonCSS>
      </div>
    </div>
  ),
};
