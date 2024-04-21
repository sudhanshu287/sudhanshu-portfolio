import React from "react";
import "./Portfolio.css";
import MovixImg from "../../images/PortfolioImages/movix.png";
import CodeEditorImg from "../../images/PortfolioImages/live-code-editor.png";
// import BlogAppImg from '../../images/PortfolioImages/movix.png';
import WeatherLensImg from "../../images/PortfolioImages/weather-lens.png";
import LoslesVPNImg from "../../images/PortfolioImages/LoslesVPN.png";
import BurgerHouseImg from "../../images/PortfolioImages/Burger-House.png";
import TechStack from "./techStack/TechStack";

const data = [
  {
    id: 1,
    image: MovixImg,
    title: "Movix ( Webapp for Movies and TV shows)",
    techStack: ["React","HTML","SASS",
    ],
    github: "https://github.com/sudhanshu287/movix",
    demo: "https://movix-one.vercel.app/",
  },
  {
    id: 2,
    image: CodeEditorImg,
    title: "Live Code Collab Editor (Code Sync)",
    techStack: ["React","Node.js","HTML","CSS"
      
    ],
    github: "https://github.com/sudhanshu287/live-code-collab-editor",
    demo: "https://live-code-collab-editor.vercel.app/",
  },
  {
    id: 3,
    image: WeatherLensImg,
    title: "Weather Lens",
    techStack: [
     "React","HTML","CSS"
    ],
    github: "https://github.com/sudhanshu287/weather-lens-v2.0",
    demo: "https://weather-lens-v2.vercel.app/",
  },
  {
    id: 4,
    image: LoslesVPNImg,
    title: "LoslesVPN Landing Webpage.",
    techStack: [
      "Javascript","HTML","CSS"
    ],
    github: "https://github.com/sudhanshu287/LoslessVPN-Landing-Page",
    demo: "https://loslesvpn-landing-web-page.netlify.app/",
  },
  {
    id: 5,
    image: BurgerHouseImg,
    title: `BurgerHouse Landing Webpage.`,
    techStack: [
     "React","HTML","CSS"
    ],
    github: "https://github.com/sudhanshu287/BurgerHouse-LandingPage",
    demo: "https://burger-house-landing-page.netlify.app/",
  },
  // {
  //   id:6,
  //   image:IMG1,
  //   title:'Crypto Currency () Dash Board &Financial Visualization',
  //   description:[],
  //   github:'https://github.com',
  //   demo:'https:google.com'
  // },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, techStack, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <div>
              <h3>{title}</h3>
              <TechStack techStack={techStack} />
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
