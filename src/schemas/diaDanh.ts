import { z } from 'zod'
export const CAC_LOAI = ['Di tích', 'Cảnh quan', 'Ẩm thực'] as const
export const DiaDanhSchema = z.object({
  id: z.number().int().positive(),
  ten: z.string().trim().min(1, { error: 'Tên địa danh không được để trống' }),
  loai: z.enum(CAC_LOAI, {
    error: 'Loại phải là Di tích, Cảnh quan hoặc Ẩm thực',
  }),
  giaVe: z.number().nonnegative({ error: 'Giá vé không được âm' }),
  anh: z.url({ error: 'Ảnh phải là một đường dẫn URL' }),
  moTa: z.string(),
})
export const DsDiaDanhSchema = z.array(DiaDanhSchema)
export type DiaDanh = z.infer<typeof DiaDanhSchema>
export type LoaiDiaDanh = (typeof CAC_LOAI)[number]
