export interface ModalLoginProps {
  title: string
  show: boolean
  onCloseModal: () => void
}

export interface LoginData {
  username: string
  password: string
}
