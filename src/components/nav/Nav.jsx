import React,{useState} from 'react';
import './Nav.css';
import {AiOutlineHome} from 'react-icons/ai';
import {AiOutlineUser} from 'react-icons/ai';
import {MdComputer} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';
import {BsCodeSlash} from 'react-icons/bs';
const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');

  return (
     
    <nav>
      <a href="#" onClick={()=>setActiveNav('#')} className={activeNav==="#" ? 'active' : ''}><AiOutlineHome/>
      </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav==="#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav==="#experience" ? 'active' : ''}><MdComputer/></a>
      <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav==="#portfolio" ? 'active' : ''}><BsCodeSlash/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav==="#contact" ? 'active' : ''}><AiOutlineMessage/></a>
    </nav>
    
  );
}

export default Nav