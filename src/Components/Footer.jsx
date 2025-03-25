import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <h2>ELEVATE</h2>
          <p>Achieve your goals with expert coaching and tailored programs designed just for you.</p>
          <div className="social-icons">
          <a href="https://facebook.com/ELEVATEGYM" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://instagram.com/ELEVATEGYM" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/ELEVATEGYM" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><a href="#mission">About Us</a></li>
              <li><a href="#classes">Our Classes</a></li>
              <li><a href="#Blog">Blog</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#FAQ">FAQs</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact</h3>
            <ul>
              <li onClick={() => window.location.href = "mailto:contact@elevategym.com"}>Email Us</li>
              <li onClick={() => window.open("https://goo.gl/maps/example", "_blank")}>Get Directions</li>
              <li onClick={() => window.location.href = "tel:+123456789"}>Call Us</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; {new Date().getFullYear()} ELEVATE. All Rights Reserved. LiamCode</p>
    </footer>
  );
};

export default Footer;
