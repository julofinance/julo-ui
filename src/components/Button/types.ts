import { RefObject, DetailedHTMLProps } from 'react';

export interface ButtonProps
  extends Omit<
    DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    'ref'
  > {
  block?: boolean;
  inverted?: boolean | false;
  /**
   * @default regular
   */
  size?: 'regular' | 'small';
  /**
   * @default primary
   */
  variant?: 'primary' | 'secondary' | 'tertiary';
}
