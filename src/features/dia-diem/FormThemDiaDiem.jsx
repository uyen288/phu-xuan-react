export default function FormThemDiaDiem({
  duLieu,
  xuLyThayDoi,
  xuLyRoiO,
  loiCuaO,
  xuLyGui,
  dangGui,
}) {
  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 1200))
    alert('Đã thêm: ' + gt.ten)
  })
  return (
    <form onSubmit={gui} noValidate>
      <input
        name="ten"
        value={duLieu.ten}
        onChange={xuLyThayDoi}
        onBlur={xuLyRoiO}
      />
      {loiCuaO('ten') && <p role="alert">{loiCuaO('ten')}</p>}

      <button type="submit" disabled={dangGui}>
        Thêm địa điểm
      </button>
    </form>
  )
}
