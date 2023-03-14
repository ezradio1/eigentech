export interface ModalSignUpProps {
  title: string
  show: boolean
  onCloseModal: () => void
}

export interface SignUpData {
  name: string
  username: string
  password: string
}
