import React from "react";
import Image from "next/image";
import Logo from "../../../assets/Logo.png";
import "./Header.style.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo-section">
        {/* Replace with an actual image tag if you have the logo image */}
        <div className="logo-image">
          <Image
            src={Logo}
            alt="Daftar Route"
            className="phone-image"
            width={120}
            height={120}
          />
        </div>
        <div className="logo-text">
          <span>Daftar Route</span>
          <span>YOU ARE IMPORTANT TO US</span>
        </div>
      </div>
      <nav className="nav-menu">
        <ul>
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about-us">ABOUT US</a>
          </li>
          <li>
            <a href="#solutions">SOLUTIONS</a>
          </li>
          <li>
            <a href="#careers">CAREERS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
