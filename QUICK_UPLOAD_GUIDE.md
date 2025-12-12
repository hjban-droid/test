# 빠른 업로드 가이드 - GitHub 웹 인터페이스 사용

Git이 설치되어 있지 않으므로, **가장 쉬운 방법**인 GitHub 웹 인터페이스를 사용하세요!

## 단계별 가이드

### 1단계: GitHub 저장소 열기
브라우저에서 다음 주소를 엽니다:
**https://github.com/hjban-droid/test**

### 2단계: 파일 업로드 시작
저장소가 비어있으므로 다음 중 하나를 클릭:
- "uploading an existing file" 링크
- 또는 "Add file" 버튼 → "Upload files" 선택

### 3단계: 파일 선택
Windows 탐색기에서 `C:\Users\반혜진\test` 폴더를 엽니다.

다음 파일들을 **모두 선택**하여 드래그 앤 드롭:
- ✅ `index.html`
- ✅ `style.css`
- ✅ `script.js`
- ✅ `server.ps1`
- ✅ `README.md`
- ✅ `.gitignore` (숨김 파일 - Windows 탐색기에서 "보기" → "숨김 항목" 체크 필요)
- ✅ `GITHUB_SETUP.md`
- ✅ `UPLOAD_TO_GITHUB.md`
- ✅ `QUICK_UPLOAD_GUIDE.md`

### 4단계: 커밋
1. 하단에 커밋 메시지 입력:
   ```
   Initial commit: 웹소설 플랫폼 프로젝트
   ```
2. "Commit changes" 버튼 클릭

### 완료! 🎉
파일들이 GitHub에 업로드됩니다!

---

## Git 설치 후 명령어 사용하고 싶다면

1. Git 다운로드: https://git-scm.com/download/win
2. 설치 완료 후 PowerShell에서:
   ```powershell
   cd "C:\Users\반혜진\test"
   git init
   git add .
   git commit -m "Initial commit: 웹소설 플랫폼 프로젝트"
   git remote add origin https://github.com/hjban-droid/test.git
   git branch -M main
   git push -u origin main
   ```

