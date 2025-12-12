// 웹소설 데이터
const novels = [
    {
        id: 1,
        title: "마법사의 귀환",
        author: "판타지작가",
        genre: "fantasy",
        description: "천 년의 잠에서 깨어난 전설의 마법사가 현대 세계로 돌아와 펼치는 모험담. 마법과 기술이 공존하는 새로운 세계에서 그는 자신의 운명을 찾아 나선다.",
        rating: 4.8,
        views: 125000,
        chapters: 150,
        isNew: false,
        cover: "⚔️"
    },
    {
        id: 2,
        title: "달빛 아래의 약속",
        author: "로맨스작가",
        genre: "romance",
        description: "운명적으로 만난 두 사람의 달콤하고 아픈 사랑 이야기. 시간과 공간을 넘나드는 로맨스 판타지 소설.",
        rating: 4.9,
        views: 98000,
        chapters: 120,
        isNew: false,
        cover: "🌙"
    },
    {
        id: 3,
        title: "어둠의 검사",
        author: "액션작가",
        genre: "action",
        description: "어둠의 세계에서 살아남기 위해 싸우는 검사의 이야기. 치열한 전투와 복잡한 음모가 얽힌 액션 스릴러.",
        rating: 4.7,
        views: 156000,
        chapters: 200,
        isNew: false,
        cover: "🗡️"
    },
    {
        id: 4,
        title: "사라진 기억",
        author: "미스터리작가",
        genre: "mystery",
        description: "기억을 잃은 주인공이 자신의 정체를 찾아가는 과정에서 발견하는 충격적인 진실. 긴장감 넘치는 미스터리 소설.",
        rating: 4.6,
        views: 87000,
        chapters: 80,
        isNew: false,
        cover: "🔍"
    },
    {
        id: 5,
        title: "드래곤의 계약",
        author: "판타지작가2",
        genre: "fantasy",
        description: "드래곤과 계약을 맺은 소년이 세계를 구하기 위해 떠나는 여정. 판타지와 모험이 가득한 이야기.",
        rating: 4.5,
        views: 112000,
        chapters: 180,
        isNew: true,
        cover: "🐉"
    },
    {
        id: 6,
        title: "별이 빛나는 밤에",
        author: "로맨스작가2",
        genre: "romance",
        description: "별빛 아래에서 만난 두 사람의 순수한 사랑 이야기. 따뜻하고 감동적인 현대 로맨스.",
        rating: 4.8,
        views: 95000,
        chapters: 100,
        isNew: true,
        cover: "⭐"
    },
    {
        id: 7,
        title: "무림고수",
        author: "액션작가2",
        genre: "action",
        description: "현대 무림에서 최고의 고수가 되기 위한 주인공의 성장 스토리. 무협 액션이 가득한 작품.",
        rating: 4.7,
        views: 134000,
        chapters: 250,
        isNew: false,
        cover: "🥋"
    },
    {
        id: 8,
        title: "숨겨진 진실",
        author: "미스터리작가2",
        genre: "mystery",
        description: "과거의 비밀을 파헤치는 탐정의 이야기. 예상치 못한 반전이 기다리는 미스터리 소설.",
        rating: 4.6,
        views: 76000,
        chapters: 90,
        isNew: true,
        cover: "📖"
    }
];

// 현재 필터
let currentFilter = 'all';

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    displayFeaturedNovel();
    displayNovels();
    displayNewNovels();
});

// 추천 작품 표시
function displayFeaturedNovel() {
    const featured = novels[0]; // 첫 번째 작품을 추천으로
    const featuredDiv = document.getElementById('featuredNovel');
    
    featuredDiv.innerHTML = `
        <h3>${featured.title}</h3>
        <div class="meta">
            <span>작가: ${featured.author}</span>
            <span>⭐ ${featured.rating}</span>
            <span>👁️ ${featured.views.toLocaleString()}회</span>
        </div>
        <p class="description">${featured.description}</p>
        <div class="tags">
            <span class="tag">${getGenreName(featured.genre)}</span>
            <span class="tag">${featured.chapters}화</span>
        </div>
    `;
    
    featuredDiv.onclick = () => showNovelDetail(featured.id);
}

// 웹소설 목록 표시
function displayNovels(filter = 'all') {
    const grid = document.getElementById('novelsGrid');
    const filteredNovels = filter === 'all' 
        ? novels.filter(n => !n.isNew)
        : novels.filter(n => n.genre === filter && !n.isNew);
    
    grid.innerHTML = filteredNovels.map(novel => `
        <div class="novel-card" onclick="showNovelDetail(${novel.id})">
            <div class="cover">${novel.cover}</div>
            <div class="info">
                <h3>${novel.title}</h3>
                <div class="author">${novel.author}</div>
                <div class="stats">
                    <span class="rating">⭐ ${novel.rating}</span>
                    <span>👁️ ${novel.views.toLocaleString()}</span>
                    <span>📚 ${novel.chapters}화</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 신작 웹소설 표시
function displayNewNovels() {
    const grid = document.getElementById('newNovelsGrid');
    const newNovels = novels.filter(n => n.isNew);
    
    grid.innerHTML = newNovels.map(novel => `
        <div class="novel-card" onclick="showNovelDetail(${novel.id})">
            <div class="cover">${novel.cover}</div>
            <div class="info">
                <h3>${novel.title}</h3>
                <div class="author">${novel.author}</div>
                <div class="stats">
                    <span class="rating">⭐ ${novel.rating}</span>
                    <span>👁️ ${novel.views.toLocaleString()}</span>
                    <span>📚 ${novel.chapters}화</span>
                </div>
            </div>
        </div>
    `).join('');
}

// 필터 적용
function filterNovels(genre) {
    currentFilter = genre;
    
    // 탭 활성화 상태 변경
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');
    
    displayNovels(genre);
}

// 장르 이름 변환
function getGenreName(genre) {
    const genreMap = {
        'fantasy': '판타지',
        'romance': '로맨스',
        'action': '액션',
        'mystery': '미스터리'
    };
    return genreMap[genre] || genre;
}

// 웹소설 상세 페이지 표시
function showNovelDetail(novelId) {
    const novel = novels.find(n => n.id === novelId);
    if (!novel) return;
    
    // 상세 페이지 HTML 생성
    const detailHTML = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${novel.title} - 웹소설 플랫폼</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <div class="container">
                    <div class="logo">
                        <h1>📚 웹소설 플랫폼</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html">홈</a></li>
                            <li><a href="index.html#genres">장르</a></li>
                            <li><a href="index.html#rankings">랭킹</a></li>
                            <li><a href="index.html#new">신작</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <main class="novel-detail">
                <div class="container">
                    <div class="novel-header">
                        <h1>${novel.title}</h1>
                        <div class="meta-info">
                            <span>작가: ${novel.author}</span>
                            <span>장르: ${getGenreName(novel.genre)}</span>
                            <span>⭐ ${novel.rating}</span>
                            <span>👁️ ${novel.views.toLocaleString()}회</span>
                            <span>📚 총 ${novel.chapters}화</span>
                        </div>
                        <p class="description">${novel.description}</p>
                        <div class="tags">
                            <span class="tag">${getGenreName(novel.genre)}</span>
                            <span class="tag">인기작</span>
                        </div>
                    </div>
                    
                    <div class="chapters-list">
                        <h2>목차</h2>
                        ${generateChaptersList(novel.chapters, novel.id)}
                    </div>
                </div>
            </main>
            
            <footer>
                <div class="container">
                    <p>&copy; 2024 웹소설 플랫폼. All rights reserved.</p>
                </div>
            </footer>
        </body>
        </html>
    `;
    
    // 새 페이지로 이동
    const newWindow = window.open('', '_blank');
    newWindow.document.write(detailHTML);
    newWindow.document.close();
}

// 목차 생성
function generateChaptersList(totalChapters, novelId) {
    let chaptersHTML = '';
    for (let i = 1; i <= Math.min(totalChapters, 20); i++) {
        chaptersHTML += `
            <div class="chapter-item" onclick="readChapter(${novelId}, ${i})">
                <span>제 ${i}화</span>
                <span>📖</span>
            </div>
        `;
    }
    if (totalChapters > 20) {
        chaptersHTML += `<div style="text-align: center; padding: 1rem; color: var(--text-secondary);">... 외 ${totalChapters - 20}화 더</div>`;
    }
    return chaptersHTML;
}

// 챕터 읽기
function readChapter(novelId, chapterNum) {
    const novel = novels.find(n => n.id === novelId);
    if (!novel) return;
    
    // 샘플 챕터 내용 생성
    const chapterContent = generateChapterContent(novel.title, chapterNum);
    
    const readingHTML = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${novel.title} 제 ${chapterNum}화</title>
            <link rel="stylesheet" href="style.css">
        </head>
        <body>
            <header>
                <div class="container">
                    <div class="logo">
                        <h1>📚 웹소설 플랫폼</h1>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="index.html">홈</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            
            <main class="reading-page">
                <div class="container">
                    <div class="reading-header">
                        <h1>${novel.title}</h1>
                        <p>제 ${chapterNum}화</p>
                    </div>
                    
                    <div class="reading-content">
                        ${chapterContent}
                    </div>
                    
                    <div class="reading-controls">
                        <a href="javascript:void(0)" class="btn btn-secondary" onclick="window.history.back()">← 목록으로</a>
                        <div>
                            ${chapterNum > 1 ? `<a href="javascript:void(0)" class="btn btn-secondary" onclick="readChapter(${novelId}, ${chapterNum - 1})">이전화</a>` : ''}
                            ${chapterNum < novel.chapters ? `<a href="javascript:void(0)" class="btn" onclick="readChapter(${novelId}, ${chapterNum + 1})">다음화</a>` : ''}
                        </div>
                    </div>
                </div>
            </main>
            
            <footer>
                <div class="container">
                    <p>&copy; 2024 웹소설 플랫폼. All rights reserved.</p>
                </div>
            </footer>
        </body>
        </html>
    `;
    
    const newWindow = window.open('', '_blank');
    newWindow.document.write(readingHTML);
    newWindow.document.close();
}

// 챕터 내용 생성 (샘플)
function generateChapterContent(title, chapterNum) {
    const sampleTexts = [
        `그날 밤, 하늘은 평소와 달랐다. 별들이 평소보다 더 밝게 빛나고 있었고, 달은 붉은색으로 물들어 있었다. 주인공은 이 이상한 현상을 바라보며 무언가가 일어날 것임을 직감했다.`,
        `"이제 시작이다." 주인공은 작은 목소리로 중얼거렸다. 그의 손에 쥐어진 검은 차갑게 빛나고 있었고, 마치 살아있는 것처럼 미세하게 떨리고 있었다.`,
        `앞으로 펼쳐질 모험이 두려웠지만, 동시에 설렘으로 가득 차 있었다. 그는 한 걸음, 그리고 또 한 걸음 앞으로 나아갔다.`,
        `바람이 그의 머리카락을 스치고 지나갔다. 그 바람 속에는 무언가 다른 것, 마법의 기운이 섞여 있었다. 주인공은 이를 느끼고 경계심을 높였다.`,
        `갑자기 어둠 속에서 무언가가 움직였다. 주인공은 즉시 반응했고, 그의 검은 공중에 그려진 듯한 섬광을 남겼다.`,
        `"누구냐!" 주인공의 목소리가 밤의 고요를 깨뜨렸다. 하지만 응답은 없었다. 오직 바람 소리만이 그의 귀에 들려왔다.`,
        `그 순간, 주인공은 깨달았다. 이것은 단순한 우연이 아니었다. 누군가, 아니 무언가가 그를 기다리고 있었다는 것을.`,
        `그는 심호흡을 하고 다시 한 번 앞을 응시했다. 이제는 두려움이 사라지고, 오직 결의만이 남아있었다.`,
        `"좋아, 와보라." 주인공은 자신감에 찬 목소리로 말했다. 그리고 그는 어둠 속으로 걸어 들어갔다.`,
        `그곳에서 기다리고 있던 것은...`
    ];
    
    let content = `<p>제 ${chapterNum}화</p><br>`;
    
    // 여러 문단으로 구성
    for (let i = 0; i < 8; i++) {
        const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
        content += `<p>${randomText}</p><br>`;
    }
    
    return content;
}

// 검색 기능
function searchNovels() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) {
        displayNovels(currentFilter);
        return;
    }
    
    const filtered = novels.filter(novel => 
        novel.title.toLowerCase().includes(searchTerm) ||
        novel.author.toLowerCase().includes(searchTerm) ||
        novel.description.toLowerCase().includes(searchTerm)
    );
    
    const grid = document.getElementById('novelsGrid');
    if (filtered.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-secondary);">검색 결과가 없습니다.</div>';
    } else {
        grid.innerHTML = filtered.map(novel => `
            <div class="novel-card" onclick="showNovelDetail(${novel.id})">
                <div class="cover">${novel.cover}</div>
                <div class="info">
                    <h3>${novel.title}</h3>
                    <div class="author">${novel.author}</div>
                    <div class="stats">
                        <span class="rating">⭐ ${novel.rating}</span>
                        <span>👁️ ${novel.views.toLocaleString()}</span>
                        <span>📚 ${novel.chapters}화</span>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// 엔터키로 검색
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchNovels();
            }
        });
    }
});

