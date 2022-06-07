import { css } from '@emotion/css';
import { NT20, NT30 } from '@julofinance/color-token';

import type { LineShimmerProps } from './types';

export const shimmerCss = ({
  width,
  height,
  margin,
  borderRadius,
}: LineShimmerProps) => css`
  width: ${width};
  height: ${height};
  margin: ${margin};
  border-radius: ${borderRadius};
  background: ${NT20};
  background-image: linear-gradient(
    to right,
    ${NT20} 0%,
    ${NT30} 20%,
    ${NT20} 40%,
    ${NT20} 100%
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
