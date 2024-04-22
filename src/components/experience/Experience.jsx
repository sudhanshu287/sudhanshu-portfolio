import React from "react";
import "./Experience.css";
import JavaImg from "../../images/SkillsImages/Java.png";
import JavascriptImg from "../../images/SkillsImages/javascript.png";
import ReactImg from "../../images/SkillsImages/react.png";
import BootstrapImg from "../../images/SkillsImages/bootstrap.png";
import HtmlImg from "../../images/SkillsImages/html5.png";
import CssImg from "../../images/SkillsImages/css3.png";
import ScssImg from "../../images/SkillsImages/sass.png";
import VsCodeImg from "../../images/SkillsImages/vs-code.png";
import GitImg from "../../images/SkillsImages/git.png";
import GitHubImg from "../../images/SkillsImages/github.png";
import { motion } from "framer-motion";
const Experience = () => {
  const frontendSkills = [
    {
      skillImage: JavascriptImg,
      skillTitle: "JavaScript",
    },
    {
      skillImage: ReactImg,
      skillTitle: "React.Js",
    },
    {
      skillImage: HtmlImg,
      skillTitle: "HTML5",
    },
    {
      skillImage: CssImg,
      skillTitle: "CSS3",
    },
    {
      skillImage: BootstrapImg,
      skillTitle: "Bootstrap",
    },
    {
      skillImage: ScssImg,
      skillTitle: "SASS",
    },
  ];
  const backendSkills=[
    
      {
        skillImage: JavaImg,
        skillTitle: "Java",
      },
      {
        skillImage: JavaImg,
        skillTitle: "SpringBoot",
      },
      {
        skillImage: JavaImg,
        skillTitle: "Hibernate",
      },
      {
        skillImage: JavaImg,
        skillTitle: "OracleDB",
      },

    
  ]
  const others=[
    {
      skillImage: VsCodeImg,
      skillTitle: "VS Code",
    },
    {
      skillImage: GitImg,
      skillTitle: "Git",
    },
    {
      skillImage: GitHubImg,
      skillTitle: "GitHub",
    },
  ]
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="experience__frontend"
        >
          <h3>Frontend</h3>
          <div className="experience__content">
            <article className="skills">
              <div className="skills__list">
                {frontendSkills.map((item,index) => 
                  <div key={index} className="skill__box">
                    <img src={item.skillImage} alt="" />
                    <span className="skill__center">{item.skillTitle}</span>
                  </div>
                )}
              </div>
            </article>
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
          className="experience__backend"
        >
          <h3>Backend</h3>
          <div className="experience__content">
            <article className="skills">
            <div className="skills__list">
                {backendSkills.map((item,index) => 
                  <div key={index} className="skill__box">
                    <img src={item.skillImage} alt="" />
                    <span className="skill__center">{item.skillTitle}</span>
                  </div>
                )}
              </div>
            </article>
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
          className="experience__others"
        >
          <h3>Others</h3>
          <div className="experience__content">
            <article className="skills">
            <div className="skills__list">
                {others.map((item,index) => 
                  <div key={index} className="skill__box">
                    <img src={item.skillImage} alt="" />
                    <span className="skill__center">{item.skillTitle}</span>
                  </div>
                )}
              </div>
            </article>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
