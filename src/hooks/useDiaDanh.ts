import useFetch from './useFetch.ts'
import { DsDiaDanhSchema } from '../schemas/diaDanh.ts'
import type { DiaDanh } from '../types/diaDanh.ts'
function phanTichDsDiaDanh(duLieuTho: unknown): DiaDanh[] {
  const kq = DsDiaDanhSchema.safeParse(duLieuTho)
  if (!kq.success) {
    const chiTiet = kq.error.issues
      .map((van) => `[${van.path.join('.')}] ${van.message}`)
      .join('; ')
    throw new Error('Dữ liệu địa danh không hợp lệ: ' + chiTiet)
  }
  return kq.data
}
export default function useDiaDanh(duongDan = '/du-lieu/dia-danh.json') {
  return useFetch(duongDan, phanTichDsDiaDanh)
}
