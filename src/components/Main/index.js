import React from 'react'
import background from '../../assets/background.webp'
import '../../components/Main/style/style.css'

function index() {
  return (
    <>
        <img src={background} alt='background' className='background-image'/>
    </>
  )
}

export default index