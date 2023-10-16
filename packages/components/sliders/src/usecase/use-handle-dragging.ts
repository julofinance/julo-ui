import { useCallback, useState } from 'react';

function useHandleDragging() {
  const [isDragging, setIsDragging] = useState(false);

  const onDraggingStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  const onDraggingEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  return { isDragging, onDraggingStart, onDraggingEnd };
}

export default useHandleDragging;
