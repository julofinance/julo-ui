import { ReactElement, MouseEvent } from 'react';

export type TypographyProps = {
  children: ReactElement | string;
  display?: 1 | 2 | 3;
  heading?: 1 | 2 | 3;
  body?: 1 | 2;
  caption?: 1 | 2;
  margin?: string;
  color?: string;
  bold?: boolean | false;
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  className?: string;
  fontWeight?: number;
  fontSize?: string;
  textAlign?: string | 'left' | 'right' | 'center' | 'justify';
  wordBreak?: string | 'break-word' | 'breal-all';
};
