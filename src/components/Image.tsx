import React from 'react'
import Desktop from "../assets/illustration-sign-up-desktop.svg"
import Moblie from "../assets/illustration-sign-up-mobile.svg"

const Image: React.FC = () => {
  return (
    <>
        <img src={Desktop} alt="" className='w-2/5 pr-4 rounded-xl hidden md:block' />
        <img src={Moblie} alt="" className='w-full rounded-b-xl md:hidden' />
    </>
  )
}

export default Image