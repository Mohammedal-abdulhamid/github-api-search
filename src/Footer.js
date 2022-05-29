import React from 'react';
import { Link } from 'react-router-dom';
import linkedIn from "./images/linkedin.png";
import gitHub from "./images/github.png"

function Footer() {
  return (
    <div>
        <div >
           <a href ="https://www.linkedin.com/in/mohammed-alabdulhamid-445455209/" target="_blank"> <img className="footer-icons" src={linkedIn} alt={linkedIn}/> </a> 
           <a href="https://github.com/Mohammedal-abdulhamid" target="_blank"> <img  className="footer-icons" src ={gitHub}  alt ={gitHub}/> </a>
        </div>

    </div>
  )
}

export default Footer;