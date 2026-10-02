import { useState } from 'react'
import type { DiTich, DiTichFilter } from './types'

const BO_LOC_MAC_DINH: DiTichFilter = {
  tuKhoa: '',
  loai: 'tat-ca',
  chiChuaThamQuan: false,
}

export function useDiTichList(dataGoc: DiTich[]) {
  const [danhSach, setDanhSach] = useState<DiTich[]>(dataGoc)
  const [boLoc, setBoLoc] = useState<DiTichFilter>(BO_LOC_MAC_DINH)

  const tuKhoaNormalized = boLoc.tuKhoa.trim().toLowerCase()

  const danhSachHienThi = danhSach.filter((d) => {
    const khopTuKhoa =
      tuKhoaNormalized === '' || d.ten.toLowerCase().includes(tuKhoaNormalized)

    const khopLoai = boLoc.loai === 'tat-ca' || d.loai === boLoc.loai

    const khopThamQuan = !boLoc.chiChuaThamQuan || d.daThamQuan === false

    return khopTuKhoa && khopLoai && khopThamQuan
  })

  const capNhatBoLoc = (patch: Partial<DiTichFilter>) => {
    setBoLoc((prev) => ({ ...prev, ...patch }))
  }

  const danhDauDaThamQuan = (id: string) => {
    setDanhSach((prev) =>
      prev.map((d) => (d.id === id ? { ...d, daThamQuan: !d.daThamQuan } : d)),
    )
  }

  const resetBoLoc = () => setBoLoc(BO_LOC_MAC_DINH)

  return {
    danhSachHienThi,
    boLoc,
    capNhatBoLoc,
    danhDauDaThamQuan,
    resetBoLoc,
  }
}
