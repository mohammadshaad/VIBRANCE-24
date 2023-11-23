import React from 'react'
// import vibranceLogo from '../../assets/logo.webp'
import vibranceLogo2 from '../../assets/vibrancelogo2.png'
import '../../components/Navbar/style/style.css'
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import vitLogo from '../../assets/vitlogo.png'


function index() {
  return (
    <nav className='flex items-center justify-center w-full'>
      <div className='navcontainer flex items-center justify-between mx-5 sm:mx-0 w-full'>

        <div className='flex items-center justify-center'>
          <a className='h-full' href='/'>
            <img className='vibrancelogo' src={vibranceLogo2} alt='vibrance-logo' />
          </a>
        </div>

        <div className='flex items-center justify-between'>
          {/* <a href='https://www.instagram.com/vibrancevit/' target="_blank" rel="noreferrer">
            <div className='instagram-icon'>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </a> */}

          <div className='vit-div'>
            <img src={vitLogo} alt='vit-logo' className='vit-logo'/>
          </div>
          {/* <div className='px-6 py-2 gallery-border'>
            View Gallery
          </div> */}
        </div>


      </div>
    </nav>
  )
}

export default index