export default function XemTruocTheDiaDiem({ duLieu }) {
  return (
    <aside className="the-xem-truoc">
      <h3>{duLieu.ten || 'Tên địa điểm sẽ hiện ở đây'}</h3>
      <p>{duLieu.moTa || 'Mô tả ngắn sẽ hiện ở đây...'}</p>
      <p>
        Giá vé:{' '}
        {duLieu.giaVe
          ? Number(duLieu.giaVe).toLocaleString('vi-VN') + ' đ'
          : 'Chưa nhập'}
      </p>
      <p>Phường: {duLieu.phuong || 'Chưa chọn'}</p>
    </aside>
  )
}
