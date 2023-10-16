import { ElementSize, trackElementSize } from '@zag-js/element-size';
import { useState } from 'react';

import { useSafeLayoutEffect } from '@julo-ui/use-safe-layout-effect';
import { useCallbackRef } from '@julo-ui/use-callback-ref';

import { trackMutation } from './utils';

interface UseSizesOptions<T> {
  getNodes: () => T[];
  observeMutation?: boolean;
}

function useWatchElementsSize<T extends HTMLElement | null>(
  options: UseSizesOptions<T>,
) {
  const { getNodes: getNodesProp, observeMutation = true } = options;

  const getNodes = useCallbackRef(getNodesProp);

  const [sizes, setSizes] = useState<ElementSize[]>([]);
  const [count, setCount] = useState(0);

  useSafeLayoutEffect(() => {
    const elements = getNodes();

    const cleanups = elements.map((element, index) =>
      trackElementSize(element, (size) => {
        setSizes((sizes) => {
          return [
            ...sizes.slice(0, index),
            size,
            ...sizes.slice(index + 1),
          ] as ElementSize[];
        });
      }),
    );

    if (observeMutation) {
      const firstNode = elements[0];
      cleanups.push(
        trackMutation(firstNode, () => {
          setCount((count) => count + 1);
        }),
      );
    }

    return () => {
      cleanups.forEach((cleanup) => {
        cleanup?.();
      });
    };
  }, [count, getNodes, observeMutation]);

  return sizes as Array<ElementSize | undefined>;
}

export default useWatchElementsSize;
