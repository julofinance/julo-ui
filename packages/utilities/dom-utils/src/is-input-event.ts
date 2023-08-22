import { isObject } from '@julo-ui/object-utils';

function isInputEvent(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any,
): value is { target: HTMLInputElement } {
  return value && isObject(value) && isObject(value.target);
}

export default isInputEvent;
