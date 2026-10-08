import type { ChangeEvent } from 'react'
type ThanhTimKiemProps = {
  tuKhoa: string
  chiMienPhi: boolean
  onDoiTuKhoa: (tuKhoaMoi: string) => void
  onDoiChiMienPhi: (giaTriMoi: boolean) => void
}
export default function ThanhTimKiem({
  tuKhoa,
  chiMienPhi,
  onDoiTuKhoa,
  onDoiChiMienPhi,
}: ThanhTimKiemProps) {
  function xuLyNhapTuKhoa(e: ChangeEvent<HTMLInputElement>) {
    onDoiTuKhoa(e.target.value)
  }
  return (
    <div role="search">
      <input
        type="text"
        placeholder="Tìm địa danh..."
        value={tuKhoa}
        onChange={xuLyNhapTuKhoa}
      />
      <label>
        <input
          type="checkbox"
          checked={chiMienPhi}
          onChange={(e) => onDoiChiMienPhi(e.target.checked)}
        />{' '}
        Chỉ hiện địa danh miễn phí vé
      </label>
    </div>
  )
}
