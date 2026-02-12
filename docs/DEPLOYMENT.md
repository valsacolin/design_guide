# GitHub Pages 배포 가이드

이 프로젝트는 `production` 브랜치를 통해 GitHub Pages에 자동으로 배포됩니다.

## 🚀 배포 프로세스

### 자동 배포 (권장)

`production` 브랜치에 푸시하면 자동으로 배포됩니다:

```bash
# main 브랜치에서 작업 후
git checkout production
git merge main
git push origin production
```

GitHub Actions가 자동으로:
1. Storybook 빌드
2. GitHub Pages에 배포
3. 완료 후 URL에서 확인 가능

### 배포 URL

배포가 완료되면 다음 URL에서 확인할 수 있습니다:
- **https://valsacolin.github.io/design_guide/**

## 📋 브랜치 전략

- **`main`**: 개발 브랜치 (새 기능, 컴포넌트 추가)
- **`production`**: 배포 브랜치 (안정적인 버전만)

## 🔧 GitHub Pages 설정

### 처음 설정 (한 번만)

1. GitHub 저장소 → **Settings** → **Pages**
2. **Source**: GitHub Actions 선택
3. 저장

### 배포 상태 확인

1. GitHub 저장소 → **Actions** 탭
2. 최근 워크플로우 실행 확인
3. 성공 시 녹색 체크마크 표시

## 🛠️ 로컬에서 빌드 테스트

배포 전에 로컬에서 테스트:

```bash
# Storybook 빌드
npm run build-storybook

# 빌드된 파일 미리보기 (선택사항)
npx http-server storybook-static
```

## 📝 배포 체크리스트

배포하기 전에 확인:

- [ ] 모든 컴포넌트가 Storybook에서 정상 작동
- [ ] 다크 모드 테스트 완료
- [ ] 반응형 디자인 확인
- [ ] 문서 업데이트 완료
- [ ] main 브랜치에 커밋 및 푸시
- [ ] production 브랜치로 머지
- [ ] production 브랜치 푸시

## 🔄 일반적인 워크플로우

```bash
# 1. main 브랜치에서 작업
git checkout main
# ... 작업 및 커밋 ...
git push origin main

# 2. production 브랜치로 배포
git checkout production
git merge main
git push origin production

# 3. GitHub Actions에서 자동 배포
# 4. https://bluestonedxt-dev.github.io/design_guide/ 에서 확인
```

## ⚠️ 주의사항

- `production` 브랜치에 직접 커밋하지 마세요
- 항상 `main`에서 작업 후 `production`으로 머지
- 배포 전에 로컬에서 빌드 테스트 권장

## 🐛 문제 해결

### 배포 실패 시

1. **Actions 탭**에서 에러 로그 확인
2. 로컬에서 `npm run build-storybook` 실행하여 빌드 오류 확인
3. 오류 수정 후 다시 푸시

### 페이지가 보이지 않을 때

1. Settings → Pages에서 GitHub Actions 선택 확인
2. Actions 탭에서 배포 완료 확인 (녹색 체크)
3. 5-10분 정도 기다린 후 다시 확인

## 📞 도움말

문제가 있으면 개발팀에 문의하세요.
