# 웹소설 플랫폼 📚

모던하고 아름다운 웹소설 플랫폼 웹사이트입니다.

## 주요 기능

- 📖 웹소설 목록 및 상세 페이지
- 🔍 작품 검색 기능
- 🏷️ 장르별 필터링 (판타지, 로맨스, 액션, 미스터리)
- 📱 반응형 디자인
- 🌙 다크 테마 디자인
- 📚 웹소설 읽기 기능

## 기술 스택

- HTML5
- CSS3 (모던 스타일링, 그라데이션, 애니메이션)
- JavaScript (Vanilla JS)

## 파일 구조

```
.
├── index.html      # 메인 페이지
├── style.css       # 스타일시트
├── script.js       # JavaScript 기능
├── server.ps1      # PowerShell HTTP 서버 (로컬 테스트용)
└── README.md       # 프로젝트 설명
```

## 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 Mixpanel 토큰을 설정하세요:

```env
MIXPANEL_TOKEN=your_mixpanel_token_here
```

`.env` 파일은 Git에 커밋되지 않습니다 (`.gitignore`에 포함됨).

## 실행 방법

### 방법 1: Node.js 서버 사용 (권장)

```bash
npm install
npm start
```

서버가 실행되면 브라우저에서 `http://localhost:10000` 접속

### 방법 2: PowerShell 서버 사용 (Windows)

```powershell
powershell -ExecutionPolicy Bypass -File server.ps1
```

그 다음 브라우저에서 `http://localhost:8000` 접속

### 방법 2: Python HTTP 서버

```bash
python -m http.server 8000
```

### 방법 3: Node.js http-server

```bash
npx http-server -p 8000
```

### 방법 4: 직접 파일 열기

`index.html` 파일을 브라우저에서 직접 열 수 있습니다 (일부 기능 제한 가능)

## 프로젝트 특징

- 순수 HTML/CSS/JavaScript로 구현
- 외부 의존성 없음
- 모던한 UI/UX 디자인
- 반응형 레이아웃
- 다크 테마 적용

## 라이선스

이 프로젝트는 자유롭게 사용 가능합니다.

## 작성자

웹소설 플랫폼 프로젝트

