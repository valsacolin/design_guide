# 디자이너를 위한 가이드 📐

이 문서는 **디자이너가 직접** Storybook에 컴포넌트를 추가하고 관리하는 방법을 설명합니다.

> 💡 **코딩 경험이 없어도 괜찮습니다!** 이 가이드는 복사-붙여넣기만으로 컴포넌트를 추가할 수 있도록 작성되었습니다.

---

## 📋 목차

1. [시작하기](#1️⃣-시작하기)
2. [Storybook 실행하기](#2️⃣-storybook-실행하기)
3. [새 컴포넌트 추가하기](#3️⃣-새-컴포넌트-추가하기)
4. [컴포넌트 스타일 수정하기](#4️⃣-컴포넌트-스타일-수정하기)
5. [디자인 토큰 변경하기](#5️⃣-디자인-토큰-변경하기)
6. [Git으로 변경사항 저장하기](#6️⃣-git으로-변경사항-저장하기)
7. [문제 해결](#7️⃣-문제-해결)

---

## 1️⃣ 시작하기

### 필요한 프로그램 설치

1. **Visual Studio Code (VS Code)** - 코드 에디터
   - 다운로드: https://code.visualstudio.com/
   - 무료

2. **Node.js** - JavaScript 실행 환경
   - 다운로드: https://nodejs.org/
   - LTS 버전 설치 (왼쪽 버튼)

3. **Git** - 버전 관리 도구
   - 다운로드: https://git-scm.com/
   - 기본 설정으로 설치

### 프로젝트 다운로드

1. **GitHub에서 프로젝트 복사하기**

터미널(Mac) 또는 명령 프롬프트(Windows)를 열고:

```bash
# 프로젝트 복사
git clone https://github.com/valsacolin/design_guide.git

# 프로젝트 폴더로 이동
cd design_guide

# 필요한 패키지 설치
npm install
```

2. **VS Code로 프로젝트 열기**

```bash
code .
```

---

## 2️⃣ Storybook 실행하기

### 로컬 서버 시작

VS Code에서 터미널을 열고 (상단 메뉴 → Terminal → New Terminal):

```bash
npm run storybook
```

잠시 기다리면 자동으로 브라우저가 열립니다!
- 주소: `http://localhost:6006`

### Storybook 인터페이스 둘러보기

```
┌─────────────────────────────────────────────────┐
│  왼쪽: 컴포넌트 목록                              │
│  - Components/                                  │
│    - Alert                                      │
│    - Badge                                      │
│    - Button                                     │
│    - Card                                       │
│    - Dialog                                     │
│    - Input                                      │
│    - Tabs                                       │
│                                                 │
│  오른쪽: 컴포넌트 미리보기                         │
│  - Canvas: 실제 컴포넌트 보기                     │
│  - Controls: 속성 조작하기                       │
│  - Docs: 문서 보기                               │
└─────────────────────────────────────────────────┘
```

---

## 3️⃣ 새 컴포넌트 추가하기

### 단계별 가이드

#### Step 1: 컴포넌트 파일 만들기

`src/components/ui/` 폴더에 새 파일을 만듭니다.

**예시: Checkbox 컴포넌트 만들기**

1. VS Code 왼쪽 사이드바에서 `src/components/ui/` 폴더 찾기
2. 폴더 위에서 마우스 오른쪽 클릭 → "New File"
3. 파일 이름: `checkbox.tsx`

#### Step 2: 템플릿 코드 복사하기

아래 코드를 **그대로 복사**해서 `checkbox.tsx`에 붙여넣으세요:

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, ...props }, ref) => {
    return (
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          ref={ref}
          className={cn(
            "h-4 w-4 rounded border border-primary text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2",
            className
          )}
          {...props}
        />
        {label && (
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
```

**저장**: `Cmd + S` (Mac) 또는 `Ctrl + S` (Windows)

#### Step 3: Storybook 스토리 파일 만들기

같은 폴더에 `checkbox.stories.tsx` 파일을 만듭니다.

아래 코드를 **그대로 복사**해서 붙여넣으세요:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: '동의합니다',
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    label: '선택됨',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: '비활성화',
    disabled: true,
  },
};
```

**저장**: `Cmd + S` (Mac) 또는 `Ctrl + S` (Windows)

#### Step 4: Storybook에서 확인하기

브라우저로 돌아가면 **자동으로** 왼쪽 사이드바에 "Checkbox"가 나타납니다! 🎉

클릭해서 확인해보세요.

---

## 4️⃣ 컴포넌트 스타일 수정하기

### Tailwind CSS 클래스 이해하기

컴포넌트의 스타일은 `className` 안에 있는 **Tailwind CSS 클래스**로 정의됩니다.

#### 자주 사용하는 클래스

| 클래스 | 설명 | 예시 |
|--------|------|------|
| `w-4` | 너비 16px | `w-8` (32px), `w-full` (100%) |
| `h-4` | 높이 16px | `h-8` (32px), `h-full` (100%) |
| `p-4` | 패딩 16px | `p-2` (8px), `p-6` (24px) |
| `m-4` | 마진 16px | `m-2` (8px), `m-6` (24px) |
| `rounded` | 둥근 모서리 | `rounded-lg`, `rounded-full` |
| `bg-primary` | 배경색 | `bg-secondary`, `bg-destructive` |
| `text-sm` | 글자 크기 | `text-xs`, `text-lg`, `text-xl` |
| `font-medium` | 글자 굵기 | `font-normal`, `font-bold` |

#### 예시: 체크박스 크기 변경하기

**기존 코드:**
```tsx
className="h-4 w-4 rounded border"
```

**크게 만들기:**
```tsx
className="h-6 w-6 rounded border"
```

**더 크게 만들기:**
```tsx
className="h-8 w-8 rounded-lg border"
```

### 실시간 미리보기

코드를 수정하고 저장하면 **Storybook이 자동으로 새로고침**됩니다!

---

## 5️⃣ 디자인 토큰 변경하기

### 색상 변경

`src/index.css` 파일을 엽니다.

#### Primary 색상 변경 예시

**기존:**
```css
:root {
  --primary: 222.2 47.4% 11.2%;
}
```

**새로운 파란색으로 변경:**
```css
:root {
  --primary: 217 91% 60%;  /* 밝은 파란색 */
}
```

#### Figma에서 HSL 값 가져오기

1. Figma에서 색상 선택
2. 색상 패널에서 "HSL" 탭 클릭
3. 값 복사 (예: `217, 91%, 60%`)
4. `src/index.css`에 붙여넣기 (쉼표 제거, 공백으로 구분)

#### 지원하는 색상 변수

```css
:root {
  --primary: 217 91% 60%;           /* 주요 색상 */
  --secondary: 210 40% 96.1%;       /* 보조 색상 */
  --destructive: 0 84.2% 60.2%;     /* 위험/삭제 */
  --muted: 210 40% 96.1%;           /* 흐린 배경 */
  --accent: 210 40% 96.1%;          /* 강조 색상 */
  --border: 214.3 31.8% 91.4%;      /* 테두리 */
  --ring: 222.2 84% 4.9%;           /* 포커스 링 */
}
```

### 타이포그래피 변경

`tailwind.config.js` 파일을 엽니다.

#### 폰트 변경

```javascript
fontFamily: {
  sans: ['Pretendard', 'Inter', 'sans-serif'],  // 기본 폰트
},
```

#### 폰트 크기 추가

```javascript
fontSize: {
  'xs': '0.75rem',    // 12px
  'sm': '0.875rem',   // 14px
  'base': '1rem',     // 16px
  'lg': '1.125rem',   // 18px
  'xl': '1.25rem',    // 20px
  '2xl': '1.5rem',    // 24px
  '3xl': '1.875rem',  // 30px
},
```

---

## 6️⃣ Git으로 변경사항 저장하기

### 변경사항 확인

터미널에서:

```bash
git status
```

빨간색으로 변경된 파일 목록이 나타납니다.

### 변경사항 저장 (Commit)

```bash
# 모든 변경사항 추가
git add .

# 커밋 메시지와 함께 저장
git commit -m "feat: Checkbox 컴포넌트 추가"
```

### GitHub에 업로드 (Push)

```bash
git push origin develop
```

> ⚠️ **주의**: `develop` 브랜치에 푸시하세요. `main` 브랜치는 배포용입니다.

---

## 7️⃣ 문제 해결

### Storybook이 실행되지 않아요

**해결 방법:**

1. 터미널에서 `Ctrl + C`로 중지
2. 다시 실행:
```bash
npm run storybook
```

### 컴포넌트가 Storybook에 나타나지 않아요

**체크리스트:**

- [ ] 파일 이름이 `.stories.tsx`로 끝나나요?
- [ ] 파일이 `src/components/ui/` 폴더 안에 있나요?
- [ ] 파일을 저장했나요? (`Cmd + S` 또는 `Ctrl + S`)
- [ ] Storybook이 실행 중인가요?

**해결 방법:**

터미널에서 Storybook을 재시작:
```bash
# Ctrl + C로 중지
# 다시 실행
npm run storybook
```

### 빌드 에러가 발생해요

**일반적인 원인:**

1. **문법 오류**: 중괄호 `{}`, 괄호 `()`, 따옴표 `""` 짝이 맞지 않음
2. **import 오류**: 파일 경로가 잘못됨

**해결 방법:**

터미널의 에러 메시지를 읽고, 해당 파일과 줄 번호를 확인하세요.

예시:
```
src/components/ui/checkbox.tsx:15:5 - error TS1005: '}' expected.
```
→ `checkbox.tsx` 파일의 15번째 줄에 `}` 누락

### Git push가 안 돼요

**해결 방법:**

1. GitHub 권한 확인
2. 브랜치 확인:
```bash
git branch
```
`develop` 브랜치에 있어야 합니다.

3. 최신 코드 받아오기:
```bash
git pull origin develop
```

---

## 📚 컴포넌트 템플릿 모음

### 기본 버튼 컴포넌트

```tsx
import * as React from "react"
import { cn } from "@/lib/utils"

export interface MyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline'
}

const MyButton = React.forwardRef<HTMLButtonElement, MyButtonProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-md font-medium transition-colors",
          variant === 'default' && "bg-primary text-primary-foreground hover:bg-primary/90",
          variant === 'outline' && "border border-input bg-background hover:bg-accent",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)
MyButton.displayName = "MyButton"

export { MyButton }
```

### 기본 스토리 템플릿

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyButton } from './my-button';

const meta = {
  title: 'Components/MyButton',
  component: MyButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '버튼',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: '아웃라인 버튼',
  },
};
```

---

## 🎓 다음 단계

### 1. 첫 컴포넌트 만들어보기

위의 Checkbox 예제를 따라 직접 만들어보세요!

### 2. 기존 컴포넌트 수정해보기

`src/components/ui/button.tsx`를 열어서 색상이나 크기를 변경해보세요.

### 3. Figma와 연동하기

Figma에서 디자인한 컴포넌트를 코드로 옮겨보세요.

### 4. 팀과 협업하기

- Figma 링크 공유
- GitHub에 변경사항 푸시
- Storybook 배포 URL 공유

---

## 🆘 도움이 필요하신가요?

- **Tailwind CSS 문서**: https://tailwindcss.com/docs
- **Storybook 문서**: https://storybook.js.org/docs
- **shadcn/ui 컴포넌트**: https://ui.shadcn.com/docs/components

**개발팀에 문의하기:**
- GitHub Issues에 질문 남기기
- Slack/Discord 채널에서 질문하기

---

**즐거운 디자인 시스템 구축 되세요! 🎨✨**
