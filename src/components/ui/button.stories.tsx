import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Mail, Loader2 } from 'lucide-react'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: '버튼',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: '삭제',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '보조',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Link: Story = {
  args: {
    variant: 'link',
    children: '링크',
  },
}

export const Small: Story = {
  args: {
    size: 'sm',
    children: '작게',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
}

export const Icon: Story = {
  args: {
    size: 'icon',
    children: <Mail className="h-4 w-4" />,
  },
}

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <Mail className="mr-2 h-4 w-4" />
        이메일로 로그인
      </>
    ),
  },
}

export const Loading: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        잠시만 기다려주세요
      </>
    ),
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: '비활성화',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <Button variant="default">기본</Button>
        <Button variant="destructive">삭제</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="secondary">보조</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">링크</Button>
      </div>
      <div className="flex gap-2 items-center">
        <Button size="sm">작게</Button>
        <Button size="default">기본</Button>
        <Button size="lg">크게</Button>
        <Button size="icon">
          <Mail className="h-4 w-4" />
        </Button>
      </div>
    </div>
  ),
}
