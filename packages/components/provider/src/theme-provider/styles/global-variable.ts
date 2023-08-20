import { css } from '@emotion/react';

import { Theme } from '../types';
import { generateColorsCssVar, generateCommonCssVar } from '../utils';

export default ({
  colors,
  fontSizes,
  lineHeights,
  shadows,
  radius,
}: Theme) => css`
  :root {
    ${generateColorsCssVar(colors)}
    ${generateCommonCssVar('fontSizes', fontSizes)}
    ${generateCommonCssVar('lineHeights', lineHeights)}
    ${generateCommonCssVar('shadows', shadows)}
    ${generateCommonCssVar('corner', radius)}
  }
`;
