import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import Hamburger from "hamburger-react";
export default function NavBar() {
  const [hamburger, setHamburger] = useState("hamburger");
  const [menu, setmenu] = useState("nav-menu");
  const [isHamburger, setIsHamburger] = useState(false);

  const handleClick = () => {
    setIsHamburger(!isHamburger);
    if (isHamburger === true) {
      setHamburger("hamburger");
      setmenu("nav-menu");
    } else {
      setHamburger("hamburger active");
      setmenu("nav-menu active");
    }
  };

  console.log(hamburger, menu, isHamburger);

  return (
    <header className="header">
      <div>
        <img
          width="350px"
          height="auto"
          class="logo"
          className="logo-img"
          src={logo}
          alt="logo"
        />
      </div>
      {/* <nav className="navbar"> */}
      <div class="topnav">
        <a href="#" className="nav-link">
          <i class="fas fa-search fa-lg search-icon"></i>
        </a>

        <a href="#" className="nav-link">
          PODCASTS
        </a>
        <div className="topnav-right">
          <a href="#" className="nav-link">
            VIDEOS
          </a>
          <i class="fas fa-bars search-icon"></i>
        </div>
      </div>
      {/* <div className={hamburger} onClick={handleClick}>
        <Hamburger toggled={isHamburger} />
      </div> */}
      {/* </nav> */}
    </header>
  );
}
