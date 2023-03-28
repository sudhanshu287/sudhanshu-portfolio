import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FiGithub } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Sudhanshu Patel
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/sudhanshu287/" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://linkedin.com/in/sudhanshu287" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://instagram.com/sudhanshu_287" target="_blank">
          <BsInstagram />
        </a>
        <a href="https://github.com/sudhanshu287" target="_blank">
          <FiGithub />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; 2023 By Sudhanshu Patel. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
