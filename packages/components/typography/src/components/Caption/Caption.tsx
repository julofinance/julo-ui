import { isValidElement, memo, cloneElement } from 'react';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';
import { cx, forwardRef, julo } from '@julo-ui/system';

import type { CaptionProps, TypographyWithAsChild } from '../../types';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { captionSizesSx } from './styles';
import { typographySx } from '../../styles';

const Caption = forwardRef<Omit<CaptionProps, 'type'>, 'span'>((props, ref) => {
  const {
    asChild,
    children,
    className,
    onClick,
    size = 'regular',
    bold = false,
    sx,
    ...resProps
  } = props as CaptionProps & TypographyWithAsChild;

  const styleProps = omitHTMLProps(resProps);
  const htmlProps = omitStyleProps(resProps);

  if (asChild) {
    if (!isValidElement<CaptionProps>(children))
      throw new Error('Please render an element');

    const { props: childProps } = children;

    return cloneElement(children, {
      ...htmlProps,
      ...childProps,
      className: cx(className, childProps?.className),
      onClick: callAllFn(onClick, childProps?.onClick),
      sx: {
        ...typographySx({ fontWeight: styleProps.fontWeight, bold }),
        ...styleProps,
        ...captionSizesSx[size],
        ...sx,
        ...childProps.sx,
      },
    } as CaptionProps);
  }

  return (
    <julo.span
      ref={ref}
      className={className}
      onClick={onClick}
      sx={{
        ...typographySx({ fontWeight: styleProps.fontWeight, bold }),
        ...styleProps,
        ...captionSizesSx[size],
        ...sx,
      }}
      {...htmlProps}
    >
      {children}
    </julo.span>
  );
});

export default memo(Caption);
