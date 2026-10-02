import type { DiTich } from './types'
type DiTichCardProps = {
  diTich: DiTich
  onToggleThamQuan: (id: string) => void
}
export function DiTichCard({ diTich, onToggleThamQuan }: DiTichCardProps) {
  return (
    <article
      className={`ditich-card ${diTich.daThamQuan ? 'ditich-card--visited' : ''}`}
    >
      <h3>{diTich.ten}</h3>
      <p className="ditich-card__meta">
        {diTich.loai.replace(/-/g, ' ')} — thế kỷ {diTich.theKy}
      </p>
      <p className="ditich-card__desc">{diTich.moTa}</p>
      <button type="button" onClick={() => onToggleThamQuan(diTich.id)}>
        {diTich.daThamQuan ? 'Bỏ đánh dấu' : 'Đã tham quan'}
      </button>
    </article>
  )
}
