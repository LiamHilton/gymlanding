import { useState } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import SectionTitle from "./SectionTitle/SectionTitle"; // Your reusable title component
import "./ClassesSection.css";
import class1 from '../assets/Classes/class1.jpg'
import class2 from '../assets/Classes/class2.jpg'
import class3 from '../assets/Classes/class3.jpg'
import class4 from '../assets/Classes/class4.jpg'
import class5 from '../assets/Classes/class5.jpg'
// import class6 from '../assets/Classes/class6.jpg'


const ClassesSection = () => {
        const [selectedClass, setSelectedClass] = useState(0);

        const classData = [
            { title: "Strength Training", description: "Strength training focuses on building muscle mass, increasing strength, and enhancing endurance through resistance exercises. In our classes, you'll work with free weights, machines, and bodyweight exercises, progressively challenging your muscles for maximum growth and toning. Whether you're a beginner or seasoned athlete, these workouts are designed to help you achieve your strength goals and improve your overall fitness level.", image: class1, link: "/yoga" },
            { title: "HIIT Workouts", description: "HIIT is a dynamic and fast-paced workout that alternates between short bursts of intense activity and rest or low-intensity exercise. This method has been proven to burn fat, boost cardiovascular endurance, and improve metabolic rate. HIIT classes are designed to push you to your limits with exercises like jumping jacks, burpees, sprints, and high-intensity circuits, giving you maximum results in less time.", image: class2, link: "/hiit" },
            { title: "Yoga & Mobility", description: "Yoga and mobility classes combine traditional yoga poses with mobility exercises to improve flexibility, joint health, and overall body awareness. These classes focus on stretching, breathing, and strengthening key muscle groups to enhance mobility, reduce stress, and prevent injury. Whether you’re a beginner or advanced practitioner, you'll leave feeling more balanced, centered, and flexible.", image: class3, link: "/pilates" },
            { title: "Cardio & Endurance", description: "Cardio classes are designed to increase your heart rate and stamina, improving cardiovascular health, endurance, and overall fitness. Expect a variety of activities, including cycling, running, rowing, and jump rope exercises. Cardio training is not only effective for fat loss but also helps boost energy levels, improve lung capacity, and enhance mental clarity.", image: class4, link: "/zumba" },
            { title: "CrossFit", description: "CrossFit combines strength training, Olympic weightlifting, and high-intensity interval training to build functional fitness. Our CrossFit classes are scalable to suit all fitness levels, focusing on improving power, agility, endurance, and coordination. You'll experience dynamic workouts that incorporate movements like lifting, jumping, running, and rowing, all designed to increase overall performance and strength.", image: class5, link: "/crossfit" }
            // { title: "Boxing", description: "Boxing classes offer a high-energy workout that focuses on improving strength, speed, endurance, and coordination through a series of punches, footwork drills, and heavy bag training. Our sessions will help you develop greater cardiovascular fitness, burn fat, and build confidence in self-defense. Whether you’re training for fitness or preparing for competition, boxing is a full-body workout that leaves you feeling empowered and strong.", image: class6, link: "/boxing" },
          ];
      
  return (
    <section className="classes">
      <SectionTitle title="Our Classes" text="Explore our variety of fitness classes." />
      
      {/* Buttons */}
      <div className="button-container">
        {classData.map((cls, index) => (
          <button key={index} onClick={() => setSelectedClass(index)}>{cls.title}</button>
        ))}
      </div>

      {/* Image and Description */}
      <div className="class-details">
        

        <motion.div
          className="class-description"
          key={classData[selectedClass].description}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3>{classData[selectedClass].title}</h3>
          <p>{classData[selectedClass].description}</p>
          <a href={classData[selectedClass].link} className="btn">Learn More</a>
        </motion.div>

        <motion.div
          className="class-image"
          key={classData[selectedClass].image}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={classData[selectedClass].image} alt={classData[selectedClass].title} />
        </motion.div>
      </div>
    </section>
  );
};

export default ClassesSection;
