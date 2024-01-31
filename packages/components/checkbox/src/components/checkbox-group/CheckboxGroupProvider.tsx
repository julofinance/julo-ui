import { createContext } from '@julo-ui/context';
import { UseCheckboxGroupReturn } from './use-checkbox-group';

export type CheckboxGroupContextProps = Pick<
  UseCheckboxGroupReturn,
  'onChange' | 'value' | 'isDisabled'
>;

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<
  CheckboxGroupContextProps,
  false
>({
  name: 'CheckboxGroupContext',
  strict: false,
});
