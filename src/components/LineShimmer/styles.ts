import { css } from '@emotion/css';

import type { LineShimmerProps } from './types';

export const shimmerCss = ({
  width,
  height,
  margin,
  borderRadius,
}: LineShimmerProps) => css`
  width: ${width || '100%'};
  height: ${height || '1rem'};
  margin: ${margin || '0'};
  border-radius: ${borderRadius || '4px'};
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-repeat: no-repeat;
  background-size: 800px 104px;
  display: inline-block;
  position: relative;

  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: placeholderShimmer;
  -webkit-animation-timing-function: linear;

  @-webkit-keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }

    100% {
      background-position: 468px 0;
    }
  }
`;
