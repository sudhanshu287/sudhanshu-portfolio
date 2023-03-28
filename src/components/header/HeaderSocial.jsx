import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {BsGithub} from 'react-icons/bs';
import {BsInstagram} from 'react-icons/bs';
const HeaderSocial = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/sudhanshu287" target="_blank"><BsLinkedin /></a>
        <a href="https://github.com/sudhanshu287" target="_blank"><BsGithub/></a>
        <a href="https://instagram.com/sudhanshu_287" target="_blank"><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial