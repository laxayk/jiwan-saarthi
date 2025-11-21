import React from 'react'
import { WHATSAPP_NUMBER } from '../../utils/constants'
import { scrollToHowItWorks } from '../helpers/scroll'

const Hero: React.FC = () => {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g,'')}`
  return (
    <section className="hero container section" aria-label="Hero">
      <div className="hero-left">
        <h1 style={{margin:'0 0 12px'}}>A Companion in Your Cancer Journey.</h1>
        <p style={{margin:'0 0 18px'}}>Daily guidance, emotional support, and clarity — so you never walk cancer alone.</p>
        <div style={{display:'flex', gap:12, flexWrap:'wrap'}}>
          <a className="btn btn-primary" href={waLink} rel="noopener noreferrer" target="_blank">Chat on WhatsApp</a>
          <button className="btn btn-ghost" onClick={scrollToHowItWorks}>How It Works</button>
        </div>
      </div>
      <div className="hero-right">
        <img 
          className='para-image'
          src="/illustrations/hero.svg" 
          alt="Supportive illustration"
        />
      </div>
    </section>
  )
}
export default Hero
