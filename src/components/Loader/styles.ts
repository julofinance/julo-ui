import { css } from '@emotion/css';

import type { LoaderProps } from './types';
import LoaderDark from './assets/loader-dark.svg';
import LoaderLight from './assets/loader-light.svg';

const themeMap = (props: LoaderProps) => {
  if (props.dark) return `background: url(${LoaderDark});`
  
  return `background: url(${LoaderLight});`
};

export const styledLoader = (props: LoaderProps) => css`
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  };

  ${themeMap(props)}
  width: ${props.size};
  height: ${props.size};
  display: inline-block;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  animation: rotate 0.5s linear infinite;

  svg {
    fill: #ed6866;
  }
`;
