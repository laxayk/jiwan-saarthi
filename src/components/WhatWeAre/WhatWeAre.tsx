import React from 'react'

const WhatWeAre: React.FC = () => {
  return (
    <section className="what-we-are section container" aria-label="What we are">
      <div className="what-we-are-left">
        <img
          className='para-image'
          src="illustrations/together.svg" 
          alt="Supportive illustration"
          style={{width: '340px'}}
        />
      </div>
      <div className='what-we-are-right'>
        <h2 style={{textAlign:'center'}}>What is Jiwan Saarthi?</h2>
        <p style={{maxWidth:680, margin:'12px auto 0', textAlign:'center'}}>
          Jiwan Saarthi is a daily companion service for oncology patients and caregivers. We do not replace your doctors — we support you between appointments. Our role is to bring clarity, calm, and direction during one of the most difficult journeys of life.
        </p>
      </div>
    </section>
  )
}
export default WhatWeAre
