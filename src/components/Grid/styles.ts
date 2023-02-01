import { css } from '@emotion/css';

type bpCodes = { [key: string]: number }

const BREAKPOINT: bpCodes = {
  xs: 320,
  sm: 499,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const gridStyles = (props: any) => css`
  display: flex;
  flex-wrap: wrap;
  align-items: ${props.align};
  justify-content: ${props.justify};
  height: ${props.height? `${props.height}px`: `100%`};
  padding: ${props.padding? `${props.padding}px`: `0px`};
  margin: ${props.margin? `${props.margin}px`: `0px`};
  margin-right: -15px;
  margin-left: -15px;
  border: ${props.border? `${props.border}`:`none`};
  border-radius: ${props.borderRadius? `${props.borderRadius}px`:`0px`};
  background: ${props.background? `${props.background}`:`none`};

  > div {
    ${props.equalHeight? `height:${props.equalHeight}px;`: `height:auto;`}
    ${props.gutter
      ? `margin-left: ${props.gutter / 2}px; margin-right: ${props.gutter / 2}px;`
      : `margin: 0px`};
  }
`;

export const itemStyles = (props: any) => css`
  display:flex;
  background: ${props.background? `${props.background}`:`none`};
  text-align: center;
  padding: ${props.padding? `${props.padding}px`: `0px`};
  margin: ${props.margin? `${props.margin}px`: `0px`};
  border: ${props.border? `${props.border}`:`none`};
  border-radius: ${props.borderRadius? `${props.borderRadius}px`:`0px`};

  ${Object.keys(props.breakpoints || {}).map(
    (breakpoint) => css`
      @media (min-width: ${BREAKPOINT[breakpoint]}px) {
        flex: 1 0 ${(props.breakpoints[breakpoint] / 12) * 100}%;
        max-width: ${(props.breakpoints[breakpoint] / 12) * 100}%;
      }
    `,
  )}
`;
