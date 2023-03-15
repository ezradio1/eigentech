import { css } from '@emotion/css'
import { NN200 } from 'constants/colors'

export const wrapper = css`
  padding: 2px;
  border-bottom: 1px solid ${NN200};
  width: 98% !important;

  .ant-image {
    display: flex;
    justify-content: center;
  }
`
