import React from 'react'
import '../../components/Footer/styles/style.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


function index() {
    return (
        <div>

            <AnimationOnScroll animateIn="animate__fadeIn">
                <div className='footer mt-40 sm:mt-10 h-full w-full flex items-center justify-center mb-40'>

                    <div className='footer-wrapper bg-white w-3/4 h-full rounded-xl p-8 flex items-center justify-center flex-col'>
                        <h1 className="text-lg font-bold mb-4">CONTACT US</h1>
                        <form className='w-full'>
                            <input type="text" className="border rounded-md p-2 mb-4 w-full" placeholder='Name' />
                            <input type="email" className="border rounded p-2 mb-4 w-full" placeholder='Email' />
                            <textarea className="border rounded p-2 mb-4 w-full" rows={4} placeholder='Message' />
                            <button className="send-button text-white py-2 px-6 rounded-lg">
                                Send
                            </button>
                        </form>

                    </div>

                </div>
            </AnimationOnScroll>
        </div>
    )
}

export default index