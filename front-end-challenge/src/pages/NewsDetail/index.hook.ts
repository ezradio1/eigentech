import { Article } from 'pages/types'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const useIndex = () => {
  const { state } = useLocation<Article>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 500)
  }, [])

  return { data: state || [], error: !state, loading }
}

export default useIndex
