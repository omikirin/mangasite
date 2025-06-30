import { useState } from 'react'
import HomePage from './pages/HomePage'
import ReaderPage from './pages/ReaderPage'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedManga, setSelectedManga] = useState(null)

  const handleMangaSelect = (manga) => {
    setSelectedManga(manga)
    setCurrentPage('reader')
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    setSelectedManga(null)
  }

  return (
    <div className="app">
      {currentPage === 'home' && (
        <HomePage onMangaSelect={handleMangaSelect} />
      )}
      
      {currentPage === 'reader' && selectedManga && (
        <ReaderPage 
          manga={selectedManga}
          onBack={handleBackToHome}
        />
      )}
    </div>
  )
}

export default App
