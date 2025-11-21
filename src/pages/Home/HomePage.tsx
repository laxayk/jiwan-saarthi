import React from 'react'
import Hero from '../../components/Hero/Hero'
import WhatWeAre from '../../components/WhatWeAre/WhatWeAre'
import HowItWorks from '../../components/HowItWorks/HowItWorks'
import Plans from '../../components/Plans/Plans'
import Disclaimer from '../../components/Disclaimer/Disclaimer'
import Positioning from '../../components/Positioning/Positioning'

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <WhatWeAre />
      <HowItWorks />
      <Positioning />
      <Plans />
      <Disclaimer />
    </>
  )
}
export default HomePage
