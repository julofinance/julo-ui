import React, { memo } from 'react'

import { TypographyProps } from '../types'

import { styledCaption } from '../styles'

const Caption = (props: TypographyProps) => {
  return (
    <p
      className={`${styledCaption(props)} ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </p>
  )
}

export default memo(Caption)
