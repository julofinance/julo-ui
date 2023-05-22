import { css } from '@emotion/react';

export default css`
  html {
    margin: 0;
    padding: 0;
  }

  * {
    transition-duration: 0.2s;
    transition-property: background-color, border-color, color, fill, stroke,
      opacity, box-shadow, transform;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body,
  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  &:where(button, input, optgroup, select, textarea) {
    font-family: inherit;
    margin: 0;
  }
`;
