import CurrencyPair from './components/CurrencyPair'

import Headsection from './components/sections/Headsection'
import RestOfPage from './components/sections/RestOfPage'

export default function Home() {
  return (
    <div>
      <Headsection />
      <CurrencyPair />
      <RestOfPage />
    </div>
  )
}
