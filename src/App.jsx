import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MangaList from './pages/MangaList.jsx'
import MangaReader from './pages/MangaReader.jsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MangaList />} />
        <Route path="/reader/:id" element={<MangaReader />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
