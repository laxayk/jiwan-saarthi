import React from 'react'
import { CONTACT_EMAIL } from '../../utils/constants'
const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div>© Jiwan 2 Live Healthcare Pvt Ltd</div>
      <div style={{marginTop:8}}>
        <a href="#">Privacy Policy</a> · <a href="#">Terms</a> · <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </div>
    </footer>
  )
}
export default Footer
