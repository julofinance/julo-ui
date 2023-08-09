import { useCallback, useEffect, useRef } from 'react';

// eslint-disable-next-line @typescript-eslint/ban-types
export function useCallbackRef<T extends Function>(
  callback: T | undefined,
  deps: React.DependencyList = [],
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    ((...args: unknown[]) => callbackRef.current?.(...args)) as unknown as T,
    deps,
  );
}
