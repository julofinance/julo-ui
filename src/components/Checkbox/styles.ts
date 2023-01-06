import { css, CSSInterpolation } from '@emotion/css';
import { PR20, PR30, NT30, NT50 } from '@julofinance/color-token';
import type { CheckboxProps } from './types';

const defaultProps = ({ margin, padding }: CheckboxProps) =>
  ({
    margin,
    padding,
  } as CSSInterpolation);

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
  background: ${props.disabled ? NT30 : 'white'};
  border: 2px solid ${NT50};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${defaultProps(props)}

  svg{
    display:none;
  }

  &.checked{
    border: 2px solid ${PR20};
    background: ${props.disabled ? NT30 : PR30};
    svg.white{
      display: ${props.disabled ? 'none' : 'block'};
    }
    svg.grey{
      display: ${props.disabled ? 'block' : 'none'};
    }
  }

  &.disabled{
    border: 2px solid ${props.disabled ? NT50 : PR30};
    pointer-events: none;
  }
`;

export const styledCheckboxGroup = (inline: boolean) => css`
  display: flex;
  align-items: ${inline? 'center': 'start'};
  flex-direction: ${inline ? 'row': 'column'};
  gap:5px;
`;

