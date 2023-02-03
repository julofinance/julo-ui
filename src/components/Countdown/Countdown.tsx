import React, { FC, memo, useEffect, useState } from 'react';

import { clockIcon, cStyle, wrapperCountdown } from './styles';
import type { CountdownProps } from './types';
import Clock from './assets/Clock';

const Countdown: FC<CountdownProps> = (props) => {
  const {
    'data-testid': dataTestId,
    date,
    onComplete,
    onReset = () => {},
  } = props;

  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>();
  const [timer, setTimer] = useState('-- : --');
  const expiredTime = date;

  useEffect(() => {
    clearInterval(timerInterval);
    const currentEpochDate = new Date(); // generate new Date every function has called

    if (expiredTime < currentEpochDate.getTime()) {
      // reset if times up
      onReset(true);
      setTimer('-- : --');
    } else {
      onComplete(false);

      const timerInterval = setInterval(() => {
        const currentEpochDate = new Date(); // generate new Date every function has called
        const expiredTimeEpoch = expiredTime ?? 0;
        const currentTime = expiredTimeEpoch - currentEpochDate.getTime(); // get current time for generate minutes and seconds

        const timeLeft = {
          minutes: ~~((currentTime / 1000 / 60) % 60),
          seconds: ~~((currentTime / 1000) % 60),
        };

        const tempMinutes =
          timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes;
        const tempSeconds =
          timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds;

        if (currentTime > 0) {
          // if epoch time > 0
          setTimer(`${tempMinutes} : ${tempSeconds}`);
        } else {
          // timeout
          clearInterval(timerInterval);
          onComplete(true);
        }
      }, 1000);

      setTimerInterval(timerInterval);
    }

    // call function every 'date' data has changed
  }, [date]);

  return (
    <div className={wrapperCountdown} data-testid={dataTestId}>
      <Clock className={clockIcon} />
      <span className={cStyle}>{timer}</span>
    </div>
  );
};

export default memo(Countdown);
