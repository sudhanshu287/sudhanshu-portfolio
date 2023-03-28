import React from "react";
import "./Portfolio.css";
import MovixImg from "../../images/PortfolioImages/movix.png";
import CodeEditorImg from "../../images/PortfolioImages/live-code-editor.png";
// import BlogAppImg from '../../images/PortfolioImages/movix.png';
import WeatherLensImg from "../../images/PortfolioImages/weather-lens.png";
import LoslesVPNImg from "../../images/PortfolioImages/LoslesVPN.png";
import BurgerHouseImg from "../../images/PortfolioImages/Burger-House.png";
import ProjectDescription from "./projectDescription/ProjectDescription";

const data = [
  {
    id: 1,
    image: MovixImg,
    title: "Movix ( Webapp for Movies and TV shows)",
    description: [
      "Movix is an entertainment plateform.",
      "Here you can search about a Movie or a TV show.",
      "You can watch Movie trailer and other detail like rating, genres,cast ,director,actor list and many more.",
    ],
    github: "https://github.com/sudhanshu287/movix",
    demo: "https://movix-one.vercel.app/",
  },
  {
    id: 2,
    image: CodeEditorImg,
    title: "Live Code Collab Editor (Code Sync)",
    description: [
      "Real time code sharing WebApp.",
      "If you don't have Room id click on new room button It will create new RoomID and Enter your name and join.",
      "Multiple Users can Join a Room.",
    ],
    github: "https://github.com/sudhanshu287/live-code-collab-editor",
    demo: "https://live-code-collab-editor.vercel.app/",
  },
  {
    id: 3,
    image: WeatherLensImg,
    title: "Weather Lens",
    description: [
      "Search weather condition by entering the city name.",
      "Daily Forecast report is showed.",
      "Hourly forecast detail is showed in the web app.",
      "Min, Max Tempreture , Humidity,Wind Speed ,Sun Rise,Sun Set and many more details of a particular city is shown in the webapp.",
    ],
    github: "https://github.com/sudhanshu287/weather-lens-v2.0",
    demo: "https://weather-lens-v2.vercel.app/",
  },
  {
    id: 4,
    image: LoslesVPNImg,
    title: "LoslesVPN Landing Webpage.",
    description: [
      "Component use to build this landing page are",
      "Nav , Header, Contact Section ,Product Section and",
      "Footer section, copyright section etc."
    ],
    github: "https://github.com/sudhanshu287/LoslessVPN-Landing-Page",
    demo: "https://loslesvpn-landing-web-page.netlify.app/",
  },
  {
    id: 5,
    image: BurgerHouseImg,
    title: `BurgerHouse Landing Webpage.`,
    description: [
      "Component use to build this landing page are",
      "Nav , Header, Contact Section ,Product Section and",
      "Footer section, copyright section etc."
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
        {data.map(({ id, image, title, description, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt="" />
              </div>
              <div>
              <h3>{title}</h3>
              <ProjectDescription description={description} />
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
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
