import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";
import Hamburger from "./Hamburger";
import { BlockChainPage } from "../MidSection/BlockChainContainer/BlockChainPage";
import { Link } from "react-router-dom";
// import Hamburger from "hamburger-react";
export default function NavBar() {
  return (
    <header className="header">
      <div className="logo-div">
        <img class="logo" className="logo-img" src={logo} alt="logo" />
      </div>


      <div class="topnav">
      <div className="topnav-left">
        <a href="#" className="nav-link">
          <i class="fas fa-search fa-lg search-icon"></i>
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
            COIN SWAP
          </a>
          <i class="fas fa-search fa-lg search-icon"></i>
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      
    </header>
  );
}