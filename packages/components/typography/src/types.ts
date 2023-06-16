import { As, JuloProps } from '@julo-ui/system';
import { ReactNode, DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TypographyStyleProps {
  fontWeight?: number;
  fontSize?: string;
  lineHeight?: string;
  color?: string;
}

export type TypographySize = 'small' | 'regular';

export interface BaseTypographyProps
  extends TypographyStyleProps,
    Omit<
      DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
      'translate' | 'ref' | 'color'
    >,
    JuloProps {
  className?: string;
  bold?: boolean | false;
}

export interface TypographyWithAsChild extends BaseTypographyProps {
  asChild: true;
  children: ReactNode;
}

export interface TypographyWihoutAsChild extends BaseTypographyProps {
  asChild?: false;
}

type RawBaseTypographyProps = TypographyWihoutAsChild | TypographyWithAsChild;

export interface BodyProps extends BaseTypographyProps {
  type: 'body';
  /**
   * @default regular
   */
  size?: TypographySize;
  /**
   * @default p
   */
  as?: As;
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
  size?: TypographySize;
  /**
   * @default span
   */
  as?: As;
}

export type TypographyProps = (HeadingProps | BodyProps | CaptionProps) &
  RawBaseTypographyProps;
