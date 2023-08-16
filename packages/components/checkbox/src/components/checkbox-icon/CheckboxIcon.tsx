import { julo } from '@julo-ui/system';

import CheckIcon from './CheckIcon';
import IndeterminateIcon from './IndeterminateIcon';
import { checkboxIconCx } from './styles';
import { CheckboxIconProps } from './types';

const CheckboxIcon = (props: CheckboxIconProps) => {
  const { isIndeterminate, isChecked, ...resProps } = props;

  const Icon = isIndeterminate ? IndeterminateIcon : CheckIcon;

  return isChecked || isIndeterminate ? (
    <julo.div __css={checkboxIconCx}>
      <Icon {...resProps} />
    </julo.div>
  ) : null;
};

export default CheckboxIcon;
