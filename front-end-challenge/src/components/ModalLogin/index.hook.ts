import { USER_DATABASE_LS_KEY } from './../../constants/key'
import { LoginData, ModalLoginProps } from './index.types'
import { useState } from 'react'
import { message } from 'antd'
import { useUserContext } from 'context/UserContext'
import { USER_LS_KEY } from 'constants/key'
import { UserData } from 'pages/types'

const useIndex = ({ onCloseModal }: ModalLoginProps) => {
  const [loading, setLoading] = useState(false)
  const { setLoggedUser } = useUserContext()

  const handleLogin = (value: LoginData) => {
    setLoading(true)
    const getUsersLS = localStorage.getItem(USER_DATABASE_LS_KEY) || ''
    const parsedUsersData = getUsersLS ? JSON.parse(getUsersLS) : []
    const findUserIndex = parsedUsersData.findIndex(
      (user: UserData) =>
        user.username === value.username && user.password === value.password,
    )
    console.log(findUserIndex, 'findUserIndex')
    setTimeout(() => {
      setLoading(false)
      if (findUserIndex === -1) {
        message.error('You are not registered')
        return
      }
      onCloseModal()
      const newData = {
        ...value,
        name: parsedUsersData[findUserIndex].fullname,
      }
      localStorage.setItem(USER_LS_KEY, JSON.stringify(newData))
      setLoggedUser(newData)
      message.success('Successfully Logged In')
    }, 1500)
  }
  return { loading, handleLogin }
}

export default useIndex
