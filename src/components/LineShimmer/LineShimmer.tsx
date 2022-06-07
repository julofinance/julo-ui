import React, { memo } from 'react';

import { shimmerCss } from './styles';
import type { LineShimmerProps } from './types';

const LineShimmer = (props: LineShimmerProps) => {
  return <span className={shimmerCss(props)} />;
};

LineShimmer.defaultProps = {
  width: '100%',
  height: '1rem',
  margin: 0,
  borderRadius: '4px',
};

export default memo(LineShimmer);
