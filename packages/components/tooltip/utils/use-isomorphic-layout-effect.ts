import { useLayoutEffect, useEffect } from 'react';

/**
 * @reference https://usehooks-ts.com/react-hook/use-isomorphic-layout-effect
 */

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
