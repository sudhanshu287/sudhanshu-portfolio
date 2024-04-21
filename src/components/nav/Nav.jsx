import React, { useState } from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { MdComputer } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");

  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <Tooltip title="Home" placement="top">
          <IconButton size="small" color="primary">
            <AiOutlineHome />
          </IconButton>
        </Tooltip>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <Tooltip title="About" placement="top">
          <IconButton size="small" color="primary">
            <AiOutlineUser />
          </IconButton>
        </Tooltip>
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <Tooltip title="Skills" placement="top">
          <IconButton size="small" color="primary">
            <MdComputer />
          </IconButton>
        </Tooltip>
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}
      >
        <Tooltip title="Project" placement="top">
          <IconButton size="small" color="primary">
            <BsCodeSlash />
          </IconButton>
        </Tooltip>
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <Tooltip title="Contact" placement="top">
          <IconButton size="small" color="primary">
            <AiOutlineMessage />
          </IconButton>
        </Tooltip>
      </a>
    </nav>
  );
};

export default Nav;
