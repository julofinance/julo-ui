import React, { memo } from 'react'

import { TypographyProps } from '../types'

import { styledHeading } from '../styles'

const Heading = (props: TypographyProps) => {
  switch (props.tag) {
    case 1:
      return (
        <h1
          className={`${styledHeading(props)} ${props.className}`}
          onClick={props.onClick}
        >
          {props.children}
        </h1>
      )

    case 2:
      return (
        <h2
          className={`${styledHeading(props)} ${props.className}`}
          onClick={props.onClick}
        >
          {props.children}
        </h2>
      )
  }

  // fallback to medium size with no styling
  return <h3>{props.children}</h3>
}

export default memo(Heading)
