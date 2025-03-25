import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CTA from './Components/CTA/CTA';
import WhatWeOffer from './Components/WhatWeOffer';
import ClassesSection from './Components/ClassesSection';

import WhyChooseMe from './Components/WhyChooseMe';
import ReviewSection from './Components/ReviewSection';
import Pricing from './Components/Pricing';
import FAQ from './Components/FAQ/FAQSection';
import CTAsub from './Components/CTASUB/CTAsub';
import BlogSection from './Components/BlogSection';
import ContactForm from './Components/ContactForm';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CTA/>
      <WhatWeOffer/>
      <ClassesSection/>
      <WhyChooseMe/>
      <ReviewSection/>
      <Pricing/>
      <FAQ/>
      <CTAsub/>
      <BlogSection/>
      <ContactForm/>

    </div>
  )
}

export default App