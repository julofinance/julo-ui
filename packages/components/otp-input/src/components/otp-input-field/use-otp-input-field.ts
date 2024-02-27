import { mergeRefs } from '@julo-ui/dom-utils';

import { useOtpInputContext } from '../../OtpInputProvider';
import { useOtpInputDescendant } from '../../use-otp-input';
import { UseOtpInputFieldProps } from './types';

export function useOtpInputField(
  props: UseOtpInputFieldProps,
  ref: React.Ref<unknown> = null,
) {
  const { getInputProps } = useOtpInputContext();
  const { index, register } = useOtpInputDescendant();

  return getInputProps({ ...props, ref: mergeRefs(register, ref), index });
}
