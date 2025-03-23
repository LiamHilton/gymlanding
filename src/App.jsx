import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CTA from './Components/CTA/CTA';
import WhatWeOffer from './Components/WhatWeOffer';
import WhatSetsUsApart from './Components/WhatSetsUsApart';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CTA/>
      <WhatWeOffer/>
      <WhatSetsUsApart/>
    </div>
  )
}

export default App