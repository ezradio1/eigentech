import { useState } from 'react'

const useIndex = () => {
  const [visible, setVisible] = useState(false)

  const handleAction = (action: (value?: string) => void) => {
    action()
    setVisible(false)
  }

  return { visible, setVisible, handleAction }
}

export default useIndex
