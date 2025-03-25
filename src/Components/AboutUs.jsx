import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle/SectionTitle";
import { FaCheckCircle, FaHeart, FaUsers, FaMedal } from "react-icons/fa";
import "./AboutUs.css"; 
import customer2 from "../assets/customer2.jpg"; // Replace with actual image path

const AboutUs = () => {
  const points = [
    { icon: <FaCheckCircle />, title: "Expert Coaching", text: "Years of experience in personal training, ensuring you get the best guidance." },
    { icon: <FaHeart />, title: "Holistic Health", text: "A balanced approach to fitness, including nutrition and mindset." },
    { icon: <FaUsers />, title:  "Community Support", text: "Join a supportive fitness community that keeps you motivated and accountable." },
    { icon: <FaMedal />, title: "Proven Results", text: "Join a community of successful clients who have transformed their lives." }

];

  return (
    <section id="about" className="why-choose-me">
      <SectionTitle title="Why Choose Me" text="Discover the key reasons why my training approach will elevate your fitness journey." />
      
      <div className="content">
        {/* Left - Benefits */}
        <div className="benefits">
          {points.map((point, index) => (
            <motion.div 
              key={index} 
              className="benefit-box"
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: index * 0.2, duration: 0.8 }}
            >
              <span className="icon">{point.icon}</span>
              <div className="descriptions">
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right - Image */}
        <motion.div 
          className="image-container"
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.5 }}
        >
          <img src={customer2} alt="Personal Trainer" />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;