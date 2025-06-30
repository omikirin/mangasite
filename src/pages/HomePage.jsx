import { useState } from 'react'
import './HomePage.css'

function HomePage({ onMangaSelect }) {
  // サンプルマンガデータ
  const mangaList = [
    {
      id: "manga1",
      title: "サンプルマンガ1",
      description: "面白いマンガの説明文です。冒険とアクションが満載の物語。",
      coverImage: "/manga/manga1/cover.jpg",
      pages: 8,
      tags: ["アクション", "冒険"]
    },
    {
      id: "manga2",
      title: "サンプルマンガ2", 
      description: "もう一つの面白いマンガです。ロマンスとコメディ要素もあります。",
      coverImage: "/manga/manga2/cover.jpg",
      pages: 5,
      tags: ["ロマンス", "コメディ"]
    },
    {
      id: "manga3",
      title: "サンプルマンガ3",
      description: "SF要素満載のマンガ。未来の世界での壮大な物語。",
      coverImage: "/manga/manga3/cover.jpg",
      pages: 12,
      tags: ["SF", "ドラマ"]
    }
  ]

  return (
    <div className="home-page">
      <header className="site-header">
        <h1>📚 マンガサイト</h1>
        <p>お気に入りのマンガをお楽しみください</p>
      </header>

      <main className="manga-grid">
        {mangaList.map(manga => (
          <div key={manga.id} className="manga-card">
            <div className="manga-cover">
              <img 
                src={manga.coverImage} 
                alt={manga.title}
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="280"><rect width="100%" height="100%" fill="%23333"/><text x="50%" y="45%" fill="white" text-anchor="middle" dy=".3em" font-size="16">${manga.title}</text><text x="50%" y="55%" fill="#ccc" text-anchor="middle" dy=".3em" font-size="12">${manga.pages}ページ</text></svg>`
                }}
              />
            </div>
            <div className="manga-info">
              <h3>{manga.title}</h3>
              <p>{manga.description}</p>
              <div className="manga-tags">
                {manga.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="manga-meta">
                <span>{manga.pages}ページ</span>
                <button 
                  className="read-btn"
                  onClick={() => onMangaSelect(manga)}
                >
                  読む
                </button>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="site-footer">
        <p>© 2024 マンガサイト - React + Vite で構築</p>
      </footer>
    </div>
  )
}

export default HomePage