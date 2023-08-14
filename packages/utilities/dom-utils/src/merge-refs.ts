import type { ForwardedRef, MutableRefObject } from 'react';

import { isFn } from '@julo-ui/function-utils';

type RefCb<T> = (instance: T | null) => void;
type Ref<T> = RefCb<T> | MutableRefObject<T>;

/**
 * Helper to help share reference
 *
 * @remarks
 * [Docs](https://www.davedrinks.coffee/how-do-i-use-two-react-refs/)
 *
 * @returns method - function to execute all ForwaredRef
 *
 * @example
 * ```tsx
 *
 * const ForwaredComponent = forwardRef<HTMLDivElement, ForwaredComponentProps>((props, ref) => {
 *   const localRef = useRef<HTMLDivElement>(null);
 *
 *   return <div ref={mergeRefs(ref, localRef)}/>
 * })
 *
 * ```
 */
const mergeRefs = <T = unknown>(...refs: ForwardedRef<T>[]) => {
  const filteredRefs = refs.filter(Boolean) as Ref<T>[];

  return (inst: T) =>
    filteredRefs.forEach((ref) =>
      isFn(ref) ? ref(inst) : (ref.current = inst),
    );
};

export default mergeRefs;
