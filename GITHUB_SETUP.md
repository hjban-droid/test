# GitHub 저장소 설정 가이드

이 파일은 GitHub에 프로젝트를 업로드하는 방법을 안내합니다.

## 방법 1: Git 명령어 사용 (권장)

### 1단계: Git 설치 확인

PowerShell에서 다음 명령어로 Git이 설치되어 있는지 확인하세요:

```powershell
git --version
```

Git이 설치되어 있지 않다면 [Git 공식 웹사이트](https://git-scm.com/download/win)에서 다운로드하세요.

### 2단계: Git 저장소 초기화

프로젝트 폴더에서 다음 명령어를 실행하세요:

```powershell
git init
git add .
git commit -m "Initial commit: 웹소설 플랫폼 프로젝트"
```

### 3단계: GitHub 저장소 생성

1. [GitHub.com](https://github.com)에 로그인
2. 우측 상단의 "+" 버튼 클릭 → "New repository" 선택
3. 저장소 이름 입력 (예: `webnovel-platform`)
4. "Public" 또는 "Private" 선택
5. "Initialize this repository with a README" 체크 해제 (이미 README.md가 있으므로)
6. "Create repository" 클릭

### 4단계: 원격 저장소 연결 및 푸시

GitHub에서 생성된 저장소의 URL을 복사한 후 (예: `https://github.com/yourusername/webnovel-platform.git`):

```powershell
git remote add origin https://github.com/yourusername/webnovel-platform.git
git branch -M main
git push -u origin main
```

## 방법 2: GitHub Desktop 사용

1. [GitHub Desktop](https://desktop.github.com/) 다운로드 및 설치
2. GitHub Desktop 실행
3. "File" → "Add Local Repository" 선택
4. 프로젝트 폴더 선택
5. "Publish repository" 버튼 클릭
6. 저장소 이름 입력 후 "Publish" 클릭

## 방법 3: GitHub 웹 인터페이스 사용

1. GitHub.com에서 새 저장소 생성
2. 저장소 페이지에서 "uploading an existing file" 클릭
3. 프로젝트의 모든 파일을 드래그 앤 드롭
4. "Commit changes" 클릭

## 포함된 파일들

- `index.html` - 메인 페이지
- `style.css` - 스타일시트
- `script.js` - JavaScript 기능
- `server.ps1` - 로컬 서버 스크립트
- `README.md` - 프로젝트 설명
- `.gitignore` - Git 제외 파일 목록

## 주의사항

- `.gitignore` 파일이 숨김 파일로 보일 수 있습니다
- Windows 탐색기에서 "숨김 항목 표시"를 활성화하면 볼 수 있습니다
- GitHub에 업로드하기 전에 개인 정보가 포함된 파일이 없는지 확인하세요

