import React, { useState } from "react";
import { motion } from 'framer-motion';

import './FAQ.css';
import SectionTitle from '../SectionTitle/SectionTitle';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    { question: "What is Strength Training?", answer: "Strength training involves exercises that target and strengthen muscles, improving overall body strength, endurance, and muscle tone." },
    { question: "What are the benefits of HIIT?", answer: "HIIT (High-Intensity Interval Training) boosts cardiovascular health, burns fat, and improves endurance in a short amount of time." },
    { question: "How often should I do cardio?", answer: "For optimal results, aim for at least 3-5 cardio sessions per week, mixing high-intensity and moderate-intensity workouts." },
    { question: "When will i start seeing results?", answer: "Normally most peole see results within 4-8 weeks but that can depends on many things." },
    { question: "What should I wear to a gym session?", answer: "Wear comfortable, moisture-wicking clothes that allow for free movement. Supportive shoes are recommended for most activities." },
    { question: "Do I need equipment for CrossFit?", answer: "CrossFit often involves a variety of equipment, including barbells, kettlebells, and jump ropes, but bodyweight movements are also a key part of the training." },
    { question: "Is HIIT good for fat loss?", answer: "Yes, HIIT is one of the most effective methods for fat loss, as it increases your metabolism and burns calories even after the workout." },
    { question: "How long should a typical gym session be?", answer: "Most gym sessions last between 45-60 minutes, depending on the workout intensity and goals." },
    { question: "Can weightlifting help with fat loss?", answer: "Yes, weightlifting helps build lean muscle mass, which can increase your metabolism and support fat loss over time." },
    { question: "Is it safe to work out while pregnant?", answer: "Always consult your doctor, but many women can continue working out during pregnancy, with adjustments to their routine based on their doctor's advice." },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle the active index
  };

  return (
    <div id='FAQ'  className="faq-container">
      <SectionTitle title="Frequently Asked Questions" text="Please see below for additional information." />
     
      <div className="faq-grid">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">

<motion.button 
  className="faq-question"
  whileHover={{ scale: 1.05, color: '#C4DE19' }} // Slightly scale up the button and change color on hover
  onClick={() => toggleAnswer(index)}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
              {faq.question}
              <span className="faq-icon">{activeIndex === index ? "-" : "+"}</span>
            </motion.button>
            {activeIndex === index && (
              <motion.div
              className="faq-answer"
              initial={{ opacity: 0, y: -20 }} // Start with the answer slightly above
              animate={{ opacity: 1, y: 0 }} // Animate it to normal position
              transition={{ duration: 0.3 }} // Smooth transition for the answer
            >
                {faq.answer}</motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
