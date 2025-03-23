import { useState, useEffect } from "react";
import Card from './Card/Card'; // Import the Card component
import { FaDumbbell, FaHeartbeat, FaApple, FaUtensils, FaCog, FaRunning } from "react-icons/fa"; // Replace with your icons
import SectionTitle from "./SectionTitle/SectionTitle" // Your reusable section title component
import "./WhatSetsUsApart.css";

const WhatSetsUsApart = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const totalCards = 6; // Total number of cards

  // Sample data for cards
  const cardData = [
    { icon: <FaDumbbell />, title: "Personalized Training", text: "Tailored programs for your fitness goals.", link: "/training" },
    { icon: <FaHeartbeat />, title: "Holistic Health", text: "Mind-body connection through fitness.", link: "/health" },
    { icon: <FaApple />, title: "Nutrition Support", text: "Healthy meal plans to fuel your journey.", link: "/nutrition" },
    { icon: <FaUtensils />, title: "Diet Plans", text: "Customized diet plans for every individual.", link: "/diet" },
    { icon: <FaCog />, title: "24/7 Support", text: "Round-the-clock assistance from experts.", link: "/support" },
    { icon: <FaRunning />, title: "Group Classes", text: "Join our energetic group workouts.", link: "/classes" },
  ];

 
 // Adjust number of visible cards on screen size change
 useEffect(() => {
  const updateCardsPerView = () => {
    if (window.innerWidth <= 450) {
      setCardsPerView(1); // Small mobile
    } else if (window.innerWidth <= 768) {
      setCardsPerView(2); // Mobile screens
    } else if (window.innerWidth <= 820) {
      setCardsPerView(2); // Tablets
    } else {
      setCardsPerView(3); // Desktops
    }
  };

  window.addEventListener("resize", updateCardsPerView);
  updateCardsPerView(); // Run on mount

  return () => window.removeEventListener("resize", updateCardsPerView);
}, []);

const goToCard = (dotIndex) => {
  setCurrentIndex(dotIndex * cardsPerView);
};
  return (
    <section className="what-sets-us-apart">
      <SectionTitle 
        title="What Sets Us Apart" 
        text="Explore the unique features that make us the best choice for your fitness journey."
      />
      <div className="carousel">
        <div className="carousel-container">
        {cardData.slice(currentIndex, currentIndex + cardsPerView).map((card, index) => (
            <Card 
              key={index} 
              icon={card.icon} 
              title={card.title} 
              text={card.text} 
              link={card.link} 
            />
          ))}
        </div>
      </div>
      
         
      {/* Toggle Dots */}
      <div className="dots">
        {Array.from({ length: Math.ceil(totalCards / cardsPerView) }).map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`dot ${currentIndex / cardsPerView === dotIndex ? "active" : ""}`}
            onClick={() => goToCard(dotIndex)}
          ></span>
        ))}
      </div>
    </section>
  );
};
export default WhatSetsUsApart;
