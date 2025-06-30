import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import mangaList from '../data/manga'
import '../styles/reader.css'

function MangaReader() {
  const { id } = useParams()
  const manga = mangaList.find(m => m.id === id)
  const [page, setPage] = useState(1)

  if (!manga) {
    return (
      <div className="reader-container">
        <p>マンガが見つかりません</p>
        <Link to="/">一覧に戻る</Link>
      </div>
    )
  }

  const nextPage = () => setPage(p => Math.min(p + 1, manga.pages))
  const prevPage = () => setPage(p => Math.max(p - 1, 1))

  const handlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
  })

  return (
    <div className="reader-container" {...handlers}>
      <div className="reader-header">
        <Link to="/">← 戻る</Link>
        <span>{manga.title} {page}/{manga.pages}</span>
      </div>
      <div className="reader-page">
        <img
          src={`/manga/${manga.id}/${page}.jpg`}
          alt={`page ${page}`}
          onError={(e) => {
            e.target.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='800'><rect width='100%' height='100%' fill='%23333'/><text x='50%' y='50%' fill='white' text-anchor='middle' dy='.3em'>${page}</text></svg>`
          }}
        />
      </div>
      <div className="reader-controls">
        <button onClick={prevPage} disabled={page === 1}>前へ</button>
        <button onClick={nextPage} disabled={page === manga.pages}>次へ</button>
      </div>
    </div>
  )
}

export default MangaReader
