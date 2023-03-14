import { Option } from './../../types/state'
import { useCallback, useEffect, useState } from 'react'
import type { State } from '../../types/state'

const useFetchData = <T>(url: string, option?: Option): State<T> => {
  const [data, setData] = useState<T | null>(null)
  const [error, setError] = useState<Error | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchData = useCallback(
    async (isMounted = true) => {
      setLoading(true)
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}${url}?${new URLSearchParams({
            apiKey: process.env.REACT_APP_API_KEY || '',
            ...option,
          })}`,
        )
        if (!response.ok) throw new Error('Network response was not ok')
        const data = (await response.json()) as T
        if (isMounted) {
          setData(data)
        }
      } catch (error) {
        if (isMounted) setError(error as Error)
      }
      if (isMounted) setLoading(false)
    },
    [url],
  )

  useEffect(() => {
    let isMounted = true

    fetchData(isMounted)

    return () => {
      isMounted = false
    }
  }, [fetchData, url])

  return { data, error, loading, refetch: fetchData }
}

export default useFetchData
