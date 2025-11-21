import React from 'react'

const StepCard: React.FC<{title:string, children:React.ReactNode}> = ({title, children}) => (
  <div className="card" style={{flex:1, minWidth:220}}>
    <h3 style={{marginTop:0}}>{title}</h3>
    <div style={{color:'var(--text-muted)'}}>{children}</div>
  </div>
)

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="how-it-works container">
        <h2 style={{textAlign:'center'}}>How It Works</h2>
        <div style={{height:18}} />
        <div className="cards-row">
        <StepCard title="📥 Subscribe">
          You receive our Welcome Kit PDF and a simple explanation of how to share reports clearly.
        </StepCard>

        <StepCard title="📤 Share Your Details">
          Send clear photos of your reports. We understand your case, treatment stage, and needs.
        </StepCard>

        <StepCard title="🤝 Begin Your Companion Journey">
          Daily WhatsApp guidance begins. First structured call scheduled within 72 hours (depending on plan).
        </StepCard>

        </div>
      </div>
    </section>
  )
}
export default HowItWorks
