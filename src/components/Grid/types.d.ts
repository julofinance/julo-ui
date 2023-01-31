import { ReactNode } from "react";

type breakpointCodes = {
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
}

export type GridProps = {
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
  children: ReactNode | ReactNode[];
  className?: any;
  'data-testid'?: string;
  height?: number;
  equalHeight?: number;
  gutter?: number;
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  padding?: number;
  margin?: number;
  ref?: RefObject<HTMLButtonElement>;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  border?: string;
  borderRadius?: number;
  background?: string;
};

export type GridItemProps = {
  children: ReactNode | ReactNode[];
  breakpoints?: { [key: breakpointCodes]: number };
  className?: any;
  'data-testid'?: string;
  padding?: number;
  margin?: number;
  ref?: RefObject<HTMLButtonElement>;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  border?: string;
  borderRadius?: number;
  background?: string;
}