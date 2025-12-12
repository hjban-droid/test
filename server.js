const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 10000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname)));

// 모든 경로를 index.html로 리다이렉트 (SPA 지원)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

