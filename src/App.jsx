import React from 'react'
import Navbar from './components/Navbar'
import HeroSect from './components/HeroSect'
import Features from './components/Features'
import Workflow from './components/Workflow'
import Pricing from './components/Pricing'
import Tetsmonials from './components/tetsmonials'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <Navbar/>
      <div className="my-40 max-w-7xl mx-auto">
      <HeroSect/>
      <Features />
      <Workflow/>
      <Pricing/>
      <Tetsmonials/>
      </div>
      <Footer/>
      
      
    </div>
  )
}

export default App
