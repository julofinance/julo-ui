import { css, CSSInterpolation } from '@emotion/css';
import { PR30, NT30, NT50 } from '@julofinance/color-token';
import type { CheckboxProps } from './types';

const defaultProps = ({ margin, padding }: CheckboxProps) =>
  ({
    margin,
    padding,
  } as CSSInterpolation);

const colorMap = (isDisabled = false): boolean => (isDisabled ? NT50 : PR30);

export const hiddenCheckbox = css`
  cursor: pointer;  
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0;
  opacity: 0;
`;

export const styledCheckboxWrapper = css`
  display: inline-flex;
  align-items: center;
  position: relative;
`;

export const styledCheckbox = (props: CheckboxProps) => css`
  appearance: none;
  width: ${props.size};
  height: ${props.size};
  border: 2px solid ${colorMap(props.disabled)};
  background: ${props.disabled ? NT30 : 'white'};
  display: flex;
  align-items: center;
  justify-content: center;
  ${defaultProps(props)}

  svg{
    display:none;
  }

  &.checked{
    background: ${colorMap(props.disabled)};
    svg{
      display:block;
    }
  }

  &.disabled{
    border: 2px solid ${colorMap(props.disabled)};
    background: ${colorMap(props.disabled)};
    pointer-events: none;
  }
`;

export const styledCheckboxGroup = (inline: boolean) => css`
  display: flex;
  padding: 5px;
  align-items: ${inline? 'center': 'start'};
  flex-direction: ${inline ? 'row': 'column'};
  gap:5px;
`;

