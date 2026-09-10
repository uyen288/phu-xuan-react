import { useState } from 'react'
import useDebounce from '../../hooks/useDebounce'

const danhSachMonAn = [
  {
    id: 1,
    ten: 'Bún bò Huế',
  },
  {
    id: 2,
    ten: 'Cơm hến',
  },
  {
    id: 3,
    ten: 'Bánh bèo',
  },
  {
    id: 4,
    ten: 'Nem lụi',
  },
]

function TimMonAnDebounce() {
  const [tuKhoa, setTuKhoa] = useState('')

  const tuKhoaDaTre = useDebounce(tuKhoa, 300)

  console.log('Đang lọc theo từ khóa:', tuKhoaDaTre)

  const danhSachKetQua = danhSachMonAn.filter((monAn) =>
    monAn.ten.toLowerCase().includes(tuKhoaDaTre.toLowerCase()),
  )

  return (
    <div>
      <h2>Tìm món ăn Huế</h2>

      <input
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Tìm bún bò, cơm hến..."
      />

      <ul>
        {danhSachKetQua.map((monAn) => (
          <li key={monAn.id}>{monAn.ten}</li>
        ))}
      </ul>
    </div>
  )
}

export default TimMonAnDebounce
