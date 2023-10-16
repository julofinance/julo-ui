import type { ElementSize } from '@zag-js/element-size';

import { isRef } from '@julo-ui/dom-utils';

import useWatchElementsSize from './use-watch-elements-size';

function useWatchElementSize<T extends HTMLElement | null>(
  subject: T | React.RefObject<T>,
) {
  const [size] = useWatchElementsSize({
    observeMutation: false,
    getNodes() {
      const node = isRef(subject) ? subject.current : subject;
      return [node];
    },
  });
  return size as ElementSize | undefined;
}

export default useWatchElementSize;
