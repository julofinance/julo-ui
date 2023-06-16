import { createElement, forwardRef } from 'react';
import createStyled, {
  CSSObject,
  FunctionInterpolation,
} from '@emotion/styled';
import { SerializedStyles } from '@emotion/react';

import { assignAfter } from './utils';
import { As, DOMElements, JuloComponent, JuloProps, PropsOf } from './types';
import { SystemStyleObject } from './styled-system-types';
/**
 * @reason reference from @chakra-ui
 *
 * @dev fransiscus.hermanto@julofinance.com
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const emotionStyled = ((createStyled as any).default ??
  createStyled) as typeof createStyled;

type CSSObjectManagerProps = SystemStyleObject & JuloProps;

export const cssObjectManager: FunctionInterpolation<CSSObjectManagerProps> = (
  props,
) => {
  const { __css, css: emotionCss, sx } = props;

  const styles = assignAfter<CSSObject>({}, sx);
  const serializedStyle = Array.isArray(__css)
    ? __css
        .filter(Boolean)
        .map(({ styles }: SerializedStyles) => styles.trim())
        .join('\n')
    : `${__css ? __css?.styles : ''}`;

  return emotionCss
    ? [serializedStyle, styles, emotionCss]
    : [serializedStyle, styles];
};

export function styled<T extends As, P extends object = NonNullable<object>>(
  component: T,
) {
  /**
   * @reason component is too vary
   *
   * @dev fransiscus.hermanto@julofinance.com
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = emotionStyled(component as React.ComponentType<any>)(
    cssObjectManager,
  );

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
    | React.JSXElementConstructor<object> = React.JSXElementConstructor<object>,
> extends React.ReactElement<P & { ref: React.Ref<P> }, T & { id: string }> {
  ref: React.ForwardedRef<P> | null;
}

export interface JuloHTMLElement
  extends HTMLElement,
    JuloProps,
    /**
     * @reason to allow pass individual props that can be vary
     *
     * @dev fransiscus.hermanto@julofinance.com
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Record<string, any> {}

export type HTMLJuloProps<T extends As> = Omit<PropsOf<T>, 'ref'> & JuloProps;

export type HTMLJuloComponents = {
  [Tag in DOMElements]: JuloComponent<Tag, NonNullable<object>>;
};
