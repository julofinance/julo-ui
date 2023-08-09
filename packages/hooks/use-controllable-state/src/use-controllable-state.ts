import { useState } from 'react';

import { useCallbackRef } from '@julo-ui/use-callback-ref';

import { UseControllableStateProps } from './types';

/**
 * The `useControllableState` hook returns the state and function that updates the state, just like React.useState does.
 */
export function useControllableState<T>(props: UseControllableStateProps<T>) {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    shouldUpdate = (prev, next) => prev !== next,
  } = props;

  const onChangeProp = useCallbackRef(onChange);
  const shouldUpdateProp = useCallbackRef(shouldUpdate);

  const [uncontrolledState, setUncontrolledState] = useState(defaultValue as T);
  const isControlled = valueProp !== undefined;
  const value = isControlled ? valueProp : uncontrolledState;

  const setValue = useCallbackRef(
    (next: React.SetStateAction<T>) => {
      const setter = next as (prevState?: T) => T;
      const nextValue = typeof next === 'function' ? setter(value) : next;

      if (!shouldUpdateProp(value, nextValue)) {
        return;
      }

      if (!isControlled) {
        setUncontrolledState(nextValue);
      }

      onChangeProp(nextValue);
    },
    [isControlled, onChangeProp, value, shouldUpdateProp],
  );

  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
