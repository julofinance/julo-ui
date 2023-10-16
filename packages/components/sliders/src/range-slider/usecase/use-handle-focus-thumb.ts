import { useCallback } from 'react';
import { Ids } from '../utils';

interface UseHandleFocusThumbOptions {
  focusThumbOnChange: boolean;
  rootRef: React.RefObject<HTMLElement>;
  activeIndex: number;
  ids: Ids;
}

function useHandleFocusThumb(options: UseHandleFocusThumbOptions) {
  const { focusThumbOnChange, rootRef, ids, activeIndex } = options;

  const onFocusThumb = useCallback(
    (index?: number) => {
      const targetIndex = index ?? activeIndex;

      if (targetIndex === -1 || !focusThumbOnChange) return;

      const id = ids.getThumb(targetIndex);
      const thumb = rootRef.current?.ownerDocument.getElementById(id);

      if (thumb) {
        setTimeout(() => thumb.focus());
      }
    },
    [activeIndex, focusThumbOnChange, ids, rootRef],
  );

  return { onFocusThumb };
}

export default useHandleFocusThumb;
