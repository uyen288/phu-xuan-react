import { HuyHieu } from '../../components/HuyHieu'
import type { Tour } from '../../data/tours'

type TourGridProps = {
  tours: Tour[]
}

const loaiTour: Record<Tour['category'], string> = {
  'di-tich': 'Di tích',
  'am-thuc': 'Ẩm thực',
  'thien-nhien': 'Thiên nhiên',
  'lang-nghe': 'Làng nghề',
}

const mauTheoLoai: Record<Tour['category'], 'xanh' | 'cam' | 'tim' | 'do'> = {
  'di-tich': 'cam',
  'am-thuc': 'xanh',
  'thien-nhien': 'tim',
  'lang-nghe': 'do',
}

export function TourGrid({ tours }: TourGridProps) {
  return (
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '18px',
        marginTop: '20px',
      }}
    >
      {tours.map((tour) => (
        <article
          key={tour.id}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#fff',
            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)',
          }}
        >
          <div style={{ position: 'relative' }}>
            <img
              src={tour.image}
              alt={tour.name}
              style={{
                display: 'block',
                width: '100%',
                height: '180px',
                objectFit: 'cover',
              }}
            />
            {tour.hot ? (
              <div style={{ position: 'absolute', top: '12px', left: '12px' }}>
                <HuyHieu mau="do">Nổi bật</HuyHieu>
              </div>
            ) : null}
          </div>

          <div style={{ padding: '16px' }}>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
                marginBottom: '12px',
              }}
            >
              <HuyHieu mau={mauTheoLoai[tour.category]}>
                {loaiTour[tour.category]}
              </HuyHieu>
              {tour.duration >= 4 ? (
                <HuyHieu mau="xanh">Khuyến nghị</HuyHieu>
              ) : null}
            </div>

            <h3
              style={{
                margin: '0 0 8px',
                fontSize: '1.1rem',
                color: '#1f2937',
              }}
            >
              {tour.name}
            </h3>

            <p style={{ margin: '0 0 12px', color: '#4b5563' }}>
              Thời lượng: {tour.duration} giờ
            </p>

            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <strong style={{ color: '#0f172a', fontSize: '1.05rem' }}>
                {tour.price.toLocaleString()}đ
              </strong>
              <button
                type="button"
                style={{
                  border: 'none',
                  borderRadius: '10px',
                  background: '#2563eb',
                  color: '#fff',
                  padding: '8px 12px',
                  fontWeight: 600,
                  cursor: 'pointer',
                }}
              >
                Đặt tour
              </button>
            </div>
          </div>
        </article>
      ))}
    </section>
  )
}
