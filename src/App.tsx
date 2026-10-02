import './App.css'
import { TourListContainer } from './features/tours/TourListContainer'
import { DiTichListView } from './features/ditich/DiTichListView'
import { useState } from 'react'

type Trang = 'tour' | 'ditich'

function App() {
  const [trang, setTrang] = useState<Trang>('tour')
  return (
    <div>
      <nav className="top-nav">
        <button onClick={() => setTrang('tour')} disabled={trang === 'tour'}>
          Tour
        </button>
        <button
          onClick={() => setTrang('ditich')}
          disabled={trang === 'ditich'}
        >
          Di tích
        </button>
      </nav>
      {trang === 'tour' ? <TourListContainer /> : <DiTichListView />}
    </div>
  )
}

export default App
