export function trackMutation(el: HTMLElement | null, cb: () => void) {
  if (!el || !el.parentElement) return;
  const win = el.ownerDocument?.defaultView ?? window;
  const observer = new win.MutationObserver(() => {
    cb();
  });
  observer.observe(el.parentElement, { childList: true });
  return () => {
    observer.disconnect();
  };
}
