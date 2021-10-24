import React, { useState } from "react";
import "./hamburgerMenu.css";
import "./NavBar.css";

import Hamburger from "./Hamburger";

export default function HamburgerMenu() {
  const [hamburger, setHamburger] = useState("hamburger");
  const [menu, setmenu] = useState("nav-menu");
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const handleClick = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  console.log(hamburger, menu, hamburgerOpen);

  return (
    <div className="menu-ham-container">
      <div class="topnav">
        <div className="topnav-ham">
          <a href="#" className="nav-link">
            NEWSLETTER
          </a>
          <a href="#" className="nav-link">
            PODCASTS
          </a>
          <div className="topnav-right">
            <a href="#" className="nav-link">
              BLOCKCHAIN
            </a>
            <a href="#" className="nav-link">
              COIN SWAP
            </a>
            <i class="fas fa-search fa-lg search-icon"></i>
          </div>
        </div>

        <div className="SubNav-container">
          <div className="SubNav-container-two">
            <a href="#" className="sub-link">
              Home
            </a>
            <a href="#" className="sub-link">
              Lifestyle
            </a>
            <a href="#" className="sub-link">
              Becoming A Patron
            </a>
            <a href="#" className="sub-link">
              Raise Your Game
            </a>
            <a href="#" className="sub-link">
              Schedule A Call With David
            </a>
            <a href="#" className="sub-link">
              About David Gokhshtein
            </a>
            <a href="#" className="sub-link">
              About Us
            </a>
          </div>
        </div>
      </div>
      <div className="hamburger" onClick={handleClick}>
        <Hamburger isOpen={hamburgerOpen} />
      </div>

      <style jsx>{`
        @media (max-width: 767px) {
          .topnav {
            display: ${hamburgerOpen ? "inline" : "none"};
          }
        }
      `}</style>
    </div>
  );
}
