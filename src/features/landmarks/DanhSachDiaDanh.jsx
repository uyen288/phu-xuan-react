import { useState, useMemo, useCallback } from 'react'
import TheDiaDanh from './TheDiaDanh'
import danhSachDiaDanh from '../../data/dia-danh.json'

function DanhSachDiaDanh() {
  const [boLoc, setBoLoc] = useState('')
  const [yeuThich, setYeuThich] = useState([])

  const danhSachDaLoc = useMemo(() => {
    console.log('Đang lọc danh sách theo:', boLoc)

    return danhSachDiaDanh.filter((diaDanh) =>
      diaDanh.ten.toLowerCase().includes(boLoc.toLowerCase()),
    )
  }, [boLoc])

  const themYeuThich = useCallback((id) => {
    setYeuThich((danhSachCu) => {
      if (danhSachCu.includes(id)) {
        return danhSachCu.filter((item) => item !== id)
      }

      return [...danhSachCu, id]
    })
  }, [])

  return (
    <div>
      <h2>Danh sách địa danh Huế</h2>

      <input
        type="text"
        value={boLoc}
        onChange={(e) => setBoLoc(e.target.value)}
        placeholder="Tìm Đại Nội, Đông Ba, Tràng Tiền..."
      />

      <p>Đang yêu thích: {yeuThich.length} địa danh</p>

      {danhSachDaLoc.map((diaDanh) => (
        <TheDiaDanh
          key={diaDanh.id}
          diaDanh={diaDanh}
          onYeuThich={themYeuThich}
        />
      ))}
    </div>
  )
}

export default DanhSachDiaDanh
