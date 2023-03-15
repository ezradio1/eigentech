import useFetchData from 'hooks/useFetchData'
import { Article, News } from 'pages/types'
import { useHistory } from 'react-router-dom'

const useIndex = () => {
  const history = useHistory()
  const { data, loading, error } = useFetchData<News>('top-headlines', {
    country: 'us',
  })

  const handleClickNews = (article: Article) => {
    history.push({ pathname: 'news-detail', state: article })
  }

  return {
    data: { ...data, articles: data?.articles || [] },
    loading,
    error,
    handleClickNews,
  }
}

export default useIndex
