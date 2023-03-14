import { UserData } from 'pages/types'
import type { Dispatch, ReactNode, SetStateAction } from 'react'

export interface UserProviderProps {
  children: ReactNode
}

export interface UserContextValue {
  loggedUser: UserData | null
  setLoggedUser: Dispatch<SetStateAction<UserData | null>>
}
