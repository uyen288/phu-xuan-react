import { useRef, useEffect, useState } from 'react'

function TimMonAn() {
  const oTimKiemRef = useRef(null)
  const [tuKhoa, setTuKhoa] = useState('')

  const soLanRenderRef = useRef(0)
  soLanRenderRef.current = soLanRenderRef.current + 1
  console.log('TimMonAn đã render:', soLanRenderRef.current, 'lần')

  useEffect(() => {
    oTimKiemRef.current.focus()
  }, [])

  return (
    <div>
      <input
        ref={oTimKiemRef}
        type="text"
        value={tuKhoa}
        onChange={(e) => setTuKhoa(e.target.value)}
        placeholder="Tim bun bo, com hen, banh beo..."
      />
      <p>Da render {soLanRenderRef.current} lan</p>
    </div>
  )
}

export default TimMonAn
