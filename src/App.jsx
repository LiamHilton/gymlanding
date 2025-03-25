import React from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CTA from './Components/CTA/CTA';
import WhatWeOffer from './Components/WhatWeOffer';
import ClassesSection from './Components/ClassesSection';

import AboutUs from './Components/AboutUs';
import ReviewSection from './Components/ReviewSection';
import Pricing from './Components/Pricing';
import FAQ from './Components/FAQ/FAQSection';
import CTAsub from './Components/CTASUB/CTAsub';
import BlogSection from './Components/BlogSection';
import ContactForm from './Components/ContactForm';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <CTA/>
      <WhatWeOffer/>
      <ClassesSection/>
      <AboutUs/>
      <ReviewSection/>
      <Pricing/>
      <FAQ/>
      <CTAsub/>
      <BlogSection/>
      <ContactForm/>
      <Footer/>

    </div>
  )
}

export default App