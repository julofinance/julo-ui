import React, { memo } from 'react';

import { shimmerCss } from './styles';
import type { CircleShimmerProps } from './types';

const CircleShimmer = (props: CircleShimmerProps) => {
  return <span className={shimmerCss(props)} />;
};

export default memo(CircleShimmer);
