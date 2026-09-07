import { useState } from 'react'

function MenuItem({ name, price, description, isSpicy, onToggleFavourite }) {
  const [isFavorite, setIsFavorite] = useState(false)

  function handleToggleFavorite() {
    setIsFavorite((nextFavorite) => !nextFavorite)
    if (onToggleFavourite) {
      onToggleFavourite(!isFavorite)
    }
  }
  return (
    <div class="menu-item">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Giá: {price.toLocaleString('vi-VN')} VNĐ</p>
      <p className="item-badge">{isSpicy ? 'Món cay' : ''}</p>
      <button onClick={handleToggleFavorite}>
        {isFavorite ? '♥ Đã lưu' : '♡ Lưu món ăn'}
      </button>
    </div>
  )
}

export default MenuItem
