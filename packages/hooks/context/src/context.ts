import {
  createContext as reactCreateContext,
  useContext as useReactContext,
} from 'react';
import { CreateContextOptions, CreateContextReturn } from './types';

function getDefaultErrorMessage(hook: string, provider: string) {
  return `${hook} must be used within ${provider}`;
}

export function createContext<T>(options: CreateContextOptions<T> = {}) {
  const {
    name,
    strict = true,
    defaultValue,
    hookName = 'useContext',
    providerName = 'Provider',
    errorMessage,
  } = options;

  const Context = reactCreateContext<T | undefined>(defaultValue);

  Context.displayName = name;

  function useContext() {
    const context = useReactContext(Context);
    if (!context && strict) {
      const error = new Error(
        errorMessage ?? getDefaultErrorMessage(hookName, providerName),
      );

      error.name = 'ContextError';
      throw error;
    }

    return context;
  }

  return [Context.Provider, useContext, Context] as CreateContextReturn<T>;
}
