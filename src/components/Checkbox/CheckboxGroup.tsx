import React, { memo , ReactNode} from 'react';
import { styledCheckboxGroup } from './styles';

type Props = {
  children: ReactNode;
  inline: boolean;
};

const CheckboxGroup = ({ children, inline }: Props) => {
  return (
    <div className={styledCheckboxGroup(inline)}>
      {children}
    </div>
  );
};

export default memo(CheckboxGroup);
