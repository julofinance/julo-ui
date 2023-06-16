import { ComponentProps, ComponentPropsWithoutRef, ElementType } from 'react';
import { SystemStyleObject } from './styled-system-types';
import { Interpolation, SerializedStyles } from '@emotion/react';

export interface JuloProps {
  sx?: SystemStyleObject;
  /**
   * Only for internal usage
   *
   * @private
   */
  __css?:
    | SerializedStyles
    | undefined
    | false
    | Array<SerializedStyles | undefined | false>;
  /**
   * The emotion's css style object
   */
  css?: Interpolation<NonNullable<unknown>>;
}

export type DOMElements = keyof JSX.IntrinsicElements;

export type As = ElementType;

export type PropsOf<T extends As> = ComponentPropsWithoutRef<T> & { as?: As };

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
> = ComponentWithAs<T, Assign<JuloProps, P>>;
