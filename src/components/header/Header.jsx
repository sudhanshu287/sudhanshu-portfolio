import React from 'react'
import './Header.css';
import CTA from './CTA';
import MyProfileImg from '../../images/sdn.png';
import HeaderSocial from './HeaderSocial';
import DarkMode from './darkMode/DarkMode';
function Header() {
  return (
    <header>
      <div className='darkMode__Button'>
        <DarkMode/>
      </div>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sudhanshu Patel</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className="myProfileImg">
          <img src={MyProfileImg} alt="sudhanshu-profile" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down &nbsp;</a>
        
      </div>
    </header>
  )
}

export default Header