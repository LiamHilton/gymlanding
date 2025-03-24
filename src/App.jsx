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
import FAQ from './Components/FAQ/FAQSection';


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
      <FAQ/>
    </div>
  )
}

export default App