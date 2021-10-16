
import React, { useState } from "react";
// import "./NavBar.css";

import Hamburger from "./Hamburger";


export default function HamburgerMenu() {


    const [hamburger, setHamburger] = useState("hamburger");
    const [menu, setmenu] = useState("nav-menu");
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
  
    const handleClick = () => {
      setHamburgerOpen(!hamburgerOpen);
  
      // if (isHamburger === true) {
      //   setHamburger("hamburger");
      //   setmenu("nav-menu");
      // } else {
      //   setHamburger("hamburger active");
      //   setmenu("nav-menu active");
      // }
    };

    console.log(hamburger, menu, hamburgerOpen);

    return (
        <div className="menu-ham-container">
          <div class="topnav">
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
      .topnav{
                    width: 100%;
                    height: 50px;
                }
                
                
                .topnav a{
                    display:flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 0px;
                    padding: 0px;
                    overflow: hidden;
                }
                .nav-link{
                    list-style-type: none;
                    padding-right: 10px;
                }
          
                .hamburger{
                   
                    z-index: 6;
                } 
                @media (max-width: 767px){
                  
                    .hamburger{
                        display:fixed;
                        padding-top: 10px;
                        margin-left: 10px;
                        z-index: 6;
                    }
                
                   
                    .topnav{
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        background-color: white;
                        height: 90%;
                        width: 80%;
                        margin-top: 50px;
                        position: fixed;
                        
                    }
                }
                
               
                
            `}</style>
            </div>
    )
}
