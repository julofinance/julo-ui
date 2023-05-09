import { css, CSSInterpolation } from '@emotion/css';
import type { TypographyStyleProps } from './types';

// Props that doesn't have default value can be listed here
const defaultProps = (props: Omit<TypographyStyleProps, 'bold'>) =>
  props as CSSInterpolation;

export const commonStyles = ({
  fontWeight,
  bold,
  ...resProps
}: TypographyStyleProps) => css`
  font-weight: ${fontWeight || (bold ? 700 : 400)};
  ${defaultProps(resProps)}
`;
