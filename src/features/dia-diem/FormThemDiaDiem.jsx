import { useState } from 'react'

const DS_TIEN_ICH = [
  { ma: 'bai-xe', ten: 'Bãi đỗ xe' },
  { ma: 'huong-dan', ten: 'Có hướng dẫn viên' },
  { ma: 've-online', ten: 'Bán vé trực tuyến' },
  { ma: 'khu-ve-sinh', ten: 'Khu vệ sinh công cộng' },
]

export default function FormThemDiaDiem({
  duLieu,
  xuLyThayDoi,
  xuLyRoiO,
  loiCuaO,
  xuLyGui,
  dangGui,
}) {
  const [tienIch, setTienIch] = useState([])

  function xuLyTich(e) {
    const { value, checked } = e.target

    setTienIch((truoc) =>
      checked ? [...truoc, value] : truoc.filter((ma) => ma !== value),
    )
  }

  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 1200))
    alert('Đã thêm: ' + gt.ten)
  })

  return (
    <form onSubmit={gui} noValidate>
      <div className="truong">
        <label htmlFor="ten">Tên địa điểm</label>
        <input
          id="ten"
          name="ten"
          type="text"
          value={duLieu.ten}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
        />
        {loiCuaO('ten') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('ten')}
          </p>
        )}
      </div>

      <div className="truong">
        <label htmlFor="moTa">Mô tả ngắn</label>
        <textarea
          id="moTa"
          name="moTa"
          rows={4}
          value={duLieu.moTa}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
        />
        {loiCuaO('moTa') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('moTa')}
          </p>
        )}
      </div>

      <div className="truong">
        <label htmlFor="giaVe">Giá vé (VNĐ)</label>
        <input
          id="giaVe"
          name="giaVe"
          type="number"
          value={duLieu.giaVe}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
          placeholder="0"
        />
        {loiCuaO('giaVe') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('giaVe')}
          </p>
        )}
      </div>

      <div className="truong">
        <label htmlFor="phuong">Phường / xã</label>
        <select
          id="phuong"
          name="phuong"
          value={duLieu.phuong}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
        >
          <option value="">-- Chọn phường --</option>
          <option value="phu-hau">Phú Hậu</option>
          <option value="huong-long">Hương Long</option>
          <option value="thuy-bieu">Thuỷ Biều</option>
          <option value="vy-da">Vỹ Dạ</option>
        </select>

        {loiCuaO('phuong') && (
          <p role="alert" className="thong-bao-loi">
            {loiCuaO('phuong')}
          </p>
        )}
      </div>

      <fieldset>
        <legend>Loại hình</legend>

        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="di-tich"
            checked={duLieu.loaiHinh === 'di-tich'}
            onChange={xuLyThayDoi}
          />
          Di tích lịch sử
        </label>

        <label>
          <input
            name="loaiHinh"
            type="radio"
            value="am-thuc"
            checked={duLieu.loaiHinh === 'am-thuc'}
            onChange={xuLyThayDoi}
          />
          Điểm ẩm thực
        </label>
      </fieldset>

      <fieldset>
        <legend>Tiện ích tại điểm đến</legend>

        {DS_TIEN_ICH.map((ti) => (
          <label key={ti.ma}>
            <input
              type="checkbox"
              value={ti.ma}
              checked={tienIch.includes(ti.ma)}
              onChange={xuLyTich}
            />
            {ti.ten}
          </label>
        ))}
      </fieldset>

      <label>
        <input
          name="dongY"
          type="checkbox"
          checked={duLieu.dongY}
          onChange={xuLyThayDoi}
          onBlur={xuLyRoiO}
        />
        Tôi xác nhận thông tin địa điểm là chính xác
      </label>

      {loiCuaO('dongY') && (
        <p role="alert" className="thong-bao-loi">
          {loiCuaO('dongY')}
        </p>
      )}

      <button type="submit" disabled={dangGui}>
        {dangGui ? 'Đang lưu...' : 'Thêm địa điểm'}
      </button>

      <pre>{JSON.stringify({ ...duLieu, tienIch }, null, 2)}</pre>
    </form>
  )
}
