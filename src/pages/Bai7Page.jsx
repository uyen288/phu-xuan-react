import '../styles/Bai7.css'
import ThuSuKien from '../components/Bai7/ThuSuKien'
import DanhSachDiaDanh from '../components/Bai7/DanhSachDiaDanh'
import TheDiaDanhMoRong from '../components/Bai7/TheDiaDanhMoRong'
import KhamPhaDiaDanh from '../components/Bai7/KhamPhaDiaDanh'
import LuotThichMonAn from '../components/Bai7/LuotThichMonAn'
import TimMonAnHue from '../components/Bai7/TimMonAnHue'

export default function Bài7Page() {
  return (
    <main className="trang-Bài7">
      <h1>Bài 7 — Quản lý sự kiện trong React</h1>
      <ThuSuKien />
      <DanhSachDiaDanh />
      <KhamPhaDiaDanh />
      <LuotThichMonAn />
      <TimMonAnHue />
    </main>
  )
}
