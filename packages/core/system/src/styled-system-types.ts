import { CSSProperties } from 'react';
import type * as CSS from 'csstype';

type CSSDefinition<D> = D | string | RecursiveCSSSelector<D | string>;

export interface RecursiveCSSSelector<D> {
  [selector: string]: CSSDefinition<D> & D;
}

type PseudoKeys = keyof CSS.Pseudos;

type PseudoSelectorDefinition<D> = D | RecursivePseudo<D>;

export type RecursivePseudo<D> = {
  [K in PseudoKeys]?: PseudoSelectorDefinition<D> & D;
};

export type RecursiveCSSObject<D> = D &
  (D | RecursivePseudo<D> | RecursiveCSSSelector<D>);

export type SystemStyleObject = RecursiveCSSObject<CSSProperties>;
