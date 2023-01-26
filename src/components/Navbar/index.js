import React from 'react'
import vibranceLogo from '../../assets/logo.webp'
import '../../components/Navbar/style/style.css'
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function index() {
  return (
    <nav className='flex items-center justify-center w-full h-full'>
      <div className='navcontainer flex items-center justify-between mx-5 w-full h-full'>

        <div className='flex items-center justify-center mt-4'>
          <a className='h-full' href='/'>
            <img className='vibrancelogo' src={vibranceLogo} alt='vibrance-logo' />
          </a>
        </div>

        <div className='flex items-center justify-between gap-4 h-full mr-4'>
          <a href='https://www.instagram.com/vibrancevit/' target="_blank" rel="noreferrer">
            <div className='instagram-icon'>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </a>
          <div className='px-6 py-2 gallery-border'>
            View Gallery
          </div>
        </div>


      </div>
    </nav>
  )
}

export default index