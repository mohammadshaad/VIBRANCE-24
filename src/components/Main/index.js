import React from 'react'
import background from '../../assets/background.webp'
import '../../components/Main/style/style.css'
import star from "../../assets/star.svg"

function index() {
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
            <p className='counter-day-number'>15:</p>
            <p className='counter-day-text'>Days</p>
          </div>
          <div className="counter-minute">
            <p className='counter-minute-number'>32:</p>
            <p className='counter-minute-text'>Minutes</p>
          </div>
          <div className="counter-seconds">
            <p className='counter-seconds-number'>06</p>
            <p className='counter-seconds-text'>Seconds</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default index