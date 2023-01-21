import { css, CSSInterpolation } from '@emotion/css';
import { PR10, PR30, PR40, PR50, NT10, NT30, NT40, NT50, NT60 } from '@julofinance/color-token';

import type { ButtonProps } from './types';

// Props that doesn't have default value can be listed here
const defaultProps = ({ margin, padding, width }: ButtonProps) =>
  ({
    margin,
    padding,
    width
  } as CSSInterpolation);

const colorMap = ({ color, disabled, inverted }: ButtonProps) => {
  // fallback to primary type
  let textColor = NT10;
  let background = PR30;
  let borderColor = PR30;
  let hoverStyles = `
    background: ${PR40};
    border-color: ${PR40};
  `;
  let selectedStyles = `
    background: ${PR50};
    border-color: ${PR50};
  `

  // primary disabled
  if (disabled) {
    background = borderColor = NT30;
    textColor = NT60;
    hoverStyles = selectedStyles = '';
  }

  if (inverted) {
    background = borderColor = NT10;
    textColor = PR30;
    hoverStyles = `
      color: ${PR40};
    `;
    selectedStyles = `
      color: ${PR50};
    `;
  }

  if (color == 'secondary') {
    textColor = borderColor = PR30;
    background = NT10;
    hoverStyles = `
      background: ${PR10};
    `;
    selectedStyles = `
      color: ${PR50};
      border-color: ${PR50};
    `;

    if (disabled) {
      background = NT10;
      textColor = NT50;
      borderColor = NT40;
      hoverStyles = selectedStyles = '';
    }

    if (inverted) {
      background = borderColor = PR30;
      textColor = NT10;
      hoverStyles = `
        color: ${NT10};
        background: ${PR40};
        border-color: ${PR40};
      `;
      selectedStyles = `
        color: ${NT10};
        background: ${PR50};
        border-color: ${PR50};
      `;
    }
  } else if (color == 'tertiary') {
    textColor = PR30;
    background = 'transparent';
    borderColor = 'transparent';
    hoverStyles = `
      background: ${PR10};
      border-color: ${PR10};
    `;
    selectedStyles = `
      color: ${PR50};
      border-color: ${PR10};
    `;

    if (disabled) {
      textColor = NT50;
      hoverStyles = selectedStyles = '';
    }

    if (inverted) {
      background = borderColor = 'transparent';
      textColor = PR10;
      hoverStyles = `
        color: ${PR40};
        background: ${PR10};
        border-color: ${PR10};
      `;
      selectedStyles = `
        color: ${PR50};
        background: ${PR10};
        border-color: ${PR10};
      `;
    }
  }

  return `
    font-weight: 700;
    color: ${textColor};
    background: ${background};
    border: 1px solid ${borderColor};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};

    &:hover {
      ${hoverStyles}
    }

    &:selected {
      ${selectedStyles}
    }
  `;
};

export const styledButton = (props: ButtonProps) => css`
  font-family: 'Nunito', sans-serif;
  background: #eee;
  color: #222;
  border-radius: 8px;
  padding: ${props.small ? '8px 16px' : '12px 16px'};
  ${props.block ? 'width: 100%;' : ''}
  ${colorMap(props)}
  ${defaultProps(props)}
`;
