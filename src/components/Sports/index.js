import React, { useState, useRef } from 'react'
import '../../components/Sports/styles/style.css'
// import { faMedal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { faMedal } from '@fortawesome/free-solid-svg-icons'


function Index() {


    const [text, setText] = useState("Sports fest is now live");
    const textRef = useRef();

    const handleClick = () => {
        textRef.current.classList.toggle("scrolling-text");
    };


    return (
        <>
            <div className='sports-container flex items-center justify-center w-full mt-10 mb-10'>
                <div className='sports-wrapper text-white w-screen'>
                    {/* <div id='rssBlock' className='flex'>
                        <p className="cnnContents flex w-screen">
                            <span className="marqueeStyle flex gap-10">&nbsp;
                                <span className='w-full'>
                                    <FontAwesomeIcon icon={faMedal} className='mr-3' />
                                    Sports fest is now live | <a className='w-screen' href='/'>REGISTER NOW</a>
                                    <FontAwesomeIcon icon={faMedal} className='ml-3' />
                                </span>
                                <span className='w-full'>
                                    <FontAwesomeIcon icon={faMedal} className='mr-3' />
                                    Sports fest is now live | <a className='w-screen' href='/'>REGISTER NOW</a>
                                    <FontAwesomeIcon icon={faMedal} className='ml-3' />
                                </span>
                                <span className='w-full'>
                                    <FontAwesomeIcon icon={faMedal} className='mr-3' />
                                    Sports fest is now live | <a className='w-screen' href='/'>REGISTER NOW</a>
                                    <FontAwesomeIcon icon={faMedal} className='ml-3' />
                                </span>
                                <span className='w-full'>
                                    <FontAwesomeIcon icon={faMedal} className='mr-3' />
                                    Sports fest is now live | <a className='w-screen' href='/'>REGISTER NOW</a>
                                    <FontAwesomeIcon icon={faMedal} className='ml-3' />
                                </span>
                                <span className='w-full'>
                                    <FontAwesomeIcon icon={faMedal} className='mr-3' />
                                    Sports fest is now live | <a className='w-screen' href='/'>REGISTER NOW</a>
                                    <FontAwesomeIcon icon={faMedal} className='ml-3' />
                                </span>
                                <span className='w-full'>
                                    <FontAwesomeIcon icon={faMedal} className='mr-3' />
                                    Sports fest is now live | <a className='w-screen' href='/'>REGISTER NOW</a>
                                    <FontAwesomeIcon icon={faMedal} className='ml-3' />
                                </span>
                            </span>
                        </p>
                    </div> */}

                    {/* <div className="tickerwrapper">
                        <ul className='list'>
                            <li className='listitem'>
                                <span>This is list item 1</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 2</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 3</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 4</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 5</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 1</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 2</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 3</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 4</span>
                            </li>
                            <li className='listitem'>
                                <span>This is list item 5</span>
                            </li>
                        </ul>
                    </div> */}

                    <p ref={textRef} className="text cursor-pointer" onMouseOverCapture={handleClick}>
                        {text}
                    </p>
                </div>




            </div>
        </>
    )
}


export default Index


// <FontAwesomeIcon icon={faMedal} className='mr-3' />
//                                     Sports fest is now live | <span className='w-screen'>REGISTER NOW</span>
//                                     <FontAwesomeIcon icon={faMedal} className='ml-3' />