// import { useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import MembersSection from './components/MembersSection'
import Navbar from './components/Navbar'
import NewFeature from './components/NewFeature'
import Reviews from './components/Reviews'
import SeoSection from './components/SeoSection'
import SubscriptionPlan from './components/SubscriptionPlan'
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
      <SubscriptionPlan />
      <Footer />
    </>
  )
}

export default App
