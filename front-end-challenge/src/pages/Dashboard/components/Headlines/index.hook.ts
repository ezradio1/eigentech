import useFetchData from 'hooks/useFetchData'
import { Headline } from './index.types'
const useIndex = () => {
  const { data, loading, error } = useFetchData<Headline>('top-headlines', {
    country: 'us',
  })

  return { data, loading, error }
}

export default useIndex
