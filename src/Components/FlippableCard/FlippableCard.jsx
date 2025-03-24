import { useState } from "react";
import "./FlippableCard.css";

const FlippableCard = ({ title, image, description }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div 
      className={`flippable-card ${flipped ? "flipped" : ""}`}
      onClick={() => setFlipped(!flipped)}
    >
      <div className="card-inner">
        {/* Front Side */}
        <div className="card-front">
          <img src={image} alt={title} />
          <h3>{title}</h3>
        </div>

        {/* Back Side */}
        <div className="card-back">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippableCard;
