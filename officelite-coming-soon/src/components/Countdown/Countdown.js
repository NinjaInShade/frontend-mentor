import React, { useState, useEffect } from 'react';
import './Countdown.css';

export default function Countdown({ colour = 'dark' }) {
  const calculateTimeLeft = () => {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-11-4`) - +new Date();
    let timeLeft = {};

    const daysLeft = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutesLeft = Math.floor((difference / 1000 / 60) % 60);
    const secondsLeft = Math.floor((difference / 1000) % 60);

    if (difference > 0) {
      timeLeft = {
        days: daysLeft < 10 ? `0${daysLeft}` : daysLeft,

        hours: hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft,

        minutes: minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft,

        seconds: secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const id = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  });

  return (
    <div className={`countdown ${colour === 'light' && 'light'}`}>
      <h3 className='countdown-title'>
        Coming <span>4 nov 2021</span>
      </h3>
      <div className='countdown-cards'>
        <div className='countdown-card'>
          <strong className='countdown-time'>{timeLeft.days}</strong>
          <p className='body-s countdown-lead'>days</p>
        </div>
        <div className='countdown-card'>
          <strong className='countdown-time'>{timeLeft.hours}</strong>
          <p className='body-s countdown-lead'>hours</p>
        </div>
        <div className='countdown-card'>
          <strong className='countdown-time'>{timeLeft.minutes}</strong>
          <p className='body-s countdown-lead'>min</p>
        </div>
        <div className='countdown-card'>
          <strong className='countdown-time'>{timeLeft.seconds}</strong>
          <p className='body-s countdown-lead'>sec</p>
        </div>
      </div>
    </div>
  );
}
