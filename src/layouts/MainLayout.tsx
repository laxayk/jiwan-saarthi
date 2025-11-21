import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className="app-root">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
