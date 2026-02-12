# 회사 디자인 시스템

![Storybook](https://img.shields.io/badge/Storybook-10.2.8-FF4785?logo=storybook&logoColor=white)
![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.0-38B2AC?logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0.11-646CFF?logo=vite&logoColor=white)

shadcn/ui 기반의 React 컴포넌트 라이브러리입니다. Storybook을 통해 모든 컴포넌트를 문서화하고 공유합니다.

> 📚 **[전체 문서 보기](./docs/README.md)** | **[디자이너 가이드](./docs/DESIGNER_GUIDE.md)** | **[시작하기](./docs/GETTING_STARTED.md)**

## 🎨 주요 특징


- **일관된 디자인**: shadcn/ui 기반의 통일된 디자인 언어
- **접근성**: WCAG 2.1 AA 기준 준수
- **다크 모드**: 라이트/다크 모드 자동 지원
- **반응형**: 모바일부터 데스크톱까지 완벽 대응
- **타입 안전성**: TypeScript로 작성된 모든 컴포넌트

## 📦 기술 스택

- **React** 19.2.0
- **TypeScript** 5.9.3
- **Tailwind CSS** 3.4.0
- **shadcn/ui** (Base UI 기반)
- **Storybook** 10.2.8
- **Vite** 6.0.11

## 🚀 시작하기

### 설치

```bash
# 의존성 설치
npm install --legacy-peer-deps
```

### Storybook 실행

```bash
# 개발 서버 실행 (http://localhost:6006)
npm run storybook

# Storybook 빌드
npm run build-storybook
```

### Vite 개발 서버 실행

```bash
# Vite 개발 서버 (http://localhost:5173)
npm run dev

# 프로덕션 빌드
npm run build
```

## 📚 사용 가능한 컴포넌트

### 기본 컴포넌트

- **Button**: 다양한 variants (default, destructive, outline, secondary, ghost, link)
- **Card**: 카드 컨테이너 및 관련 컴포넌트 (Header, Title, Description, Content, Footer)
- **Input**: 폼 입력 필드
- **Label**: 폼 레이블
- **Badge**: 상태 표시 배지 (default, secondary, destructive, outline)
- **Alert**: 알림 메시지 (default, destructive, success, warning)
- **Dialog**: 모달 다이얼로그 (Base UI 기반)
- **Tabs**: 탭 네비게이션 (Base UI 기반)

## 💻 사용 예시

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function App() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>로그인</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">이메일</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <Button>로그인</Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

## 🎨 디자인 토큰

### 색상 시스템

프로젝트는 HSL 색상 공간을 사용하며, CSS 변수를 통해 관리됩니다:

- **Primary**: 주요 액션 버튼, 링크
- **Secondary**: 보조 버튼, 배경
- **Destructive**: 삭제, 경고 등 위험한 액션
- **Muted**: 비활성화, 보조 텍스트

### 다크 모드

모든 컴포넌트는 자동으로 다크 모드를 지원합니다. Tailwind의 `.dark` 클래스를 사용하여 테마를 전환할 수 있습니다.

## 📁 프로젝트 구조

```
design_guide/
├── .storybook/          # Storybook 설정
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/
│   │   └── ui/          # UI 컴포넌트
│   │       ├── button.tsx
│   │       ├── button.stories.tsx
│   │       ├── card.tsx
│   │       ├── card.stories.tsx
│   │       ├── input.tsx
│   │       ├── input.stories.tsx
│   │       ├── label.tsx
│   │       └── ...
│   ├── lib/
│   │   └── utils.ts     # 유틸리티 함수
│   └── index.css        # 글로벌 스타일
├── components.json      # shadcn/ui 설정
├── tailwind.config.js   # Tailwind 설정
└── package.json
```

## 🛠️ 개발 가이드

### 새 컴포넌트 추가

1. `src/components/ui/` 디렉토리에 컴포넌트 파일 생성
2. 같은 디렉토리에 `.stories.tsx` 파일 생성
3. Storybook에서 자동으로 감지됨

### 스타일 커스터마이징

`tailwind.config.js`와 `src/index.css`에서 디자인 토큰을 수정할 수 있습니다.

## 📝 스크립트

```bash
npm run dev              # Vite 개발 서버
npm run build            # 프로덕션 빌드
npm run lint             # ESLint 실행
npm run preview          # 빌드 미리보기
npm run storybook        # Storybook 개발 서버
npm run build-storybook  # Storybook 빌드
```

## 🤝 기여하기

1. 새로운 컴포넌트를 추가할 때는 반드시 스토리를 함께 작성해주세요
2. TypeScript 타입을 명확히 정의해주세요
3. 접근성 가이드라인을 준수해주세요

## 📄 라이선스

이 프로젝트는 회사 내부용입니다.

## 🔗 참고 자료

- [shadcn/ui 공식 문서](https://ui.shadcn.com/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Storybook 문서](https://storybook.js.org/)
- [Radix UI 문서](https://www.radix-ui.com/)
