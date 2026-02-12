import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'
import { Label } from './label'

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: '텍스트를 입력하세요...',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">이메일</Label>
      <Input type="email" id="email" placeholder="이메일" />
    </div>
  ),
}

export const File: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="picture">파일</Label>
      <Input id="picture" type="file" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '비활성화된 입력',
  },
}

export const WithButton: Story = {
  render: () => (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="이메일" />
      <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        구독
      </button>
    </div>
  ),
}

export const Types: Story = {
  render: () => (
    <div className="grid w-full max-w-sm gap-4">
      <div className="grid gap-1.5">
        <Label htmlFor="text">텍스트</Label>
        <Input type="text" id="text" placeholder="텍스트 입력" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="email-type">이메일</Label>
        <Input type="email" id="email-type" placeholder="이메일 입력" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="password">비밀번호</Label>
        <Input type="password" id="password" placeholder="비밀번호 입력" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="number">숫자</Label>
        <Input type="number" id="number" placeholder="숫자 입력" />
      </div>
      <div className="grid gap-1.5">
        <Label htmlFor="date">날짜</Label>
        <Input type="date" id="date" />
      </div>
    </div>
  ),
}
