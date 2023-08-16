import { useState } from 'react';

function useHandleAnimation(isChecked: boolean) {
  const [previousIsChecked, setPreviousIsChecked] = useState(isChecked);
  const [isShouldAnimate, setIsShouldAnimate] = useState(false);

  if (isChecked !== previousIsChecked) {
    setIsShouldAnimate(true);
    setPreviousIsChecked(isChecked);
  }

  return { isShouldAnimate };
}

export default useHandleAnimation;
