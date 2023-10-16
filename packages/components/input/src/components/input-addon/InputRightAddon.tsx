import { forwardRef } from '@julo-ui/system';

import InputAddon from './InputAddon';
import { InputRightAddonProps } from './types';

const InputRightAddon = forwardRef<InputRightAddonProps, 'div'>(
  (props, ref) => {
    return <InputAddon ref={ref} placement='right' {...props} />;
  },
);

/**
 * id used for InputGroup
 */
InputRightAddon.id = 'input-right-addon';
InputRightAddon.displayName = 'InputRightAddon';

export default InputRightAddon;
