import { message } from 'antd'
import { USER_LS_KEY } from 'constants/key'
import { useUserContext } from 'context/UserContext'
import { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

const useIndex = () => {
  const history = useHistory()
  const { search } = useLocation()
  const queryParams = new URLSearchParams(search)

  const [modal, setModal] = useState('')
  const [loading, setLoading] = useState(false)
  const { setLoggedUser } = useUserContext()

  const handleClickLogo = () => {
    history.push('/')
  }

  const handleSearch = (value: string) => {
    queryParams.set('search', value)
    history.push({ pathname: 'search-news', search: queryParams.toString() })
  }

  const handleLogout = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      localStorage.removeItem(USER_LS_KEY)
      setLoggedUser(null)
      message.success('Logout successful')
    }, 1000)
  }
  return {
    handleSearch,
    handleLogout,
    modal,
    setModal,
    loading,
    handleClickLogo,
  }
}

export default useIndex
