import React from 'react'

const Disclaimer: React.FC = () => {
  return (
    <section className="section container">
      <div className="disclaimer">
        <strong>Jiwan 360° provides support, guidance, and clarity.</strong>
        <div style={{height:6}} />
        <div style={{color:'var(--text-muted)'}}>This service does <strong>NOT</strong> replace your oncologist or emergency medical care. For urgent issues, visit the nearest hospital immediately. Telemedicine Guidelines 2020 compliant.</div>
      </div>
    </section>
  )
}
export default Disclaimer
