import React, { memo } from 'react'

import { TypographyProps } from '../types'

import { styledBody } from '../styles'

const Body = (props: TypographyProps) => {
  return (
    <h1
      className={`${styledBody(props)} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </h1>
  )
}

export default memo(Body)
