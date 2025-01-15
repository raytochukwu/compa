import BrandsSection from './components/BrandsSection'
import CurrencyPair from './components/CurrencyPair'
import HowItWorks from './components/HowItWorks'
import NewsSection from './components/NewsSection'
import RateAlertSection from './components/RateAlertSection'
import Headsection from './components/sections/Headsection'
import ServicesSection from './components/ServicesSection'

export default function Home() {
  return (
    <div className="  w-full">
      <Headsection />
      <CurrencyPair />
      <HowItWorks />
      <BrandsSection />
      <ServicesSection />
      <RateAlertSection />
      <NewsSection />
    </div>
  )
}
