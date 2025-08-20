
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../assets/Logo.png";
import "./Header.style.css";

const Header: React.FC = () => {
  return (
    <header className="header-container">
      <div className="logo-section" style={{marginLeft:"150px"}}>
        {/* Replace with an actual image tag if you have the logo image */}
        <div className="logo-image">
          {/* <Image
            src={Logo}
            alt="Daftar Route"
            className="phone-image"
            
          /> */}
        </div>
        <div className="logo-text header-font">
          <span>Daftar Route</span>
          {/* <span>YOU ARE IMPORTANT TO US</span> */}
        </div>
      </div>
      <nav className="nav-menu header-font"  style={{marginRight:"150px"}}>
        <ul >
          <li>
            {/* <a href="#home" className=" header-font">HOME</a> */}
            <Link href="/" className="header-font">HOME</Link>
          </li>
          <li>
            {/* <a href="#about-us" className=" header-font">ABOUT US</a> */}
            <Link href="/about" className="header-font">ABOUT US</Link>
          </li>
          <li>
            <a href="#solutions" className="header-font">SOLUTIONS</a>
          </li>
          <li>
            <a href="#careers" className=" header-font">CAREERS</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
