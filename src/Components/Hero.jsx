import React from 'react';
import './Hero.css'; // Make sure to import your CSS file
import Hero1 from '../assets/hero1.jpg'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import icons from react-icons
import customer1 from '../assets/customer1.jpg';
import customer2 from '../assets/customer2.jpg';
import customer3 from '../assets/customer3.jpg';
import customer4 from '../assets/customer4.jpg';

// const scrollToSection = (id) => {
//     setTimeout(() => {
//       const section = document.getElementById(id);
//       if (section) {
//         window.scrollTo({
//           top: section.offsetTop - 50,
//           behavior: "smooth",
//         });
//       }
//     }, 500); // Delays scrolling by 500ms
//   };


const Hero = () => {
  return (
    <section id="home"  className="hero">
      <div className="hero-left">
        {/* <h1>Elevate Your Fitness</h1> */}
        <h1>ELEVATE TODAY WITH PERSONAL PLANS.</h1>
        <p>Achieve your goals with expert coaching and tailored programs designed just for you.</p>
        <div className="hero-buttons">
          <button className="btn">Book a Session</button>
          <button className="btn2">Explore More</button>
        </div>
        <div className="happy-customers">
            <div className="happy-customers-container">
          <div className="customer-image">
            <img src={customer1} alt="Happy Customer" />
          </div>
          <div className="customer-image">
            <img src={customer2} alt="Happy Customer" />
          </div>
          <div className="customer-image">
            <img src={customer3} alt="Happy Customer" />
          </div>
          <div className="customer-image">
            <img src={customer4} alt="Happy Customer" />
            </div>
            
            <h2 className="happy-customers-text">1000+ Happy Customers</h2>
          </div>
         

      </div>
      </div>
      <div className="hero-right">
        <img src={Hero1} alt="Fitness training" />
        
        <div className="social-media-box">
        <a href="https://instagram.com/ELEVATE" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/ELEVATE" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://instagram.com/ELEVATE" className="social-icon" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
