import React from "react";
import "./Header.css";
import CTA from "./CTA";
import MyProfileImg from "../../images/sudhanshu-2024.png";
import HeaderSocial from "./HeaderSocial";
import DarkMode from "./darkMode/DarkMode";
import { motion } from "framer-motion";
function Header() {
  return (
    <>
      <header>
        <div className="darkMode__Button">
          <DarkMode />
        </div>
        <div className="container header__container">
          <h5>Hello I'm</h5>
          <h1>Sudhanshu Patel</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <HeaderSocial />
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" myProfileImg"
          >
            <img src={MyProfileImg} alt="sudhanshu-profile" />
          </motion.div>
          <a href="#contact" className="scroll_down">
            Scroll Down &nbsp;
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
