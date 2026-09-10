import React from 'react'

function TheDiaDanh({ diaDanh, onYeuThich }) {
  console.log('TheDiaDanh render:', diaDanh.ten)

  return (
    <div className="the-dia-danh">
      <h3>{diaDanh.ten}</h3>

      <p>Khu vực: {diaDanh.khuVuc}</p>

      <button onClick={() => onYeuThich(diaDanh.id)}>Yêu thích</button>
    </div>
  )
}

export default React.memo(TheDiaDanh)
