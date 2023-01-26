import React, { useState, useEffect } from 'react'
import background from '../../assets/background.webp'
import '../../components/Main/style/style.css'
import star from "../../assets/star.svg"

function Index() {
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  useEffect(() => {
    startTimer();
  });

  let interval;
  const startTimer = () => {
    const countDownDate = new Date("March 01, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (24 * 60 * 60 * 1000)).toString().padStart(2, '0');
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      ).toString().padStart(2, '0');

      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60)).toString().padStart(2, '0');

      const seconds = Math.floor((distance % (60 * 1000)) / 1000).toString().padStart(2, '0');


      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  return (
    <>
      <img src={background} alt='background' className='background-image' />
      <div className="header-box">
        <div className="header-tagline-box">
          <img src={star} alt="star" />
          <p className='header-tagline'>VIT Chennai's Annual Sports and Cultural Fest</p>
          <img src={star} alt="star" />
        </div>
        <p className='header-text'>Vibrance is Back</p>
      </div>

      <div className="countdown-box">
        <div className="countdown-tagline mb-4">Get ready to be Engaged, Enthralled, Entertained in</div>
        <div className="counter">
          <div className="counter-day">
            <p className='counter-day-number'>{timerDays}:</p>
            <p className='counter-day-text'>Days</p>
          </div>
          <div className="counter-day">
            <p className='counter-day-number'>{timerHours}:</p>
            <p className='counter-day-text'>Hours</p>
          </div>
          <div className="counter-minute">
            <p className='counter-minute-number'>{timerMinutes}:</p>
            <p className='counter-minute-text'>Minutes</p>
          </div>
          <div className="counter-seconds">
            <p className='counter-seconds-number'>{timerSeconds}</p>
            <p className='counter-seconds-text'>Seconds</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index