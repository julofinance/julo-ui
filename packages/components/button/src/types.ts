import { DetailedHTMLProps } from 'react';
import { TypographyProps } from '@julo-ui/typography';

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
  typographyProps?: Omit<
    Extract<TypographyProps, { type: 'body' }>,
    'type' | 'asChild' | 'as' | 'children'
  >;
}
