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

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Programming</h3>
          <div className="experience__content">
            <article className="skills">
              <div className="skills__list">
                <div className="skill__img">
                  <img src={JavaImg} alt="" />
                  <div className="skill__center">JAVA</div>
                </div>

                <div className="skill__img">
                  <img src={JavascriptImg} alt="" />
                  <div className="skill__center">JavaScript</div>
                </div>

                <div className="skill__img">
                  <img src={ReactImg} alt="" />
                  <div className="skill__center">React</div>
                </div>

                <div className="skill__img">
                  <img src={BootstrapImg} alt="" />
                  <div className="skill__center">BootStrap</div>
                </div>

                <div className="skill__img">
                  <img src={HtmlImg} alt="" />
                  <div className="skill__center">HTML</div>
                </div>

                <div className="skill__img">
                  <img src={CssImg} alt="" />
                  <div className="skill__center">CSS</div>
                </div>

                <div className="skill__img">
                  <img src={ScssImg} alt="" />
                  <div className="skill__center">SASS</div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Tools</h3>
          <div className="experience__content">
          <article className="skills">
              <div className="skills__list">
                <div className="skill__img">
                  <img src={VsCodeImg} alt="" />
                  <div className="skill__center">VsCode</div>
                </div>

                <div className="skill__img">
                  <img src={GitImg} alt="" />
                  <div className="skill__center">Git</div>
                </div>

                <div className="skill__img">
                  <img src={GitHubImg} alt="" />
                  <div className="skill__center">GitHub</div>
                </div>

                
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
