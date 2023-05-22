import {
  ComponentProps,
  ComponentPropsWithoutRef,
  ElementType,
  ReactNode,
} from 'react';

export type DOMElements = keyof JSX.IntrinsicElements;

export type As = ElementType;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T>;

export type MaybeRenderProp<P> = ReactNode | ((props: P) => ReactNode);

export type RightJoinProps<
  SourceProps extends object = NonNullable<object>,
  OverrideProps extends object = NonNullable<object>,
> = Omit<SourceProps, keyof OverrideProps> & OverrideProps;

export type Assign<T, U> = Omit<T, keyof U> & U;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = NonNullable<object>,
  AsComponent extends As = As,
> = (
  | RightJoinProps<ComponentProps, AdditionalProps>
  | RightJoinProps<AsProps, AdditionalProps>
) & {
  as?: AsComponent;
};

export interface ComponentWithAs<
  Component extends As,
  Props extends object = NonNullable<object>,
> {
  <AsComponent extends As = Component>(
    props: MergeWithAs<
      ComponentProps<Component>,
      ComponentProps<AsComponent>,
      Props,
      AsComponent
    >,
  ): JSX.Element;

  id?: string;
  displayName?: string;
}

export type JuloComponent<
  T extends As,
  P extends object = NonNullable<object>,
> = ComponentWithAs<T, P>;
