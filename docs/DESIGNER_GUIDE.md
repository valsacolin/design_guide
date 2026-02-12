# 디자이너를 위한 가이드

이 문서는 디자이너가 Figma에서 디자인한 컴포넌트를 이 디자인 시스템에 반영하는 방법을 설명합니다.

## 🎯 목적

Figma에서 디자인한 UI 컴포넌트를 코드로 구현하고, Storybook을 통해 개발자와 협업할 수 있도록 합니다.

## 🔄 워크플로우 개요

```
Figma 디자인 → 디자인 토큰 추출 → 코드 업데이트 → Storybook 확인 → 배포
```

## 1️⃣ Figma에서 디자인 시스템 구축하기

### 권장 구조

Figma에서 다음과 같은 구조로 디자인 시스템을 구축하세요:

```
📁 Design System
  ├── 🎨 Design Tokens
  │   ├── Colors (Primary, Secondary, Destructive, etc.)
  │   ├── Typography (Font sizes, weights, line heights)
  │   ├── Spacing (4px, 8px, 16px, 24px, etc.)
  │   └── Border Radius (sm, md, lg, full)
  │
  └── 🧩 Components
      ├── Button (variants: default, destructive, outline, etc.)
      ├── Card
      ├── Input
      └── ...
```

### 디자인 토큰 명명 규칙

Figma의 변수 이름을 코드와 일치시키면 작업이 훨씬 쉬워집니다:

| Figma 변수명 | CSS 변수명 | 설명 |
|------------|-----------|------|
| `color/primary` | `--primary` | 주요 색상 |
| `color/secondary` | `--secondary` | 보조 색상 |
| `color/destructive` | `--destructive` | 위험/삭제 색상 |
| `spacing/4` | `1rem` (16px) | 기본 간격 단위 |

## 2️⃣ Figma에서 코드로 전환하는 방법

### 방법 1: Figma to Code 플러그인 사용 (추천)

#### 추천 플러그인

1. **[Figma to Code](https://www.figma.com/community/plugin/842128343887142055)**
   - HTML/React/Tailwind CSS 코드 생성
   - 무료
   - 설치: Figma → Plugins → Browse plugins → "Figma to Code" 검색

2. **[Anima](https://www.figma.com/community/plugin/857346721138427857)**
   - React 코드 생성
   - 무료 플랜 제공
   - 더 정교한 코드 생성

#### 사용 방법

1. Figma에서 컴포넌트 선택
2. Plugins → Figma to Code 실행
3. Framework: **React** 선택
4. Styling: **Tailwind CSS** 선택
5. 생성된 코드 복사
6. `src/components/ui/` 폴더에 붙여넣기 및 수정

### 방법 2: Figma Variables → CSS Variables

#### Figma Variables 플러그인 사용

1. **[Variables to CSS](https://www.figma.com/community/plugin/1254538877056388290)**
   - Figma Variables를 CSS 변수로 변환
   - 무료

#### 사용 방법

1. Figma에서 Variables 정의 (색상, 간격 등)
2. Plugins → Variables to CSS 실행
3. 생성된 CSS를 `src/index.css`에 붙여넣기

```css
/* 예시: Figma Variables에서 추출한 CSS */
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  --destructive: 0 84.2% 60.2%;
  /* ... */
}
```

### 방법 3: 수동 구현 (가장 정확함)

Figma 디자인을 보면서 직접 코드를 작성하는 방법입니다.

#### 단계별 가이드

1. **Figma에서 디자인 스펙 확인**
   - 색상 (Hex/RGB)
   - 크기 (width, height, padding, margin)
   - 폰트 (family, size, weight, line-height)
   - Border radius, shadow 등

2. **개발자에게 전달할 정보**
   - Figma 링크 (View 권한 부여)
   - 컴포넌트 이름
   - 변경 사항 설명

3. **개발자가 코드 구현**
   - `src/components/ui/` 폴더에 컴포넌트 생성
   - Storybook 스토리 작성

## 3️⃣ 디자인 토큰 업데이트하기

### 색상 변경

`src/index.css` 파일을 수정합니다:

```css
@layer base {
  :root {
    --primary: 222.2 47.4% 11.2%;        /* HSL 값 */
    --primary-foreground: 210 40% 98%;
    /* 다른 색상들... */
  }

  .dark {
    --primary: 210 40% 98%;              /* 다크 모드 색상 */
    --primary-foreground: 222.2 47.4% 11.2%;
  }
}
```

#### 색상 변환 도구

Figma의 Hex 색상을 HSL로 변환:
- [Color Converter](https://www.w3schools.com/colors/colors_converter.asp)
- Figma에서 직접 HSL 값 복사 (색상 선택 → HSL 탭)

### 타이포그래피 변경

`tailwind.config.js` 파일을 수정합니다:

```javascript
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'Inter', 'sans-serif'],
      },
      fontSize: {
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        // ...
      },
    },
  },
}
```

## 4️⃣ 새 컴포넌트 추가하기

### 디자이너가 직접 할 수 있는 작업

1. **Figma에서 컴포넌트 디자인**
2. **스펙 문서 작성** (아래 템플릿 사용)
3. **개발자에게 요청**

### 컴포넌트 스펙 템플릿

```markdown
## 컴포넌트 이름: Badge

### Figma 링크
https://www.figma.com/file/...

### 설명
상태나 카테고리를 표시하는 작은 라벨

### Variants
- Default: 기본 스타일
- Secondary: 보조 스타일
- Destructive: 경고/에러
- Outline: 테두리만

### 크기
- Small: 높이 20px, 패딩 4px 8px
- Medium: 높이 24px, 패딩 6px 12px

### 색상
- Default: Primary 색상 배경
- Secondary: Secondary 색상 배경

### 사용 예시
"새 메시지", "진행중", "완료" 등의 상태 표시
```

## 5️⃣ Storybook에서 확인하기

### Storybook 실행

```bash
npm run storybook
```

브라우저에서 `http://localhost:6006` 열림

### 확인 사항

- [ ] 모든 variants가 올바르게 표시되는가?
- [ ] 다크 모드에서도 잘 보이는가?
- [ ] 반응형 디자인이 작동하는가?
- [ ] 접근성 (키보드 탐색, 스크린 리더)이 작동하는가?

### 피드백 전달

Storybook에서 문제를 발견하면:

1. 스크린샷 캡처
2. 예상 동작 vs 실제 동작 설명
3. 개발자에게 전달

## 6️⃣ 협업 워크플로우

### 일반적인 프로세스

```
1. 디자이너: Figma에서 디자인
   ↓
2. 디자이너: 스펙 문서 작성 또는 플러그인으로 코드 생성
   ↓
3. 개발자: 코드 구현 및 Storybook 스토리 작성
   ↓
4. 디자이너: Storybook에서 확인 및 피드백
   ↓
5. 개발자: 수정 및 배포
```

### 커뮤니케이션 팁

- **명확한 컴포넌트 이름 사용**: Button, Card, Badge 등
- **Figma 링크 공유**: 항상 최신 디자인 링크 제공
- **변경 사항 명시**: "Primary 색상을 #3B82F6에서 #2563EB로 변경"
- **우선순위 표시**: 긴급, 중요, 일반 등

## 7️⃣ 자주 묻는 질문 (FAQ)

### Q: 코드를 전혀 모르는데 가능한가요?

A: 네! 다음 방법들을 사용할 수 있습니다:
- Figma 플러그인으로 코드 생성 후 개발자에게 전달
- 스펙 문서 작성 후 개발자가 구현
- Storybook에서 시각적으로 확인 및 피드백

### Q: Figma Variables를 사용해야 하나요?

A: 권장합니다! Figma Variables를 사용하면:
- 일관된 디자인 토큰 관리
- 한 번에 여러 컴포넌트 업데이트
- 코드와의 동기화가 쉬워짐

### Q: 디자인 변경 시 개발자에게 어떻게 알리나요?

A: 다음 정보를 포함하여 알려주세요:
1. Figma 링크
2. 변경된 컴포넌트 이름
3. 변경 내용 (색상, 크기, 간격 등)
4. 변경 이유 (선택사항)

### Q: Storybook을 어떻게 배포하나요?

A: 개발자가 다음 명령어로 배포합니다:
```bash
npm run build-storybook
```
생성된 `storybook-static` 폴더를 웹 서버에 호스팅

## 8️⃣ 추천 도구 및 리소스

### Figma 플러그인

- **Figma to Code**: React/Tailwind 코드 생성
- **Anima**: 고급 React 코드 생성
- **Variables to CSS**: Figma Variables → CSS 변환
- **Design Tokens**: 디자인 토큰 관리

### 학습 리소스

- [shadcn/ui 공식 문서](https://ui.shadcn.com/)
- [Tailwind CSS 문서](https://tailwindcss.com/)
- [Storybook 튜토리얼](https://storybook.js.org/tutorials/)
- [Figma Variables 가이드](https://help.figma.com/hc/en-us/articles/15339657135383-Guide-to-variables-in-Figma)

### 색상 도구

- [Realtime Colors](https://www.realtimecolors.com/): 색상 조합 미리보기
- [Coolors](https://coolors.co/): 색상 팔레트 생성
- [Color Converter](https://www.w3schools.com/colors/colors_converter.asp): Hex ↔ HSL 변환

## 9️⃣ 실전 예제

### 예제 1: Primary 색상 변경

**Figma에서:**
1. Variables → color/primary 선택
2. 새 색상 선택: `#2563EB`
3. HSL 값 확인: `217, 91%, 60%`

**코드에서:**
1. `src/index.css` 열기
2. `--primary` 값 변경:
```css
:root {
  --primary: 217 91% 60%;  /* 변경됨 */
}
```
3. 저장 후 Storybook 확인

### 예제 2: 새 버튼 variant 추가

**Figma에서:**
1. Button 컴포넌트에 "Success" variant 추가
2. 배경색: Green (#10B981)
3. 텍스트색: White

**개발자에게 전달:**
```
컴포넌트: Button
새 Variant: Success
배경색: #10B981 (HSL: 160, 84%, 39%)
텍스트색: White
사용 예시: "저장 완료", "성공" 등의 긍정적 액션
```

**개발자가 구현:**
- `src/components/ui/button.tsx` 수정
- `button.stories.tsx`에 Success 스토리 추가

## 🎓 다음 단계

1. **Figma에서 디자인 시스템 구축**
   - Variables 설정 (색상, 간격, 타이포그래피)
   - 기본 컴포넌트 디자인

2. **첫 컴포넌트 추가 연습**
   - 간단한 컴포넌트 (예: Badge) 디자인
   - 플러그인으로 코드 생성 또는 스펙 문서 작성
   - 개발자와 협업하여 구현

3. **Storybook 익숙해지기**
   - 로컬에서 Storybook 실행
   - 다양한 variants 확인
   - 다크 모드 테스트

4. **정기적인 동기화**
   - 주간 디자인 리뷰
   - Figma ↔ 코드 일관성 확인

---

**문의사항이 있으시면 개발팀에 연락주세요!** 🚀
