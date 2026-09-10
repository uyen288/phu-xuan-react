import { useState, useEffect } from 'react'

function LuotXemDaiNoi() {
  const [luotXem, setLuotXem] = useState(120)

  useEffect(() => {
    console.log('Da gan component - bat dau dem luot xem')
    const idBoDem = setInterval(() => {
      setLuotXem((soCu) => soCu + 1)
    }, 1000)

    return () => {
      console.log('Don dep: da huy bo dem luot xem')
      clearInterval(idBoDem)
    }
  }, [])

  return (
    <div className="the-luot-xem">
      <h3>Dai Noi Hue</h3>
      <p>Dang xem: {luotXem} luot</p>
    </div>
  )
}

export default LuotXemDaiNoi
