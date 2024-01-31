import { createContext } from '@julo-ui/context';

import { UseRadioGroupReturn } from './use-radio-group';

export type RadioGroupContextProps = Pick<
  UseRadioGroupReturn,
  'value' | 'name' | 'isDisabled' | 'isFocusable' | 'onChange'
>;

export const [RadioGroupProvider, useRadioGroupContext] = createContext<
  RadioGroupContextProps,
  false
>({
  name: 'RadioGroupContext',
  strict: false,
});
