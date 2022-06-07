import { css, CSSInterpolation } from '@emotion/css';
import { NT100 } from '@julofinance/color-token';
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
  color: ${props.color || NT100};
  font-weight: ${props.fontWeight || (props.bold ? 700 : 400)};
  ${defaultProps(props)}
`;

const displaySizeMap = (heading: number) => {
  let styles;
  switch (heading) {
    case 1:
      styles = `font-size: 2.75rem;
            line-height: 4rem;`;
      break;
    case 2:
      styles = `font-size: 2rem;
            line-height: 2.5rem;`;
      break;

    case 3:
      styles = `font-size: 1.625rem;
            line-height: 2.25rem;`;
      break;
  }

  return styles;
};

const headingSizeMap = (heading: number) => {
  let styles;
  switch (heading) {
    case 1:
      styles = `font-size: 1.5rem;
                line-height: 2rem;`;
      break;
    case 2:
      styles = `font-size: 1.375rem;
            line-height: 2rem;`;
      break;

    case 3:
      styles = `font-size: 1.25rem;
            line-height: 1.5rem;`;
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
      styles = `font-size: 0.875rem;
            line-height: 1.25rem;`;
      break;
  }

  return styles;
};

const captionSizeMap = (body: number) => {
  let styles;
  switch (body) {
    case 1:
      styles = `font-size: 0.75rem;
            line-height: 1.125rem;`;
      break;

    case 2:
      styles = `font-size: 0.625rem;
            line-height: 1rem;`;
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
