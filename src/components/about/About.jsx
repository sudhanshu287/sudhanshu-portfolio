import React from 'react';
import ME from '../../images/sdn.png';
import './About.css';
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About profile" />
          </div>
        </div>
        <div className="about__content">
          
          <p>
          I am a Frontend Web Developer.
I have a basic knowledge of data structure and algorithms. As a frontend web developer, I have an experience in JavaScript programming, HTML, CSS, and frameworks like Bootstrap and React.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;