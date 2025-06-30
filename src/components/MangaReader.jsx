import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import './MangaReader.css'

function MangaReader({ mangaId, totalPages = 8 }) {
  const [currentPage, setCurrentPage] = useState(1)
  
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  
  const handlers = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => prevPage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  })

  return (
    <div className="manga-reader" {...handlers}>
      <div className="page-container">
        <img 
          src={`/manga/${mangaId}/${currentPage}.jpg`} 
          alt={`Page ${currentPage}`}
          className="manga-page"
          onError={(e) => {
            e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="600"><rect width="100%" height="100%" fill="%23333"/><text x="50%" y="50%" fill="white" text-anchor="middle" dy=".3em">Page ${currentPage}</text></svg>`
          }}
        />
      </div>
      
      <div className="navigation-controls">
        <button 
          className="nav-btn prev-btn" 
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          ← 前
        </button>
        
        <span className="page-info">
          {currentPage} / {totalPages}
        </span>
        
        <button 
          className="nav-btn next-btn" 
          onClick={nextPage}
          disabled={currentPage === totalPages}
        >
          次 →
        </button>
      </div>
    </div>
  )
}

export default MangaReader