# GitHub 저장소에 업로드하는 방법

저장소 URL: https://github.com/hjban-droid/test

## 방법 1: GitHub 웹 인터페이스 사용 (가장 쉬운 방법)

1. 브라우저에서 https://github.com/hjban-droid/test 접속
2. 저장소가 비어있으므로 "uploading an existing file" 링크를 클릭하거나
3. 또는 "Add file" 버튼 → "Upload files" 선택
4. 다음 파일들을 드래그 앤 드롭:
   - `index.html`
   - `style.css`
   - `script.js`
   - `server.ps1`
   - `README.md`
   - `.gitignore` (숨김 파일 - Windows 탐색기에서 "숨김 항목 표시" 활성화 필요)
   - `GITHUB_SETUP.md` (선택사항)
   - `UPLOAD_TO_GITHUB.md` (선택사항)
5. 하단에 커밋 메시지 입력: "Initial commit: 웹소설 플랫폼 프로젝트"
6. "Commit changes" 버튼 클릭

## 방법 2: Git 명령어 사용 (Git 설치 필요)

Git이 설치되어 있다면 PowerShell에서 다음 명령어 실행:

```powershell
# Git 저장소 초기화
git init

# 모든 파일 추가
git add .

# 커밋
git commit -m "Initial commit: 웹소설 플랫폼 프로젝트"

# 원격 저장소 연결
git remote add origin https://github.com/hjban-droid/test.git

# 브랜치 이름을 main으로 설정
git branch -M main

# GitHub에 푸시
git push -u origin main
```

## 방법 3: GitHub Desktop 사용

1. GitHub Desktop 다운로드: https://desktop.github.com/
2. GitHub Desktop 실행
3. "File" → "Add Local Repository" 선택
4. 프로젝트 폴더 선택 (C:\Users\반혜진\test)
5. "Publish repository" 버튼 클릭
6. 저장소 이름 확인: `test`
7. "Publish repository" 클릭

## 업로드할 파일 목록

- ✅ index.html
- ✅ style.css
- ✅ script.js
- ✅ server.ps1
- ✅ README.md
- ✅ .gitignore
- ✅ GITHUB_SETUP.md
- ✅ UPLOAD_TO_GITHUB.md

## 참고사항

- `.gitignore` 파일은 숨김 파일입니다
- Windows 탐색기에서 "보기" → "숨김 항목" 체크하면 볼 수 있습니다
- GitHub에 업로드하기 전에 개인 정보가 포함된 파일이 없는지 확인하세요

