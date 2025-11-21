import React from 'react'
import { scrollToPlans, scrollToTop } from '../helpers/scroll'
const Header: React.FC = () => {
  return (
    <header className="header container">
      <div style={{fontWeight:700, fontSize:18, cursor: "pointer"}} onClick={scrollToTop}>
        JIWAN SAARTHI
      </div>
      <div>
        <button className="btn btn-primary" onClick={scrollToPlans}>Join Now →</button>
      </div>
    </header>
  )
}
export default Header
