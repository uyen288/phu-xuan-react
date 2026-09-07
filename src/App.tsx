import './App.css'

import { useState } from 'react'
import MenuList from './components/MenuList'
import { menuItems } from './data/menu'

function App() {
  const [tong, setTong] = useState(0)

  const handleToggleFavourite = (isFavourite: boolean) => {
    setTong((prev) => (isFavourite ? prev + 1 : prev - 1))
  }

  return (
    <div className="app">
      <h1>Khám phá ẩm thực Huế</h1>

      <p>Tổng số món đang được yêu thích: {tong}/5</p>

      <MenuList items={menuItems} onToggleFavourite={handleToggleFavourite} />
    </div>
  )
}

export default App
