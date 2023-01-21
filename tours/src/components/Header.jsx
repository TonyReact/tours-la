import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/img/logo.svg'
import Navbar from "./UI/Navbar";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div className="header-logo">
          <Link to='/'><img className="logo" src={logo} alt="logo" /></Link>
        </div>
        <div className="header-nav" id="dd">
          <Link to='/'>Home</Link>
          <Link to='activities'>Activities</Link>
          <Link to='about'>About</Link>
          <Link to='contacts'>Contacts</Link>
        </div>
        <div className="contact__number">
          <a target='_blank' href="https://wa.me/359897388459?text=Hello%20there%21%20I%20would%20like%20to%20ask%20you%20about%20tour.">+1 (424) 542-9354</a>
        </div>
        <Navbar />
      </div>
  </header>
  )
};

export default Header;

