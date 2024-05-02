import { useRef, useState } from 'react';

import { useSafeLayoutEffect } from '@julo-ui/use-safe-layout-effect';

import { UseDelayUnmountOptions } from './types';

export function useDelayUnmount(options: UseDelayUnmountOptions) {
  const { delay = 500, isMounted } = options;

  const [isShouldRender, setIsShouldRender] = useState(false);

  const isPrevMounted = useRef(isMounted);

  useSafeLayoutEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isPrevMounted.current && !isMounted) return;

    if (isPrevMounted.current && !isMounted) {
      timeoutId = setTimeout(() => {
        setIsShouldRender(false);
        isPrevMounted.current = isMounted;
      }, delay);
    } else {
      setIsShouldRender(true);
      isPrevMounted.current = isMounted;
    }

    return () => clearTimeout(timeoutId);
  }, [isMounted, delay]);

  return isShouldRender;
}
