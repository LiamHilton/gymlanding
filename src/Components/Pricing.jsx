import React from "react";
import SectionTitle from "./SectionTitle/SectionTitle" // Assuming you have this component
import PricingCard from "./PricingCard/PricingCard"; // The PricingCard component you just created
import './Pricing.css';

const Pricing = () => {
  const pricingData = [
    {
      packageName: "Starter",
      price: "29",
      features: ["1-on-1 training", "Basic workout plan", "Weekly check-ins"],
    },
    {
      packageName: "Intermediate",
      price: "59",
      features: ["Personalized training plan", "Bi-weekly check-ins", "Group classes"],
    },
    {
      packageName: "Warrior",
      price: "99",
      features: ["Advanced training plan", "Weekly check-ins", "Access to exclusive group sessions"],
    },
  ];

  return (
    <section  id="pricing"  className="pricing-section">
      <SectionTitle title="Our Training Packages" text="Choose the perfect package for your fitness journey" />
      <div className="pricing-grid">
        {pricingData.map((pkg, index) => (
          <PricingCard 
            key={index} 
            packageName={pkg.packageName} 
            price={pkg.price} 
            features={pkg.features} 
            isPopular={pkg.packageName === "Intermediate"} 
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
