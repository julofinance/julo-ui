import React, { FC, memo, useEffect, useState } from 'react';

import CountdownMessage from './CountdownMessage';

import { cStyle, wrapperCountdown, wrapperCountdownTimer } from './styles';
import type { CountdownProps } from './types';
import Clock from './assets/Clock';

const Countdown: FC<CountdownProps> = (props) => {
  const {
    'data-testid': dataTestId,
    date,
    messageError,
    messageTimesUp,
    showError,
    onComplete,
    onReset,
  } = props;

  const [timerInterval, setTimerInterval] = useState<NodeJS.Timer>();
  const [timer, setTimer] = useState('-- : --');
  const [isTimesUp, setIsTimesUp] = useState(false);
  const expiredTime = date;

  useEffect(() => {
    clearInterval(timerInterval);
    const currentEpochDate = new Date(); // generate new Date every function has called

    if (expiredTime < currentEpochDate.getTime()) {
      // reset if times up
      onReset(true);
      setIsTimesUp(true);
      setTimer('-- : --');
    } else {
      setIsTimesUp(false);

      const timerInterval = setInterval(() => {
        const currentEpochDate = new Date(); // generate new Date every function has called
        const expiredTimeEpoch = expiredTime || 0;
        const getTimer = expiredTimeEpoch - currentEpochDate.getTime(); // get current time for generate minutes and seconds

        const timeLeft = {
          minutes: ~~((getTimer / 1000 / 60) % 60),
          seconds: ~~((getTimer / 1000) % 60),
        };

        const tempMinutes =
          timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes;
        const tempSeconds =
          timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds;

        if (getTimer > 0) {
          // if epoch time > 0
          setTimer(`${tempMinutes} : ${tempSeconds}`);
        } else {
          // timeout
          clearInterval(timerInterval);
          setIsTimesUp(true);
          onComplete(true);
        }
      }, 1000);

      setTimerInterval(timerInterval);
    }

    // call function every 'date' data has changed
  }, [date]);

  return (
    <div className={wrapperCountdown} data-testid={dataTestId}>
      <div className={wrapperCountdownTimer}>
        <Clock />
        <span className={cStyle}>{timer}</span>
      </div>
      <CountdownMessage
        isTimesUp={isTimesUp}
        messageError={messageError}
        messageTimesUp={messageTimesUp}
        showError={showError}
      />
    </div>
  );
};

export default memo(Countdown);
