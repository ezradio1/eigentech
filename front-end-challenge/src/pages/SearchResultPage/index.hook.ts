import useFetchData from 'hooks/useFetchData'
import { useHistory, useLocation } from 'react-router-dom'
import { Article, News } from 'pages/types'

const useIndex = () => {
  const history = useHistory()
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)
  const searchKey = queryParams.get('search')

  const { data, loading, error } = useFetchData<News>('everything', {
    q: searchKey || '',
  })

  const handleClickNews = (article: Article) => {
    history.push({ pathname: 'news-detail', state: article })
  }

  return {
    data,
    loading,
    error,
    searchKey,
    handleClickNews,
  }
}

export default useIndex
