import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "./Moon.svg";
import "./DarkMode.css";
// import {BsFillSunFill} from 'react-icons/bs';
// import {BsFillMoonFill} from 'react-icons/bs';

const DarkMode = () => {
    const setDarkMode=()=>{
        document.querySelector("body").setAttribute("data-theme","dark");
        localStorage.setItem("selectedTheme","dark");
    };
    const setLightMode=()=>{
        document.querySelector("body").setAttribute("data-theme","light");
        localStorage.setItem("selectedTheme","light");
    };
    const selectedTheme = localStorage.getItem("selectedTheme");
    if(selectedTheme==="dark"){
        setDarkMode();
    }
    const toggleTheme=(e)=>{
        if(e.target.checked){
            setDarkMode();
        }else{
            setLightMode();
        }
    };
    return (
        <div>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
                {/* <BsFillSunFill/>
                <BsFillMoonFill/> */}
            </label>
        </div>
    );
};

export default DarkMode;
