# 시작하기

이 문서는 디자인 시스템을 처음 사용하는 개발자와 디자이너를 위한 빠른 시작 가이드입니다.

## 📋 사전 요구사항

- Node.js 18 이상
- npm 또는 yarn
- Git

## 🚀 설치 및 실행

### 1. 저장소 클론

```bash
git clone <repository-url>
cd design_guide
```

### 2. 의존성 설치

```bash
npm install
```

### 3. Storybook 실행

```bash
npm run storybook
```

브라우저에서 `http://localhost:6006`이 자동으로 열립니다.

### 4. 개발 서버 실행 (선택사항)

```bash
npm run dev
```

브라우저에서 `http://localhost:5173`이 열립니다.

## 👥 역할별 가이드

### 개발자

1. **컴포넌트 사용하기**
   ```tsx
   import { Button } from '@/components/ui/button'
   
   function App() {
     return <Button variant="default">클릭하세요</Button>
   }
   ```

2. **새 컴포넌트 추가하기**
   - `src/components/ui/` 폴더에 컴포넌트 생성
   - 같은 폴더에 `.stories.tsx` 파일 생성
   - Storybook에서 자동으로 감지됨

3. **스타일 커스터마이징**
   - `src/index.css`: 디자인 토큰 (색상, 간격 등)
   - `tailwind.config.js`: Tailwind 설정

### 디자이너

**[디자이너 가이드 보기](./DESIGNER_GUIDE.md)**

주요 내용:
- Figma에서 코드로 전환하는 방법
- 디자인 토큰 업데이트
- Storybook에서 확인하기
- 개발자와 협업하기

## 📚 주요 문서

- [디자이너 가이드](./DESIGNER_GUIDE.md) - Figma 연동 및 디자인 워크플로우
- [컴포넌트 목록](../README.md#-사용-가능한-컴포넌트) - 사용 가능한 모든 컴포넌트

## 🛠️ 주요 명령어

```bash
# Storybook 개발 서버
npm run storybook

# Storybook 빌드 (배포용)
npm run build-storybook

# Vite 개발 서버
npm run dev

# 프로덕션 빌드
npm run build

# 린트 검사
npm run lint
```

## 🎨 디자인 토큰

### 색상

프로젝트는 HSL 색상 공간을 사용합니다:

- **Primary**: 주요 액션 버튼, 링크
- **Secondary**: 보조 버튼, 배경
- **Destructive**: 삭제, 경고 등 위험한 액션
- **Muted**: 비활성화, 보조 텍스트

색상 변경: `src/index.css` 파일의 CSS 변수 수정

### 타이포그래피

기본 폰트: System UI (Pretendard, Inter, sans-serif)

폰트 변경: `tailwind.config.js` 파일 수정

### 간격

Tailwind의 기본 간격 시스템 사용 (4px 단위)

## 🤝 기여하기

1. 새로운 컴포넌트를 추가할 때는 반드시 스토리를 함께 작성
2. TypeScript 타입을 명확히 정의
3. 접근성 가이드라인 준수 (WCAG 2.1 AA)
4. 다크 모드 지원 확인

## 📞 도움이 필요하신가요?

- 개발 관련: 개발팀에 문의
- 디자인 관련: 디자인팀에 문의
- 버그 리포트: Issue 생성

## 🔗 참고 자료

- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Radix UI](https://www.radix-ui.com/)
