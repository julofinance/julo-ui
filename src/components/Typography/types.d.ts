import { ReactElement } from 'react'

export type TypographyProps = {
  children: ReactElement | string
  tag?: 1 | 2 | 3 | 4 | 5 | 6
  body?: 1 | 2
  caption?: 1 | 2
  margin?: string
  color?: string
  bold?: boolean | false
  onClick?: () => void
  className?: string
}
