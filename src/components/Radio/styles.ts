import { css, CSSInterpolation } from '@emotion/css';
import { PR30, NT30, NT50 } from '@julofinance/color-token';

import type { RadioProps } from './types';

// Props that doesn't have default value can be listed here
const defaultProps = ({ margin, padding }: RadioProps) =>
  ({
    margin,
    padding,
  } as CSSInterpolation);

const colorMap = (isDisabled = false): boolean => (isDisabled ? NT50 : PR30);

export const styledRadio = (props: RadioProps) => css`
  appearance: none;
  width: ${props.size};
  height: ${props.size};
  border: 2px solid ${colorMap(props.disabled)};
  background: ${props.disabled ? NT30 : 'white'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  ${defaultProps(props)}

  &:checked::before {
    transform: scale(1);
  }

  ::before {
    content: '';
    width: calc(${props.size} * 0.45);
    height: calc(${props.size} * 0.45);
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${colorMap(props.disabled)};
    background-color: ${colorMap(props.disabled)};
  }
`;
