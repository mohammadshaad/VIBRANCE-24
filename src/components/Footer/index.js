import React from 'react'
import '../../components/Footer/styles/style.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function index() {
    return (
        <div>

            <div id='Footer' className='footer mt-20 sm:mt-10 w-full flex items-center justify-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">

                    <div className='convener flex flex-col items-center justify-center w-full h-full text-white mt-10 text-center'>
                        <p className='text-4xl font-bold sm:text-2xl'>Vibrance Conveners</p>
                        <hr className='hr' />
                        <div className='flex gap-14 sm:flex-col sm:gap-4 sm:text-sm'>
                            <p className=''>Dr Premalatha M</p>
                            <p className=''>Dr Prasad M</p>
                        </div>
                    </div>

                    <div className='footer-wrapper rounded-xl p-8 flex items-center justify-between m-10'>
                        <p className="font-medium">CONTACT US</p>
                        <div className='flex gap-4 sm:gap-2'>
                            <a href='https://www.instagram.com/vibrancevit/' target="_blank" rel="noreferrer">
                                <div className='instagram-icon-contact'>
                                    <FontAwesomeIcon icon={faInstagram} />
                                </div>
                            </a>
                            <a href='https://www.facebook.com/vibrancevit/' target="_blank" rel="noreferrer">
                                <div className='instagram-icon-contact'>
                                    <FontAwesomeIcon icon={faFacebook} />
                                </div>
                            </a>
                        </div>
                    </div>

                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default index