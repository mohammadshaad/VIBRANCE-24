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
        <div className="countdown-tagline">Get ready to be Engaged, Enthralled, Entertained in</div>
        <div className="counter">
          <div className="counter-day">15:</div>
          <div className="counter-minute">32:</div>
          <div className="counter-seconds">06</div>
        </div>
      </div>
    </>
  )
}

export default index