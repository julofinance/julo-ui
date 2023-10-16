import { useCallback, useState } from 'react';

function useHandleFocus() {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return { isFocused, onFocus, onBlur };
}

export default useHandleFocus;
