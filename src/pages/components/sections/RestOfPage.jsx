import React from 'react'
import HowItWorks from '../HowItWorks'
import NewsSection from '../NewsSection'
import RateAlertSection from '../RateAlertSection'
import ServicesSection from '../ServicesSection'
import BrandsSection from '../BrandsSection'
import Footer from '../Footer'



const RestOfPage = () => {
  return (
    <div> <HowItWorks />
   <BrandsSection/>
    <ServicesSection />
    <RateAlertSection />
    <NewsSection />
    <Footer/>
    </div>
  )
}

export default RestOfPage