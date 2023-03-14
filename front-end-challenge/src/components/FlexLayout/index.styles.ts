import { css } from '@emotion/css'

export const wrapper = (
  direction: string,
  justify: string,
  align: string,
  gap: string,
  width: string,
  height: string,
  padding: string,
  wrap: string,
) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: ${align};
  justify-content: ${justify};
  width: ${width};
  height: ${height};
  gap: ${gap};
  padding: ${padding};
  flex-wrap: ${wrap};
`
