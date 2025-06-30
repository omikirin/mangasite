import { useState } from 'react'
import './App.css'

function App() {
  // サンプルマンガデータ
  const mangaList = [
    {
      id: 1,
      title: "サンプルマンガ1",
      description: "面白いマンガの説明文です",
      coverImage: "/manga/sample1-cover.jpg",
      pages: 8
    },
    {
      id: 2,
      title: "サンプルマンガ2", 
      description: "もう一つの面白いマンガです",
      coverImage: "/manga/sample2-cover.jpg",
      pages: 5
    }
  ]

  return (
    <div className="manga-site">
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
                  e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="280"><rect width="100%" height="100%" fill="%23333"/><text x="50%" y="50%" fill="white" text-anchor="middle" dy=".3em">${manga.title}</text></svg>`
                }}
              />
            </div>
            <div className="manga-info">
              <h3>{manga.title}</h3>
              <p>{manga.description}</p>
              <div className="manga-meta">
                <span>{manga.pages}ページ</span>
                <button className="read-btn">読む</button>
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

export default App
