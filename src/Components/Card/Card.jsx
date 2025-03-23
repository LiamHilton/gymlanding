import { FaDumbbell, FaHeartbeat, FaApple } from "react-icons/fa"; // Replace with your icons
import "./Card.css";

const Card = ({ icon, title, text, link }) => {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-icon">{icon}</div>
          <h3>{title}</h3>
        </div>
        <p>{text}</p>
        <a href={link} className="btn">Learn More</a>
      </div>
    );
  };
  
  export default Card;
