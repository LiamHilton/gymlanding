import "./WhatWeOffer.css";
import SectionTitle from "./SectionTitle/SectionTitle"
import { FaDumbbell, FaHeartbeat, FaUtensils } from "react-icons/fa";
import Offer1 from "../assets/offer.jpg"; // Replace with your image path

const WhatWeOffer = () => {
  return (
    <section className="offer">
        <SectionTitle 
        title="What We Offer" 
        text="Transform your fitness journey with expert coaching, tailored programs, and a holistic approach to health." 
      />
      
      <div className="offer-grid">
        {/* Left Column - Image */}
        <div className="offer-image">
          <img src={Offer1} alt="Training Session" />
        </div>

        {/* Middle Column - Features */}
        <div className="offer-details">
          <div className="offer-item">
            <FaDumbbell className="offer-icon" />
            <p>Personalized Programs</p>
          </div>
          <div className="offer-item">
            <FaHeartbeat className="offer-icon" />
            <p>Holistic Health & Wellness</p>
          </div>
          <div className="offer-item">
            <FaUtensils className="offer-icon" />
            <p>Nutrition Guidance</p>
          </div>
        </div>

        {/* Right Column - More Details */}
        <div className="offer-details">
          <div className="offer-item">
            <FaDumbbell className="offer-icon" />
            <p>Strength & Conditioning</p>
          </div>
          <div className="offer-item">
            <FaHeartbeat className="offer-icon" />
            <p>1-on-1 Coaching</p>
          </div>
          <div className="offer-item">
            <FaUtensils className="offer-icon" />
            <p>Flexible Workout Plans</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
