import {
  ComponentType,
  ForwardedRef,
  JSXElementConstructor,
  ReactElement,
  Ref,
  createElement,
  forwardRef,
} from 'react';
import { As, DOMElements, JuloComponent, PropsOf } from './types';
import createStyled from '@emotion/styled';

/**
 * @reason reference from @chakra-ui
 *
 * @dev fransiscus.hermanto@julofinance.com
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const emotionStyled = ((createStyled as any).default ??
  createStyled) as typeof createStyled;

export function styled<T extends As, P extends object = NonNullable<object>>(
  component: T,
) {
  /**
   * @reason component is too vary
   *
   * @dev fransiscus.hermanto@julofinance.com
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = emotionStyled(component as ComponentType<any>)();

  const juloComponent = forwardRef(function JuloComponent(props, ref) {
    return createElement(Component, {
      ref,
      ...props,
    });
  });

  return juloComponent as JuloComponent<T, P>;
}

export interface JuloReactElement<
  P,
  T extends
    | string
    | JSXElementConstructor<object> = JSXElementConstructor<object>,
> extends ReactElement<P & { ref: Ref<P> }, T & { id: string }> {
  ref: ForwardedRef<P> | null;
}

export type HTMLJuloProps<T extends As> = Omit<PropsOf<T>, 'ref'> & { as?: As };

export type HTMLJuloComponents = {
  [Tag in DOMElements]: JuloComponent<Tag, NonNullable<object>>;
};
