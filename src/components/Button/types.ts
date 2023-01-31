import { RefObject, MouseEvent } from 'react';

export type ButtonProps = {
  onClick?: (event: MouseEvent<HTMLElement>) => void;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  margin?: string;
  padding?: string;
  children?: any;
  className?: string;
  ref?: RefObject<HTMLButtonElement>
  disabled?: boolean;
  type?: 'button' | 'submit';
  block?: boolean;
  inverted?: boolean | false;
  small?: boolean | false;
  width?: string | number;
  color?: string | 'primary' | 'secondary' | 'tertiary';
  'data-testid'?: string;
};
