import React from "react";
import { motion } from "framer-motion";
import "./Blog.css";
import SectionTitle from "./SectionTitle/SectionTitle";
import { FaArrowRight } from "react-icons/fa";
import blog1 from '../assets/Blog/blog1.jpg'
import blog2 from '../assets/Blog/blog2.jpg'
import blog3 from '../assets/Blog/blog3.jpg'
import blog4 from '../assets/Blog/blog4.jpg'
import blog5 from '../assets/Blog/blog5.jpg'

const blogPosts = [
  { id: 1, title: "Boost Your Strength", description: "Learn key exercises to build muscle and enhance endurance.", image: blog1, link: "/blog/strength", size: "large" },
  { id: 2, title: "HIIT for Fat Loss", description: "Discover the power of high-intensity interval training.", image: blog2, link: "/blog/hiit", size: "small" },
  { id: 3, title: "Flexibility & Mobility", description: "Improve mobility and prevent injuries with these tips.", image: blog3, link: "/blog/mobility", size: "medium" },
  { id: 4, title: "Cardio Endurance Tips", description: "Enhance stamina with effective cardio techniques.", image: blog4, link: "/blog/cardio", size: "medium" },
  { id: 5, title: "Mastering Nutrition", description: "Fuel your workouts with the right nutrition.", image: blog5, link: "/blog/nutrition", size: "small" },
];

const BlogSection = () => {
  return (
    <section id="blog" className="blog-section">
     <SectionTitle 
        title="Latest Blog Articles" 
        text="Stay up to date with what we are doing with our weekly updates
        "
      />
    

      <div className="blog-grid">
        <div className="blog-left">
          {blogPosts.slice(0, 2).map((post, index) => (
            <motion.div 
              key={post.id} 
              className="blog-card large" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a href={post.link} className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="blog-right">
          {blogPosts.slice(2).map((post, index) => (
            <motion.div 
              key={post.id} 
              className="blog-card small" 
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="blog-image" style={{ backgroundImage: `url(${post.image})` }}></div>
              <div className="blog-content">
                <h3>{post.title}</h3>
                <p>{post.description}</p>
                <a href={post.link} className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;