import { css } from '@emotion/css'
import { NT100 } from '@julofinance/color-token'
import { TypographyProps } from './types'

const commonStyles = (props: TypographyProps) => `
    margin: ${props.margin || 0};
    color: ${props.color || NT100};
    font-weight: ${props.bold ? 700 : 400};
`

const headingSizeMap = (tag: number) => {
  let styles
  switch (tag) {
    case 1:
      styles = `font-size: 2.75rem;
            line-height: 4rem;`
      break
    case 2:
      styles = `font-size: 2rem;
            line-height: 2.5rem;`
      break
  }

  return styles
}

const bodySizeMap = (body: number) => {
  let styles
  switch (body) {
    case 1:
      styles = `font-size: 1.625rem;
            line-height: 2.25rem;`
      break
    case 2:
      styles = `font-size: 1.5rem;
            line-height: 2rem;`
      break
  }

  return styles
}

const captionSizeMap = (body: number) => {
  let styles
  switch (body) {
    case 1:
      styles = `font-size: 1.375rem;
            line-height: 2rem;`
      break

    case 2:
      styles = `font-size: 1.25rem;
            line-height: 1.5rem;`
      break
  }

  return styles
}

export const styledHeading = (props: TypographyProps) => css`
  ${commonStyles(props)}
  ${headingSizeMap(props.tag || 1)}
`

export const styledBody = (props: TypographyProps) => css`
  ${commonStyles(props)}
  ${bodySizeMap(props.body || 1)}
`

export const styledCaption = (props: TypographyProps) => css`
  ${commonStyles(props)}
  ${captionSizeMap(props.caption || 1)}
`
