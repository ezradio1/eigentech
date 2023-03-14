import type { ReactNode } from 'react'

export interface FlexLayoutProps {
  children: ReactNode
  justify?: string
  align?: string
  gap?: string
  width?: string
  height?: string
  direction?: string
  padding?: string
  className?: string
  wrap?: string
  onClick?: () => void
}
