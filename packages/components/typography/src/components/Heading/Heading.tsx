import { cloneElement, isValidElement, memo } from 'react';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';
import { cx, forwardRef, julo } from '@julo-ui/system';
import { useTheme } from '@julo-ui/provider';

import { HeadingProps, TypographyWithAsChild } from '../../types';
import { typographySx } from '../../styles';
import { omitHTMLProps, omitStyleProps } from '../../utils';

const Heading = forwardRef<Omit<HeadingProps, 'type'>, 'h1'>((props, ref) => {
  const {
    asChild,
    headingType,
    children,
    className,
    onClick,
    bold = false,
    sx,
    ...resProps
  } = props as HeadingProps & TypographyWithAsChild;

  const styleProps = omitHTMLProps(resProps);
  const htmlProps = omitStyleProps(resProps);

  const theme = useTheme();

  const fontSize = theme.fontSizes[`h${headingType}`];
  const lineHeight = theme.lineHeights[`h${headingType}`];

  if (asChild) {
    if (!isValidElement<HeadingProps>(children))
      throw new Error('Please render an element');

    const { props: childProps } = children;

    return cloneElement(children, {
      ...htmlProps,
      ...childProps,
      className: cx(className, childProps?.className),
      onClick: callAllFn(onClick, childProps?.onClick),
      sx: {
        fontSize,
        lineHeight,
        ...styleProps,
        ...typographySx({ fontWeight: styleProps.fontWeight, bold }),
        ...sx,
        ...childProps?.sx,
      },
    } as HeadingProps);
  }

  const Head = julo[`h${headingType}`];

  return (
    <Head
      ref={ref}
      className={className}
      onClick={onClick}
      data-heading-type={headingType}
      sx={{
        fontSize,
        lineHeight,
        ...styleProps,
        ...typographySx({ fontWeight: styleProps.fontWeight, bold }),
        ...sx,
      }}
      {...htmlProps}
    >
      {children}
    </Head>
  );
});

export default memo(Heading);
