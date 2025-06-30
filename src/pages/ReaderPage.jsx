import { useState } from 'react'
import MangaReader from '../components/MangaReader'
import './ReaderPage.css'

function ReaderPage({ manga, onBack }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <div className="reader-page">
      <div className="reader-header">
        <button className="back-btn" onClick={onBack}>
          ← 戻る
        </button>
        <h2 className="manga-title">{manga.title}</h2>
        <button 
          className="info-btn"
          onClick={() => setShowDetails(!showDetails)}
        >
          ℹ️ 詳細
        </button>
      </div>

      {showDetails && (
        <div className="manga-details">
          <div className="details-content">
            <p>{manga.description}</p>
            <div className="details-tags">
              {manga.tags.map(tag => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>
            <p className="page-count">全{manga.pages}ページ</p>
          </div>
          <button 
            className="close-details"
            onClick={() => setShowDetails(false)}
          >
            ✕
          </button>
        </div>
      )}

      <MangaReader 
        mangaId={manga.id} 
        totalPages={manga.pages}
      />
    </div>
  )
}

export default ReaderPage