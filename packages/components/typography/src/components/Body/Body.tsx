import { cloneElement, isValidElement, memo } from 'react';

import callAllFn from '@julofinance/web-helpers/dist/fn/callAllFn';
import { cx, forwardRef, julo } from '@julo-ui/system';

import { BodyProps, TypographyWithAsChild } from '../../types';
import { omitHTMLProps, omitStyleProps } from '../../utils';
import { bodySizesSx } from './styles';
import { typographySx } from '../../styles';

const Body = forwardRef<Omit<BodyProps, 'type'>, 'p'>((props, ref) => {
  const {
    asChild,
    children,
    className,
    onClick,
    size = 'regular',
    bold = false,
    sx,
    ...resProps
  } = props as BodyProps & TypographyWithAsChild;

  const styleProps = omitHTMLProps(resProps);
  const htmlProps = omitStyleProps(resProps);

  if (asChild) {
    if (!isValidElement<BodyProps>(children))
      throw new Error('Please render an element');

    const { props: childProps } = children;
    return cloneElement(children, {
      ...htmlProps,
      ...childProps,
      className: cx(className, childProps?.className),
      onClick: callAllFn(onClick, childProps?.onClick),
      sx: {
        ...bodySizesSx[size],
        ...styleProps,
        ...typographySx({ fontWeight: styleProps.fontWeight, bold }),
        ...sx,
        ...childProps.sx,
      },
    } as BodyProps);
  }

  return (
    <julo.p
      ref={ref}
      className={className}
      onClick={onClick}
      sx={{
        ...bodySizesSx[size],
        ...styleProps,
        ...typographySx({ fontWeight: styleProps.fontWeight, bold }),
        ...sx,
      }}
      {...htmlProps}
    >
      {children}
    </julo.p>
  );
});

export default memo(Body);
