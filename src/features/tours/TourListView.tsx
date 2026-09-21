import type { Tour } from '../../data/tours'
import { PriceFilter } from './PriceFilter'
import { TourGrid } from './TourGrid'
type TourListViewProps = {
  filteredTours: Tour[]
  totalCount: number
  minPrice: number
  maxPrice: number
  onMinChange: (value: number) => void
  onMaxChange: (value: number) => void
}
export function TourListView({
  filteredTours,
  totalCount,
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}: TourListViewProps) {
  return (
    <main className="tour-list-page">
      <h1>Khám phá Huế qua 6 hành trình</h1>
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        onMinChange={onMinChange}
        onMaxChange={onMaxChange}
      />
      <p className="filter-summary">
        Đang hiển thị {filteredTours.length} / {totalCount} tour
      </p>
      {filteredTours.length === 0 ? (
        <p className="empty-state">
          Không có tour nào phù hợp với khoảng giá này. Hãy nới rộng thanh
          trượt.
        </p>
      ) : (
        <TourGrid tours={filteredTours} />
      )}
    </main>
  )
}
