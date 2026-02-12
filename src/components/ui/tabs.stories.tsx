import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="password">비밀번호</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <p className="text-sm text-muted-foreground">
          계정 설정을 변경하세요.
        </p>
      </TabsContent>
      <TabsContent value="password">
        <p className="text-sm text-muted-foreground">
          비밀번호를 변경하세요.
        </p>
      </TabsContent>
    </Tabs>
  ),
};

export const WithCards: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">계정</TabsTrigger>
        <TabsTrigger value="password">비밀번호</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>계정</CardTitle>
            <CardDescription>
              계정 정보를 변경하세요. 완료되면 저장 버튼을 클릭하세요.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">이름</Label>
              <Input id="name" defaultValue="홍길동" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">사용자명</Label>
              <Input id="username" defaultValue="@gildong" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>비밀번호</CardTitle>
            <CardDescription>
              비밀번호를 변경하세요. 저장 후 로그아웃됩니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">현재 비밀번호</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">새 비밀번호</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const ThreeTabs: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[500px]">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="overview">개요</TabsTrigger>
        <TabsTrigger value="analytics">분석</TabsTrigger>
        <TabsTrigger value="reports">보고서</TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>개요</CardTitle>
            <CardDescription>프로젝트 개요를 확인하세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              이 프로젝트는 2024년 1월에 시작되었으며, 현재 활발히 진행 중입니다.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="analytics" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>분석</CardTitle>
            <CardDescription>프로젝트 분석 데이터를 확인하세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              월간 활성 사용자: 1,234명<br />
              일일 활성 사용자: 456명
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="reports" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>보고서</CardTitle>
            <CardDescription>생성된 보고서를 확인하세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              최근 보고서: 2024년 1월 월간 보고서
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Tabs defaultValue="general" className="flex w-[600px]" orientation="vertical">
      <TabsList className="flex-col h-auto">
        <TabsTrigger value="general" className="w-full justify-start">
          일반
        </TabsTrigger>
        <TabsTrigger value="security" className="w-full justify-start">
          보안
        </TabsTrigger>
        <TabsTrigger value="notifications" className="w-full justify-start">
          알림
        </TabsTrigger>
        <TabsTrigger value="advanced" className="w-full justify-start">
          고급
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 ml-4">
        <TabsContent value="general">
          <Card>
            <CardHeader>
              <CardTitle>일반 설정</CardTitle>
              <CardDescription>
                기본 설정을 관리하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label>언어</Label>
                <Input defaultValue="한국어" />
              </div>
              <div className="space-y-1">
                <Label>시간대</Label>
                <Input defaultValue="Asia/Seoul" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>보안 설정</CardTitle>
              <CardDescription>
                계정 보안을 강화하세요.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>2단계 인증</Label>
                <Button variant="outline" size="sm">활성화</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>알림 설정</CardTitle>
              <CardDescription>
                알림 수신 방법을 설정하세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">이메일 알림을 받으시겠습니까?</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="advanced">
          <Card>
            <CardHeader>
              <CardTitle>고급 설정</CardTitle>
              <CardDescription>
                고급 옵션을 설정하세요.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-destructive">
                주의: 이 설정을 변경하면 예기치 않은 동작이 발생할 수 있습니다.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </Tabs>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Tabs defaultValue="tab1" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="tab1">활성화</TabsTrigger>
        <TabsTrigger value="tab2" disabled>
          비활성화
        </TabsTrigger>
        <TabsTrigger value="tab3">활성화</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p className="text-sm">첫 번째 탭 내용</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p className="text-sm">두 번째 탭 내용 (접근 불가)</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p className="text-sm">세 번째 탭 내용</p>
      </TabsContent>
    </Tabs>
  ),
};
