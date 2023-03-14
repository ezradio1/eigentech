import useFetchData from 'hooks/useFetchData'
import { useCallback, useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const useIndex = () => {
  const history = useHistory()
  const { search } = useLocation()
  const [isSearch, setIsSearch] = useState(false)
  const queryParams = new URLSearchParams(search)
  const searchParam = queryParams.get('search')

  return { isSearch }
}

export default useIndex
