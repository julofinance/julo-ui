import React, { FC } from 'react';

import { cErrorMessageStyle } from './styles';

type Props = {
  message: string;
};

const CountdownMessage: FC<Props> = ({ message }) => {
  return <div className={cErrorMessageStyle}>{message}</div>;
};

export default CountdownMessage;
