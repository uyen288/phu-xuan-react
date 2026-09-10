import { useState, useEffect } from 'react'

function useDebounce(giaTri, doTre) {
  const [giaTriDaTre, setGiaTriDaTre] = useState(giaTri)

  useEffect(() => {
    const id = setTimeout(() => {
      setGiaTriDaTre(giaTri)
    }, doTre)

    return () => {
      clearTimeout(id)
    }
  }, [giaTri, doTre])

  return giaTriDaTre
}

export default useDebounce
