export type State<T> = {
  data: T | null
  error: Error | null
  loading: boolean
  refetch: () => void
}

export type Option = {
  [key: string]: string | number
}
