import { css } from '@emotion/css'
import { NN300 } from 'constants/colors'

export const articleTitle = css`
  font-weight: 600;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`

export const articleContent = css`
  color: ${NN300};
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 8px;
`

export const articleInfo = css`
  font-size: 10px;
  color: ${NN300};
  font-weight: 600;
`
export const articleCard = css`
  width: 100%;
  height: 400px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
  :hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  }
`
