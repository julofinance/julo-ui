import {
  createContext as reactCreateContext,
  useContext as useReactContext,
} from 'react';

import { CreateContextOptions, CreateContextReturn } from './types';
import { getDefaultErrorMessage } from './utils';

export function createContext<T, Strict extends boolean = true>(
  options: CreateContextOptions<T, Strict>,
) {
  const {
    name,
    strict = true,
    defaultValue,
    hookName = 'useContext',
    providerName = 'Provider',
    errorMessage: rootErrorMessage,
  } = options;

  const Context = reactCreateContext<T | undefined>(defaultValue);

  Context.displayName = name;

  function useContext(errorMessage?: string) {
    const context = useReactContext(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage ??
          rootErrorMessage ??
          getDefaultErrorMessage(hookName, providerName),
      );

      error.name = 'ContextError';
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<
    T,
    Strict
  >;
}
