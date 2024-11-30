// import { useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MembersSection from './components/MembersSection'
import Navbar from './components/Navbar'
import NewFeature from './components/NewFeature'
import PricingCard from './components/PricingCard'
import Reviews from './components/Reviews'
import SeoSection from './components/SeoSection'
import Steps from './components/Steps'
import Video from './components/Video'


function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <SeoSection />
      <MembersSection />
      <Video />
      <NewFeature />
      <Reviews />
      <Steps />
      <PricingCard />
      <Footer />
    </>
  )
}

export default App
