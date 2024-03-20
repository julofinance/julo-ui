import { useEffect, useState } from 'react';

/**
 * - 'unmounted': The component is not rendered and is considered unmounted.
 * - 'unmounting': The component is currently in the process of unmounting, usually after a hide action.
 *   It will transition to 'unmounted' after a specified time.
 * - 'mounting': The component is currently in the process of mounting, usually after a show action.
 *   It will transition to 'mounted' after a specified time.
 * - 'mounted': The component is rendered and considered fully mounted.
 *
 * This state is used in conjunction with the `useDelayedUnmounting` hook to manage delayed mounting/unmounting of components.
 * @typedef DelayMountingState
 */
export type DelayMountingState =
  | 'unmounted'
  | 'unmounting'
  | 'mounting'
  | 'mounted';

/**
 * Custom hook that delays the mounting and unmounting of a component.
 * @param time The delay time in milliseconds (default: 50ms).
 * @returns An object containing the current state, and functions to show and hide the component.
 */
const useDelayedMounting = (time = 50) => {
  const [state, setState] = useState<DelayMountingState>('unmounted');
  const show = () => {
    if (state === 'unmounting') {
      return;
    }
    setState('mounting');
  };
  const hide = () => {
    if (state === 'mounting') {
      return;
    }
    setState('unmounting');
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    if (state === 'unmounting') {
      timeoutId = setTimeout(() => {
        setState('unmounted');
      }, time);
    } else if (state === 'mounting') {
      timeoutId = setTimeout(() => {
        setState('mounted');
      }, time);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [state, time]);

  return { state, show, hide };
};

export default useDelayedMounting;
