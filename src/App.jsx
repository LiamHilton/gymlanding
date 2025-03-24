import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CTA from './Components/CTA/CTA';
import WhatWeOffer from './Components/WhatWeOffer';
import ClassesSection from './Components/ClassesSection';
import WhatSetsUsApart from './Components/WhatSetsUsApart';
import WhyChooseMe from './Components/WhyChooseMe';
import ReviewSection from './Components/ReviewSection';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CTA/>
      <WhatWeOffer/>
      <ClassesSection/>
      <WhatSetsUsApart/>
      <WhyChooseMe/>
      <ReviewSection/>
    </div>
  )
}

export default App