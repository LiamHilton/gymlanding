import React, { useState } from "react";
import { motion } from "framer-motion";
import './PricingCard.css';

const PricingCard = ({ packageName, price, features, isPopular }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div 
      className={`pricing-card ${isPopular ? "popular" : ""}`}
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
      {isPopular && <div className="popular-badge">Most Popular</div>}
      <div className="pricing-header">
        <h3>{packageName}</h3>
        <p className="price">${price}</p>
      </div>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>
            <span className="tick">✔</span> {feature}
          </li>
        ))}
      </ul>
      <button className="see-more" onClick={toggleAccordion}>
        {isOpen ? "See Less" : "See More"}
      </button>
      {isOpen && (
        <div className="accordion-content">
          <p>Additional benefits and details about this package.</p>
        </div>
      )}
    </motion.div>
  );
};

export default PricingCard;
