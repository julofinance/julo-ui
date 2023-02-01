import React, { FC, memo , ReactNode} from 'react';
import { styledCheckboxGroup } from './styles';

interface Props {
  children: ReactNode | ReactNode[];
  inline: boolean;
};

const CheckboxGroup: FC<Props> = ({ children, inline }) => {
  return (
    <div className={styledCheckboxGroup(inline)}>
      {children}
    </div>
  );
};

export default memo(CheckboxGroup);
