import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import Hamburger from "./Hamburger";
import { BlockChainPage } from "../MidSection/BlockChainContainer/BlockChainPage";
import { Link } from "react-router-dom";
// import Hamburger from "hamburger-react";
export default function NavBar() {
<<<<<<< HEAD
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
      <img
        width="350px"
        height="auto"
        class="logo"
        className="logo-img"
        src={logo}
        alt="logo"
      />
      {/* <nav className="navbar"> */}
=======
  return (
    <header className="header">
      <div className="logo-div">
        <img class="logo" className="logo-img" src={logo} alt="logo" />
      </div>


>>>>>>> origin/main
      <div class="topnav">
      <div className="topnav-left">
        <a href="#" className="nav-link">
          <i class="fas fa-bars"></i>
        </a>
        <a href="#" className="nav-link">
          NEWSLETTER
        </a>
        <a href="#" className="nav-link">
          PODCASTS
        </a>

        </div>
        <div className="topnav-right">
          <a
            href="../MidSection/BlockChainContainer/BlockChainPage"
            className="nav-link"
          >BLOCKCHAIN
          </a>
          {/* <Link to="/BlockChainPage"> BLOCKCHAIN </Link> */}
          <a href="#" className="nav-link">
<<<<<<< HEAD
            EVENTS
          </a>
          <a href="#" className="nav-link">
            WEBINARS
          </a>
          <i class="fas fa-search fa-lg search-icon"></i>
        </div>
      </div>

      {/* </nav> */}
=======
            COIN SWAP
          </a>
          <i class="fas fa-search fa-lg search-icon"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      
>>>>>>> origin/main
    </header>
  );
}