import { type RefObject, useEffect } from 'react';

export const getDocument = (ref: React.RefObject<Element | null>) =>
  ref.current?.ownerDocument || document;

export const getWindow = (ref: React.RefObject<Element | null>) =>
  ref.current?.ownerDocument?.defaultView || window;

const closeEventName = 'julo-ui:close-tooltip';

function useCloseEvent(ref: RefObject<Element>, close: () => void) {
  useEffect(() => {
    const doc = getDocument(ref);
    doc.addEventListener(closeEventName, close);
    return () => doc.removeEventListener(closeEventName, close);
  }, [close, ref]);

  return () => {
    const doc = getDocument(ref);
    const win = getWindow(ref);
    doc.dispatchEvent(new win.CustomEvent(closeEventName));
  };
}

export default useCloseEvent;
