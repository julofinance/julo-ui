import { mergeRefs } from '@julo-ui/dom-utils';

import { useOtpInputContext } from '../../OtpInputProvider';
import { usePinInputDescendant } from '../../use-otp-input';
import { UseOtpInputFieldProps } from './types';

export function useOtpInputField(
  props: UseOtpInputFieldProps,
  ref: React.Ref<unknown> = null,
) {
  const { getInputProps } = useOtpInputContext();
  const { index, register } = usePinInputDescendant();

  return getInputProps({ ...props, ref: mergeRefs(register, ref), index });
}
