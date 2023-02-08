import React, { useState, useRef } from 'react'
import '../../components/Sports/styles/style.css'
// import { faMedal } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 
import { faMedal } from '@fortawesome/free-solid-svg-icons'
// import { Link } from "react-router-dom";



function Index() {


    const [text, setText] = useState("Sports & Cultural Fest Are Now Live | ");
    const textRef = useRef();

    // const handleClick = () => {
    //     textRef.current.classList.toggle("scrolling-text");
    // };

    const handleMouseEnter = () => {
        textRef.current.style.animationPlayState = "paused";
    };

    const handleMouseLeave = () => {
        textRef.current.style.animationPlayState = "running";
    };




    return (
        <>
            <div className='sports-container flex items-center justify-center w-full mt-10 mb-20'>
                <div className='sports-wrapper text-white w-screen flex gap-14' onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
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

                    
                    <p ref={textRef} className="text cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMedal} className='mr-3' />
                        {text}
                        <a href='https://vitchennaievents.com/vibrance/' target={'_blank'} rel='noreferrer'>REGISTER NOW</a>
                        <FontAwesomeIcon icon={faMedal} className='ml-3' />
                    </p>
                    
                    <p ref={textRef} className="text cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMedal} className='mr-3' />
                        {text}
                        <a href='https://vitchennaievents.com/vibrance/' target={'_blank'} rel='noreferrer'>REGISTER NOW</a>
                        <FontAwesomeIcon icon={faMedal} className='ml-3' />
                    </p>
                    <p ref={textRef} className="text cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMedal} className='mr-3' />
                        {text}
                        <a href='https://vitchennaievents.com/vibrance/' target={'_blank'} rel='noreferrer'>REGISTER NOW</a>
                        <FontAwesomeIcon icon={faMedal} className='ml-3' />
                    </p>
                    <p ref={textRef} className="text cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMedal} className='mr-3' />
                        {text}
                        <a href='https://vitchennaievents.com/vibrance/' target={'_blank'} rel='noreferrer'>REGISTER NOW</a>
                        <FontAwesomeIcon icon={faMedal} className='ml-3' />
                    </p>
                    <p ref={textRef} className="text cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMedal} className='mr-3' />
                        {text}
                        <a href='https://vitchennaievents.com/vibrance/' target={'_blank'} rel='noreferrer'>REGISTER NOW</a>
                        <FontAwesomeIcon icon={faMedal} className='ml-3' />
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