import dayjs from 'dayjs'

const convertDate = (value: string | undefined) =>
  value ? dayjs(value).format('DD MMMM YYYY') : ''
export default convertDate
