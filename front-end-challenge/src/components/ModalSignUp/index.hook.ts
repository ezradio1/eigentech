import { message } from 'antd'
import { USER_DATABASE_LS_KEY } from 'constants/key'
import { useState } from 'react'
import { ModalSignUpProps, SignUpData } from './index.types'
const useIndex = ({ onCloseModal }: ModalSignUpProps) => {
  const [loading, setLoading] = useState(false)

  const handleSignUp = (value: SignUpData) => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      onCloseModal()
      localStorage.getItem(USER_DATABASE_LS_KEY)
      const getUsersLS = localStorage.getItem(USER_DATABASE_LS_KEY) || ''
      const parsedUsersData = getUsersLS ? JSON.parse(getUsersLS) : []

      const newDataa = [...parsedUsersData, value]

      // Note:
      // Strongly not recommended to store user data (passwords) in local storage and without encryption
      // just for demo only

      localStorage.setItem(USER_DATABASE_LS_KEY, JSON.stringify(newDataa))
      message.success('Account registration was successful, Please login')
    }, 2200)
  }
  return { loading, handleSignUp }
}

export default useIndex
