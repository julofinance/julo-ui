import React, { memo, useEffect, useState } from 'react';

import {
  cErrorMessageStyle,
  cStyle,
  wrapperCountdown,
  wrapperCountdownTimer,
} from './styles';
import type { CountdownProps } from './types';
import Clock from './assets/Clock';

const Countdown = (props: CountdownProps) => {
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

  const intervalTimer = () => {
    const currentEpochDate = new Date(); // generate new Date every function has called

    if (expiredTime < currentEpochDate.getTime()) {
      onReset(true);
      setIsTimesUp(true);
    } else {
      const timer = setInterval(() => {
        calculateTimeLeft();
      }, 1000);

      setTimerInterval(timer);
    }
  };

  useEffect(() => {
    clearInterval(timerInterval);
    intervalTimer();
    // call function every 'date' data has changed
  }, [date]);

  const calculateTimeLeft = () => {
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
  };

  const ErrorMessageComponent = () => {
    let message = '';

    if (showError) message = messageError;
    else if (isTimesUp) message = messageTimesUp;

    return <div className={cErrorMessageStyle}>{message}</div>;
  };
  return (
    <div className={wrapperCountdown} data-testid={dataTestId}>
      <div className={wrapperCountdownTimer}>
        <Clock />
        <span className={cStyle}>{timer}</span>
      </div>
      <ErrorMessageComponent />
    </div>
  );
};

Countdown.defaultProps = {
  date: 0,
  messageError: '',
  messageTimesUp: 'Waktu Habis',
  showError: false,
};

export default memo(Countdown);
