import { ReactNode, MouseEvent, LegacyRef } from 'react';

type breakpointCodes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

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
  ref?: LegacyRef<HTMLDivElement>;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  border?: string;
  borderRadius?: number;
  background?: string;
};

export type GridItemProps = {
  children: ReactNode | ReactNode[];
  breakpoints?: { [key in breakpointCodes]?: number };
  className?: any;
  'data-testid'?: string;
  padding?: number;
  margin?: number;
  ref?: LegacyRef<HTMLDivElement>;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  border?: string;
  borderRadius?: number;
  background?: string;
};
