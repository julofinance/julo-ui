/**
 * @reason react-types is used as global type which is really general
 *
 * @dev fransiscus.hermanto@julofinance.com
 */
/* eslint-disable @typescript-eslint/no-explicit-any */

export type EventOrValue =
  | React.ChangeEvent<HTMLInputElement>
  | string
  | number;

export interface DOMElement extends Element, HTMLOrSVGElement {}

type DataAttributes = {
  [dataAttr: string]: any;
};

export type DOMAttributes<T = DOMElement> = React.AriaAttributes &
  React.DOMAttributes<T> &
  DataAttributes & {
    id?: string;
    role?: React.AriaRole;
    tabIndex?: number;
    style?: React.CSSProperties;
  };

type Merge<M, N> = N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;

export type PropGetter<P = Record<string, unknown>, R = DOMAttributes> = (
  props?: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>,
) => R & React.RefAttributes<any>;

export type RequiredPropGetter<
  P = Record<string, unknown>,
  R = DOMAttributes,
> = (
  props: Merge<DOMAttributes, P>,
  ref?: React.Ref<any>,
) => R & React.RefAttributes<any>;

export type MaybeRenderProp<P> =
  | React.ReactNode
  | ((props: P) => React.ReactNode);
