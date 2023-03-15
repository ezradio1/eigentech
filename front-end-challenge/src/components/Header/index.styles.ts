import { css } from '@emotion/css'
import { NN0, NN200 } from 'constants/colors'

export const header = css`
  background-color: ${NN0};
  border-bottom: 1px solid ${NN200};
  padding-inline: 0;
  position: sticky;
  top: 0;
  z-index: 1;
  width: 100%;
`

export const brandName = css`
  cursor: pointer;
`

export const username = css`
  text-transform: uppercase;
  font-weight: 700;
`
