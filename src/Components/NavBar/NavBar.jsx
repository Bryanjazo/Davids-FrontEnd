import React, { useState } from "react";
import "./NavBar.css";
import { Twirl as Hamburger } from "hamburger-react";

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
      <nav className="navbar">
        <a href="#" className="nav-logo">
          Davids Logo Goes Here
        </a>
        <ul className={menu}>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Socials
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div className={hamburger} onClick={handleClick}>
          <Hamburger toggled={isHamburger} />
        </div>
      </nav>
    </header>
  );
}
