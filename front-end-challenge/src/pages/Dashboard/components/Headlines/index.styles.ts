import { css } from '@emotion/css'
import { NN0, NN100, NN300 } from 'constants/colors'

export const image = (imageUrl: string) => css`
  position: relative;
  background: url(${imageUrl}) no-repeat center center;
  background-size: cover;
  height: 450px;
  padding: 16px 24px;
  transition: box-shadow 0.2s ease-in-out;
  display: flex;
  align-items: flex-end;

  :hover {
    cursor: pointer;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }

  ::before {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 60%;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.7) 50%,
      rgba(0, 0, 0, 0.5) 70%,
      rgba(0, 0, 0, 0.2) 80%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`

export const title = css`
  color: ${NN0} !important;
  z-index: 0;
`

export const authorPublishDate = css`
  color: ${NN300};
  margin-top: 8px;
`

export const content = css`
  margin-top: 16px;
`

export const otherNews = css`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid ${NN100};
`

export const imageArticle = (imageUrl: string) => css`
  background: url(${imageUrl}) no-repeat center center;
  width: 318px;
  height: 318px;
`
