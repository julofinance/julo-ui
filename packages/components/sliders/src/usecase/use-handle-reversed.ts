interface UseHandleReversedOptions {
  isReversed?: boolean;
  direction: 'ltr' | 'rtl';
  orientation?: 'horizontal' | 'vertical';
}

function useHandleReversed(options: UseHandleReversedOptions) {
  const { isReversed = false, direction, orientation } = options;

  if (direction === 'ltr' || orientation === 'vertical') {
    return isReversed;
  }
  // only flip for horizontal RTL
  // if isReserved 🔜  otherwise  🔚
  return !isReversed;
}

export default useHandleReversed;
