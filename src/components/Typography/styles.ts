import { css, CSSInterpolation } from '@emotion/css';
import { NT90 } from '@julofinance/color-token';
import type { TypographyProps } from './types';

// Props that doesn't have default value can be listed here
const defaultProps = ({ textAlign, fontSize }: TypographyProps) =>
  ({
    textAlign,
    fontSize,
  } as CSSInterpolation);

const commonStyles = (props: TypographyProps) => css`
  font-family: 'Nunito', sans-serif;
  margin: ${props.margin || 0};
  color: ${props.color || NT90};
  font-weight: ${props.fontWeight || (props.bold ? 700 : 400)};
  ${defaultProps(props)}
`;

const displaySizeMap = (display: number) => {
  let styles;
  switch (display) {
    case 1:
      styles = `font-size: 4rem;
            line-height: 5rem;`;
      break;
    case 2:
      styles = `font-size: 3.5rem;
            line-height: 4rem;`;
      break;

    case 3:
      styles = `font-size: 3rem;
            line-height: 3.5rem;`;
      break;
  }

  return styles;
};

const headingSizeMap = (heading: number) => {
  let styles;
  switch (heading) {
    case 1:
      styles = `font-size: 2.5rem;
                line-height: 3rem;`;
      break;
    case 2:
      styles = `font-size: 2rem;
            line-height: 2.5rem;`;
      break;

    case 3:
      styles = `font-size: 1.5rem;
            line-height: 2rem;`;
      break;
  }

  return styles;
};

const bodySizeMap = (body: number) => {
  let styles;
  switch (body) {
    case 1:
      styles = `font-size: 1rem;
            line-height: 1.5rem;`;
      break;
    case 2:
      styles = `font-size: 0.9rem;
            line-height: 1.375rem;`;
      break;
  }

  return styles;
};

const captionSizeMap = (caption: number) => {
  let styles;
  switch (caption) {
    case 1:
      styles = `font-size: 0.75rem;
            line-height: 1.063rem;`;
      break;

    case 2:
      styles = `font-size: 0.625rem;
            line-height: 0.938rem;`;
      break;
  }

  return styles;
};

export const styledDisplay = (props: TypographyProps) => css`
  ${displaySizeMap(props.display || 1)}
  ${commonStyles(props)}
`;

export const styledHeading = (props: TypographyProps) => css`
  ${headingSizeMap(props.heading || 1)}
  ${commonStyles(props)}
`;

export const styledBody = (props: TypographyProps) => css`
  ${bodySizeMap(props.body || 1)}
  ${commonStyles(props)}
`;

export const styledCaption = (props: TypographyProps) => css`
  ${captionSizeMap(props.caption || 1)}
  ${commonStyles(props)}
`;
