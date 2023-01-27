import React, { FC, useEffect, useState } from 'react';

import { cErrorMessageStyle } from './styles';

type Props = {
  isTimesUp: boolean;
  messageError: string;
  messageTimesUp: string;
  showError: boolean;
};

const CountdownMessage: FC<Props> = ({
  isTimesUp,
  messageError,
  messageTimesUp,
  showError,
}) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (showError) return setMessage(messageError);
    else if (isTimesUp) return setMessage(messageTimesUp);

    setMessage('');
    setMessage('');
  }, [showError, isTimesUp, messageTimesUp, messageError]);

  return <div className={cErrorMessageStyle}>{message}</div>;
};

export default CountdownMessage;
