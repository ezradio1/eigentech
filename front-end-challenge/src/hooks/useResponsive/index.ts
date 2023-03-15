import { useEffect, useState } from 'react'

const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth
      setIsMobile(width <= 768)
    }

    handleResize() // call once to initialize
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { isMobile }
}

export default useResponsive
