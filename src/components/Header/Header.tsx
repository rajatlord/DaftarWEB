"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../../assets/Logo.png";
import "./Header.style.css";

const Header: React.FC = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-container">
      <div className="header-inner">
        {/* style={{ marginLeft: "150px" }} */}
      <div className="logo-section" >
        <div className="logo-image">
          <Image src={Logo} alt="Daftar Route" width={60} height={50} />
        </div>
        <div className="logo-text header-font">
          <span>Daftar Route</span>
        </div>
      </div>

     <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* style={{ marginRight: "150px" }} */}

      <nav className={`nav-menu header-font ${menuOpen ? "active" : ""} `} >
        <ul>
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={
                pathname === "/about"
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              href="/solutions"
              className={
                pathname === "/solutions"
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              SOLUTIONS
            </Link>
          </li>
          <li>
            <Link
              href="/careers"
              className={
                pathname === "/careers"
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              CAREERS
            </Link>
          </li>
        </ul>
      </nav>
      </div>
    </header>
  );
};

export default Header;
