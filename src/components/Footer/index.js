import React from 'react'
import '../../components/Footer/styles/style.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function index() {
    return (
        <div>

            <div className='footer mt-20 sm:mt-10 w-full flex items-center justify-center'>
                <AnimationOnScroll animateIn="animate__fadeIn">

                    <div className='footer-wrapper rounded-xl p-8 flex items-center justify-between m-10'>
                        <h1 className="text-lg font-medium">CONTACT US</h1>
                        <a href='https://www.instagram.com/vibrancevit/' target="_blank" rel="noreferrer">
                            <div className='instagram-icon-contact'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </div>
                        </a>
                    </div>

                </AnimationOnScroll>
            </div>
        </div>
    )
}

export default index