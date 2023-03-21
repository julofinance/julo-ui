import {
  ReactElement,
  DetailedHTMLProps,
  HTMLAttributes,
} from 'react';

export interface TypographyStyleProps {
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
  bold?: boolean | false;
}

export interface BaseTypographyProps
  extends TypographyStyleProps,
    Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      'translate' | 'ref' | 'color'
    > {
  children: ReactElement | string;
  className?: string;
  asChild?: boolean;
}

export interface BodyProps extends BaseTypographyProps {
  type: 'body';
  /**
   * @default regular
   */
  size?: 'small' | 'regular';
  /**
   * @default p
   */
  as?: `${keyof HTMLElementTagNameMap}`;
}

export interface HeadingProps extends BaseTypographyProps {
  type: 'heading';
  /**
   * @description 1 - 3 (Display)
   * @description 4 - 6 (Heading)
   */
  headingType: 1 | 2 | 3 | 4 | 5 | 6;
}

export interface CaptionProps extends BaseTypographyProps {
  type: 'caption';
  /**
   * @default regular
   */
  size?: 'small' | 'regular';
  /**
   * @default span
   */
  as?: `${keyof HTMLElementTagNameMap}`;
}

export type TypographyProps = HeadingProps | BodyProps | CaptionProps;
