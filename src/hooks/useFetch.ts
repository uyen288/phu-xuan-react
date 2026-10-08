import { useEffect, useState } from 'react'
export type TrangThaiTai<T> =
  | { trangThai: 'dang-tai' }
  | { trangThai: 'loi'; loi: string }
  | { trangThai: 'thanh-cong'; duLieu: T }
export default function useFetch<T>(
  duongDan: string,
  phanTich: (duLieuTho: unknown) => T,
): TrangThaiTai<T> {
  const [ketQua, setKetQua] = useState<TrangThaiTai<T>>({
    trangThai: 'dang-tai',
  })
  useEffect(() => {
    let daHuy = false
    async function taiDuLieu() {
      setKetQua({ trangThai: 'dang-tai' })
      try {
        const phanHoi = await fetch(duongDan)
        if (!phanHoi.ok) throw new Error('Máy chủ trả về mã ' + phanHoi.status)
        const duLieuTho: unknown = await phanHoi.json()
        const duLieu = phanTich(duLieuTho)
        if (!daHuy) setKetQua({ trangThai: 'thanh-cong', duLieu })
      } catch (e) {
        const thongBao = e instanceof Error ? e.message : 'Lỗi không xác định'
        if (!daHuy) setKetQua({ trangThai: 'loi', loi: thongBao })
      }
    }
    taiDuLieu()
    return () => {
      daHuy = true
    }
  }, [duongDan, phanTich])
  return ketQua
}
