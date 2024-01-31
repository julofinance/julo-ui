import { Context, Provider } from 'react';

interface BaseCreateContextOptions<T> {
  hookName?: string;
  providerName?: string;
  errorMessage?: string;
  /**
   * @description Context name
   */
  name?: string;
  defaultValue?: T;
}

export type CreateContextOptions<
  T,
  Strict extends boolean = true,
> = BaseCreateContextOptions<T> &
  (Strict extends true ? { strict?: true } : { strict: false });

type ContextValue<T, Strict extends boolean = true> = Strict extends true
  ? T
  : T | undefined;

export type CreateContextReturn<T, Strict extends boolean> = [
  Provider<ContextValue<T, Strict>>,
  (errorMessage?: string) => ContextValue<T, Strict>,
  Context<ContextValue<T, Strict>>,
];
