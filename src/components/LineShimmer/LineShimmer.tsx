import React, { memo } from 'react'

import { shimmerCss } from './styles'
import type { LineShimmerProps } from './types'

const LineShimmer = (props: LineShimmerProps) => {
  return <span className={shimmerCss(props)} />
}

export default memo(LineShimmer)
