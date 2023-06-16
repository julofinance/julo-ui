import { Context, Provider } from 'react';

export interface CreateContextOptions<T> {
  /**
   * @default true
   */
  strict?: boolean;
  hookName?: string;
  providerName?: string;
  errorMessage?: string;
  /**
   * @description Context name
   */
  name?: string;
  defaultValue?: T;
}

export type CreateContextReturn<T> = [Provider<T>, () => T, Context<T>];
