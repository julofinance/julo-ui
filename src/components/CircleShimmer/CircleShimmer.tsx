import React, { memo } from 'react';

import { shimmerCss } from './styles';
import type { CircleShimmerProps } from './types';

const CircleShimmer = (props: CircleShimmerProps) => {
  return <span className={shimmerCss(props)} />;
};

CircleShimmer.defaultProps = {
  size: '55px',
  margin: 0,
};

export default memo(CircleShimmer);
