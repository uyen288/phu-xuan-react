import { useState } from 'react'

import LuotXemDaiNoi from './features/landmarks/LuotXemDaiNoi'
import TrangMonAn from './features/food/TrangMonAn'
import TimMonAn from './features/food/TimMonAn'
import DanhSachDiaDanh from './features/landmarks/DanhSachDiaDanh'
import TimMonAnDebounce from './features/food/TimMonAnDebounce'

function App() {
  const [hienThiDaiNoi, setHienThiDaiNoi] = useState(true)

  return (
    <div>
      <h1>Buổi 6</h1>

      <hr />

      <section>
        <h2>TC1 + TC2: đồng hồ đếm, ẩn/hiện</h2>

        <button onClick={() => setHienThiDaiNoi(!hienThiDaiNoi)}>
          {hienThiDaiNoi ? 'Ẩn thẻ Đại Nội' : 'Hiện thẻ Đại Nội'}
        </button>

        {hienThiDaiNoi && <LuotXemDaiNoi />}
      </section>

      <hr />

      <section>
        <h2>TC3 + TC4: tab</h2>

        <TrangMonAn />
      </section>

      <hr />

      <section>
        <h2>TC5: tìm món ăn useRef</h2>

        <TimMonAn />
      </section>

      <hr />

      <section>
        <h2>TC6: danh sách địa danh useMemo</h2>

        <DanhSachDiaDanh />
      </section>

      <hr />

      <section>
        <h2>TC7: tìm món ăn useDebounce</h2>

        <TimMonAnDebounce />
      </section>
    </div>
  )
}

export default App
