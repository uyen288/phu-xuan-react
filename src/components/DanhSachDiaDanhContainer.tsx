import useDiaDanh from '../hooks/useDiaDanh.ts'
import DanhSachDiaDanh from './DanhSachDiaDanh.tsx'
import HopThongBao from './HopThongBao.tsx'
type DanhSachDiaDanhContainerProps = {
  dsYeuThich: number[]
  onDoiYeuThich: (id: number) => void
}
export default function DanhSachDiaDanhContainer({
  dsYeuThich,
  onDoiYeuThich,
}: DanhSachDiaDanhContainerProps) {
  const ketQua = useDiaDanh()
  switch (ketQua.trangThai) {
    case 'dang-tai':
      return <p>Đang tải danh sách địa danh...</p>
    case 'loi':
      return (
        <HopThongBao mauNen="#9B2C2C">
          Không tải được dữ liệu: {ketQua.loi}
        </HopThongBao>
      )
    case 'thanh-cong':
      return (
        <DanhSachDiaDanh
          dsDiaDanh={ketQua.duLieu}
          dsYeuThich={dsYeuThich}
          onDoiYeuThich={onDoiYeuThich}
        />
      )
    default: {
      const khongTheXayRa: never = ketQua
      return khongTheXayRa
    }
  }
}
