import { ForwardRefRenderFunction, forwardRef as reactForwardRef } from 'react';
import { As, ComponentWithAs, PropsOf, RightJoinProps } from './types';

function forwardRef<Props extends object, Component extends As>(
  component: ForwardRefRenderFunction<
    /**
     * @reason type of ref is too vary
     *
     * @dev fransiscus.hermanto@julofinance.com
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any,
    RightJoinProps<PropsOf<Component>, Props>
  >,
) {
  return reactForwardRef(component) as unknown as ComponentWithAs<
    Component,
    Props
  >;
}

export default forwardRef;
