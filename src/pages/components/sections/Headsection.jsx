import React from 'react'
import Navbar from '../NavBar'
import HeroSection from '../HeroSection'

const Headsection = () => {
  return (
    <div className=' relative bg-[#FFD99726]'>
        <div className=' absolute top-0 left-0'>
            <img src="/images/hand.png" alt="image" />
        </div>
        <div className=' absolute top-[80px] right-0'>
            <img src="/images/money.png" alt="image" />
        </div>
        <Navbar/>
        <HeroSection/>
        </div>
  )
}

export default Headsection