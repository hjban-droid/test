# Render 배포 가이드

## Render 배포 설정

### 1. Render 웹사이트에서 새 Web Service 생성

1. [Render Dashboard](https://dashboard.render.com)에 로그인
2. "New +" 버튼 클릭 → "Web Service" 선택
3. GitHub 저장소 연결: `https://github.com/hjban-droid/test`

### 2. 배포 설정

**Build Command:**
```
npm install
```

**Start Command:**
```
npm start
```

또는 직접:
```
node server.js
```

### 3. 환경 변수 (선택사항)

- `PORT`: Render가 자동으로 설정합니다 (기본값: 10000)

### 4. 배포 완료

배포가 완료되면 Render가 자동으로 URL을 제공합니다:
- 예: `https://webnovel-platform.onrender.com`

## 참고사항

- 첫 배포는 몇 분 정도 소요될 수 있습니다
- 무료 플랜의 경우 15분간 비활성화되면 자동으로 sleep 모드로 전환됩니다
- 첫 요청 시 깨어나는 데 약 30초 정도 걸릴 수 있습니다

