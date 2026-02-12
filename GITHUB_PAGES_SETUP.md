# GitHub Pages 설정 가이드

## 📋 설정 단계

### 1. GitHub 저장소 Settings 접속

1. 브라우저에서 https://github.com/valsacolin/design_guide 접속
2. 상단 메뉴에서 **Settings** 클릭
3. 왼쪽 사이드바에서 **Pages** 클릭

또는 직접 URL 접속:
- https://github.com/BluStoneDXT-dev/design_guide/settings/pages

---

### 2. Build and deployment 설정

**Source 섹션에서:**

1. **Source** 드롭다운 클릭
2. **GitHub Actions** 선택 ✅

   ```
   ⚠️ 중요: "Deploy from a branch"가 아닌 "GitHub Actions"를 선택해야 합니다!
   ```

3. 설정 후 자동 저장됨 (별도 저장 버튼 없음)

---

### 3. 첫 배포 실행

GitHub Pages가 설정되면, `production` 브랜치에 이미 푸시되어 있으므로:

1. **Actions** 탭으로 이동
   - https://github.com/BluStoneDXT-dev/design_guide/actions

2. **"Deploy Storybook to GitHub Pages"** 워크플로우 확인
   - 자동으로 실행되어야 합니다
   - 노란색 원: 진행 중
   - 녹색 체크: 성공
   - 빨간색 X: 실패 (로그 확인 필요)

3. 배포 완료까지 약 2-3분 소요

---

### 4. 배포 URL 확인

배포가 완료되면 다음 URL에서 Storybook을 확인할 수 있습니다:

**🔗 https://bluestonedxt-dev.github.io/design_guide/**

---

## 🔍 설정 확인 방법

### GitHub Pages 설정 확인

Settings → Pages 페이지에서 다음과 같이 표시되어야 합니다:

```
Build and deployment
├── Source: GitHub Actions ✅
└── Your site is live at https://bluestonedxt-dev.github.io/design_guide/
```

### Actions 워크플로우 확인

Actions 탭에서:
- ✅ "Deploy Storybook to GitHub Pages" 워크플로우가 보임
- ✅ 녹색 체크마크 (성공)
- ✅ production 브랜치에서 실행됨

---

## 🚀 향후 배포 방법

### 자동 배포 (권장)

`production` 브랜치에 푸시하면 자동으로 배포됩니다:

```bash
# main 브랜치에서 작업
git checkout main
# ... 작업 및 커밋 ...
git push origin main

# production 브랜치로 배포
git checkout production
git merge main
git push origin production  # 자동 배포 시작!
```

### 배포 확인

1. GitHub → Actions 탭에서 진행 상황 확인
2. 완료 후 https://bluestonedxt-dev.github.io/design_guide/ 접속
3. 변경사항 반영 확인

---

## ⚠️ 문제 해결

### "GitHub Actions" 옵션이 보이지 않을 때

1. 저장소가 Public인지 확인 (Private는 유료 플랜 필요)
2. Settings → Actions → General에서 Actions 활성화 확인
3. 페이지 새로고침

### 배포가 실행되지 않을 때

1. Actions 탭에서 워크플로우 수동 실행:
   - "Deploy Storybook to GitHub Pages" 선택
   - "Run workflow" 클릭
   - Branch: production 선택
   - "Run workflow" 버튼 클릭

### 404 에러가 발생할 때

1. Settings → Pages에서 URL 확인
2. Actions에서 배포 완료 확인 (녹색 체크)
3. 5-10분 정도 기다린 후 다시 시도
4. 브라우저 캐시 삭제 후 재접속

---

## 📊 현재 상태

✅ production 브랜치 생성 완료
✅ GitHub Actions 워크플로우 추가 완료
✅ production 브랜치 푸시 완료
⏳ GitHub Pages 설정 필요 (위 단계 1-2 진행)
⏳ 첫 배포 실행 대기

---

## 📞 도움이 필요하면

설정 중 문제가 발생하면:
1. Actions 탭에서 에러 로그 확인
2. 스크린샷과 함께 개발팀에 문의

---

**다음 단계:** 위 설정을 완료하신 후, https://bluestonedxt-dev.github.io/design_guide/ 에서 Storybook을 확인하세요! 🎉
