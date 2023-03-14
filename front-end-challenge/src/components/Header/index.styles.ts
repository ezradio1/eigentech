import { css } from '@emotion/css'
import { NN0, NN200 } from 'constants/colors'

export const header = css`
  background-color: ${NN0};
  border-bottom: 1px solid ${NN200};
  padding-inline: 0;
  position: sticky;
  top: 0;
  zindex: 1;
  width: 100%;
`

export const brandName = css`
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0px !important;
  cursor: pointer;
`

export const username = css`
  width: fit-content;
  max-width: 100px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  span {
    text-transform: uppercase;
    font-weight: 700;
  }
`
