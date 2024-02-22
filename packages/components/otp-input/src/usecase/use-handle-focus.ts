import { useCallback, useEffect, useState } from 'react';
import type { DescendantsManager } from '@chakra-ui/descendant';

interface UseHandleFocusOptions {
  autoFocus: boolean;
  manageFocus: boolean;
  descendants: DescendantsManager<HTMLInputElement>;
}

export function useHandleFocus(options: UseHandleFocusOptions) {
  const { autoFocus, manageFocus, descendants } = options;

  const [focusedIndex, setFocusedIndex] = useState(-1);

  const onFocusNext = useCallback(
    (index: number) => {
      if (!manageFocus) return;

      const next = descendants.next(index, false);

      if (next)
        requestAnimationFrame(() => {
          next.node.focus();
        });
    },
    [descendants, manageFocus],
  );

  const onFocus = useCallback((index: number) => {
    setFocusedIndex(index);
  }, []);

  const onBlur = useCallback(() => {
    setFocusedIndex(-1);
  }, []);

  useEffect(() => {
    if (autoFocus) {
      const first = descendants.first();
      if (first) {
        requestAnimationFrame(() => {
          first.node.focus();
        });
      }
    }
    // We don't want to listen for updates to `autoFocus` since it only runs initially
    // eslint-disable-next-line
  }, [descendants]);

  return {
    focusedIndex,
    onFocusNext,
    onFocus,
    onBlur,
  };
}
