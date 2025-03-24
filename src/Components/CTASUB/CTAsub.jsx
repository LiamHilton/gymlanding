import React from 'react';
import './CTAsub.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const CTAsub = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
      <SectionTitle title="Start your fitness journey today" text="Choose the perfect package for your fitness journey" />

        <a href="#contact" className="cta-button">Get Started</a>
      </div>
    </section>
  );
};

export default CTAsub;