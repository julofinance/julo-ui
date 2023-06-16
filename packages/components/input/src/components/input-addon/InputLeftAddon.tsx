import { forwardRef } from '@julo-ui/system';

import InputAddon from './InputAddon';
import { InputLeftAddonProps } from './types';

const InputLeftAddon = forwardRef<InputLeftAddonProps, 'div'>((props, ref) => {
  return <InputAddon ref={ref} placement='left' {...props} />;
});

/**
 * id used for InputGroup
 */
InputLeftAddon.id = 'input-left-addon';
InputLeftAddon.displayName = 'InputLeftAddon';

export default InputLeftAddon;
