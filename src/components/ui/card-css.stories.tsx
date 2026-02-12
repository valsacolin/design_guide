import type { Meta, StoryObj } from '@storybook/react';
import {
  CardCSS,
  CardCSSHeader,
  CardCSSTitle,
  CardCSSDescription,
  CardCSSContent,
  CardCSSFooter,
} from './card-css';
import { ButtonCSS } from './button-css';

const meta = {
  title: 'Components/CardCSS',
  component: CardCSS,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: '카드의 스타일 변형',
    },
  },
} satisfies Meta<typeof CardCSS>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 카드
export const Default: Story = {
  render: () => (
    <CardCSS variant="default">
      <CardCSSHeader>
        <CardCSSTitle>카드 제목</CardCSSTitle>
        <CardCSSDescription>카드에 대한 간단한 설명입니다.</CardCSSDescription>
      </CardCSSHeader>
      <CardCSSContent>
        <p>카드의 본문 내용이 여기에 들어갑니다. 긴 텍스트나 다양한 콘텐츠를 포함할 수 있습니다.</p>
      </CardCSSContent>
      <CardCSSFooter>
        <ButtonCSS variant="outline" size="small">취소</ButtonCSS>
        <ButtonCSS variant="primary" size="small">확인</ButtonCSS>
      </CardCSSFooter>
    </CardCSS>
  ),
};

// 테두리 강조 카드
export const Bordered: Story = {
  render: () => (
    <CardCSS variant="bordered">
      <CardCSSHeader>
        <CardCSSTitle>테두리 카드</CardCSSTitle>
        <CardCSSDescription>파란색 테두리가 강조된 카드입니다.</CardCSSDescription>
      </CardCSSHeader>
      <CardCSSContent>
        <p>중요한 정보나 강조하고 싶은 내용을 담을 때 사용합니다.</p>
      </CardCSSContent>
    </CardCSS>
  ),
};

// 그림자 강조 카드
export const Elevated: Story = {
  render: () => (
    <CardCSS variant="elevated">
      <CardCSSHeader>
        <CardCSSTitle>그림자 카드</CardCSSTitle>
        <CardCSSDescription>그림자 효과가 강조된 카드입니다.</CardCSSDescription>
      </CardCSSHeader>
      <CardCSSContent>
        <p>떠있는 듯한 느낌을 주고 싶을 때 사용합니다.</p>
      </CardCSSContent>
    </CardCSS>
  ),
};

// 간단한 카드 (헤더만)
export const SimpleWithHeader: Story = {
  render: () => (
    <CardCSS>
      <CardCSSHeader>
        <CardCSSTitle>간단한 카드</CardCSSTitle>
      </CardCSSHeader>
      <CardCSSContent>
        <p>제목과 본문만 있는 심플한 카드입니다.</p>
      </CardCSSContent>
    </CardCSS>
  ),
};

// 리스트가 있는 카드
export const WithList: Story = {
  render: () => (
    <CardCSS>
      <CardCSSHeader>
        <CardCSSTitle>할 일 목록</CardCSSTitle>
        <CardCSSDescription>오늘 완료해야 할 작업들</CardCSSDescription>
      </CardCSSHeader>
      <CardCSSContent>
        <ul>
          <li>디자인 시스템 문서 작성</li>
          <li>컴포넌트 스토리북 업데이트</li>
          <li>팀 미팅 참석</li>
          <li>코드 리뷰</li>
        </ul>
      </CardCSSContent>
      <CardCSSFooter>
        <ButtonCSS variant="primary" size="small">모두 완료</ButtonCSS>
      </CardCSSFooter>
    </CardCSS>
  ),
};

// 프로필 카드 예시
export const ProfileCard: Story = {
  render: () => (
    <CardCSS variant="elevated">
      <CardCSSContent>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: '#3B82F6',
            margin: '0 auto 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '32px',
            fontWeight: 'bold',
          }}>
            JD
          </div>
          <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700' }}>
            홍길동
          </h3>
          <p style={{ margin: '0 0 16px 0', color: '#6B7280', fontSize: '14px' }}>
            프론트엔드 개발자
          </p>
          <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6' }}>
            React와 TypeScript를 사용하여 사용자 경험을 개선하는 것을 좋아합니다.
          </p>
        </div>
      </CardCSSContent>
      <CardCSSFooter>
        <ButtonCSS variant="outline" size="small" style={{ flex: 1 }}>메시지</ButtonCSS>
        <ButtonCSS variant="primary" size="small" style={{ flex: 1 }}>팔로우</ButtonCSS>
      </CardCSSFooter>
    </CardCSS>
  ),
};

// 모든 변형 한눈에 보기
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', maxWidth: '1200px' }}>
      <CardCSS variant="default">
        <CardCSSHeader>
          <CardCSSTitle>Default</CardCSSTitle>
          <CardCSSDescription>기본 스타일</CardCSSDescription>
        </CardCSSHeader>
        <CardCSSContent>
          <p>가장 일반적으로 사용되는 카드 스타일입니다.</p>
        </CardCSSContent>
      </CardCSS>
      
      <CardCSS variant="bordered">
        <CardCSSHeader>
          <CardCSSTitle>Bordered</CardCSSTitle>
          <CardCSSDescription>테두리 강조</CardCSSDescription>
        </CardCSSHeader>
        <CardCSSContent>
          <p>파란색 테두리로 강조된 카드입니다.</p>
        </CardCSSContent>
      </CardCSS>
      
      <CardCSS variant="elevated">
        <CardCSSHeader>
          <CardCSSTitle>Elevated</CardCSSTitle>
          <CardCSSDescription>그림자 강조</CardCSSDescription>
        </CardCSSHeader>
        <CardCSSContent>
          <p>그림자 효과로 입체감을 주는 카드입니다.</p>
        </CardCSSContent>
      </CardCSS>
    </div>
  ),
};
