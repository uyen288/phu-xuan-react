import { useForm } from '../../hooks/useForm'
const GIA_TRI_BAN_DAU = { hoTen: '', noiDung: '' }
function kiemChungGopY(d) {
  const loi = {}
  if (!d.hoTen.trim()) loi.hoTen = 'Vui lòng nhập họ tên.'
  if (d.noiDung.trim().length < 10) loi.noiDung = 'Góp ý cần ít nhất 10 ký tự.'
  return loi
}
export default function FormGopY() {
  const { duLieu, dangGui, xuLyThayDoi, xuLyRoiO, loiCuaO, xuLyGui, datLai } =
    useForm(GIA_TRI_BAN_DAU, kiemChungGopY)
  const gui = xuLyGui(async (gt) => {
    await new Promise((r) => setTimeout(r, 800))
    alert('Cảm ơn góp ý của ' + gt.hoTen)
    datLai()
  })
  return (
    <form onSubmit={gui} noValidate>
      <input
        name="hoTen"
        value={duLieu.hoTen}
        onChange={xuLyThayDoi}
        onBlur={xuLyRoiO}
      />
      {loiCuaO('hoTen') && <p role="alert">{loiCuaO('hoTen')}</p>}
      <textarea
        name="noiDung"
        value={duLieu.noiDung}
        onChange={xuLyThayDoi}
        onBlur={xuLyRoiO}
      />
      {loiCuaO('noiDung') && <p role="alert">{loiCuaO('noiDung')}</p>}
      <button type="submit" disabled={dangGui}>
        Gửi góp ý
      </button>
    </form>
  )
}
