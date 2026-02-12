import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from './alert';
import { Terminal, AlertCircle, CheckCircle2, Info } from 'lucide-react';

const meta = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>알림</AlertTitle>
      <AlertDescription>
        이것은 기본 알림 메시지입니다. 사용자에게 중요한 정보를 전달할 때 사용합니다.
      </AlertDescription>
    </Alert>
  ),
};

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>오류</AlertTitle>
      <AlertDescription>
        세션이 만료되었습니다. 다시 로그인해주세요.
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>업데이트 알림</AlertTitle>
      <AlertDescription>
        새로운 버전이 출시되었습니다. 지금 업데이트하시겠습니까?
      </AlertDescription>
    </Alert>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertDescription>
        이메일 주소를 확인해주세요. 인증 링크를 발송했습니다.
      </AlertDescription>
    </Alert>
  ),
};

export const Success: Story = {
  render: () => (
    <Alert className="border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>성공</AlertTitle>
      <AlertDescription>
        계정이 성공적으로 생성되었습니다.
      </AlertDescription>
    </Alert>
  ),
};

export const Warning: Story = {
  render: () => (
    <Alert className="border-yellow-500/50 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>주의</AlertTitle>
      <AlertDescription>
        이 작업은 되돌릴 수 없습니다. 계속하시겠습니까?
      </AlertDescription>
    </Alert>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>정보</AlertTitle>
        <AlertDescription>
          일반적인 정보 메시지입니다.
        </AlertDescription>
      </Alert>
      
      <Alert className="border-green-500/50 text-green-600 dark:border-green-500 [&>svg]:text-green-600">
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>성공</AlertTitle>
        <AlertDescription>
          작업이 성공적으로 완료되었습니다.
        </AlertDescription>
      </Alert>
      
      <Alert className="border-yellow-500/50 text-yellow-600 dark:border-yellow-500 [&>svg]:text-yellow-600">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>경고</AlertTitle>
        <AlertDescription>
          주의가 필요한 상황입니다.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>오류</AlertTitle>
        <AlertDescription>
          오류가 발생했습니다.
        </AlertDescription>
      </Alert>
    </div>
  ),
};
