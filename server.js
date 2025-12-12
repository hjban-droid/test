require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 10000;

// 정적 파일 제공 (CSS, JS, 이미지 등)
app.use(express.static(path.join(__dirname)));

// Mixpanel 토큰을 환경 변수에서 가져오기
const MIXPANEL_TOKEN = process.env.MIXPANEL_TOKEN || '62a4b6d216c4fc94078f17c2d3774d54';

// index.html을 동적으로 렌더링하여 Mixpanel 토큰 주입
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // 하드코딩된 토큰을 환경 변수로 교체
  html = html.replace(
    /mixpanel\.init\(['"][^'"]+['"]\)/g,
    `mixpanel.init('${MIXPANEL_TOKEN}')`
  );
  
  res.send(html);
});

// 모든 경로를 index.html로 리다이렉트 (SPA 지원)
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'index.html');
  let html = fs.readFileSync(indexPath, 'utf8');
  
  // 하드코딩된 토큰을 환경 변수로 교체
  html = html.replace(
    /mixpanel\.init\(['"][^'"]+['"]\)/g,
    `mixpanel.init('${MIXPANEL_TOKEN}')`
  );
  
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Mixpanel token loaded: ${MIXPANEL_TOKEN.substring(0, 8)}...`);
});

