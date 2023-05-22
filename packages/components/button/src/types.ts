import { TypographyProps } from '@julo-ui/typography';
import { HTMLJuloProps } from '@julo-ui/system';

export interface ButtonProps extends HTMLJuloProps<'button'> {
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
