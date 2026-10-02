export type LoaiDiTich =
  'kinh-thanh' | 'lang-tam' | 'chua' | 'cong-trinh-cong-cong' | 'te-dan'

export interface DiTich {
  id: string
  ten: string
  loai: LoaiDiTich
  theKyXayDung: number
  daThamQuan: boolean
}

export interface DiTichFilter {
  tuKhoa: string
  loai: LoaiDiTich | 'tat-ca'
  chiChuaThamQuan: boolean
}
