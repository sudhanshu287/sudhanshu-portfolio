import React from "react";
import ME from "../../images/sdn.png";
import "./About.css";
import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="about__me"
        >
          <div className="about__me-image">
            <img src={ME} alt="About profile" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="about__content"
        >
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ months</small>
            </article>
            <article className="about__card">
            <FaRegUser className="about__icon" />
              <h5>Projects</h5>
              <small>10+ projects</small>
            </article>
          </div>
          <p>
            I am a Frontend Web Developer. I have a basic knowledge of data
            structure and algorithms. As a frontend web developer, I have an
            experience in JavaScript programming, HTML, CSS, and libraries like
            Bootstrap and React.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
