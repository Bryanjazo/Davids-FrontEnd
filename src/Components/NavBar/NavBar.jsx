import React, { useState } from "react";
import "./NavBar.css";
import logo from "../images/logo.png";

import Hamburger from "./Hamburger";
import {BlockChainPage} from "../MidSection/BlockChainContainer/BlockChainPage";

import { Link } from "react-router-dom";
// import Hamburger from "hamburger-react";

export default function NavBar() {

  // const [hamburger, setHamburger] = useState("hamburger");
  // const [menu, setmenu] = useState("nav-menu");
  // const [hamburgerOpen, setHamburgerOpen] = useState(false);

  // const handleClick = () => {
  //   setHamburgerOpen(!hamburgerOpen);

  //   // if (isHamburger === true) {
  //   //   setHamburger("hamburger");
  //   //   setmenu("nav-menu");
  //   // } else {
  //   //   setHamburger("hamburger active");
  //   //   setmenu("nav-menu active");
  //   // }
  // };

  // console.log(hamburger, menu, hamburgerOpen);

  return (
    <header className="header">
    <div className='logo-div'>
      <img
        class="logo"
        className="logo-img"
        src={logo}
        alt="logo"
      />
     
    </div>
       {/* <nav className="navbar"> */}
      <div class="topnav">
        <a href="#" className="nav-link">
          NEWSLETTER
        </a>
        <a href="#" className="nav-link">
          PODCASTS
        </a>
        <div className="topnav-right">
          <a href='../MidSection/BlockChainContainer/BlockChainPage' className="nav-link">
            BLOCKCHAIN
          </a>
          {/* <Link to="/BlockChainPage"> BLOCKCHAIN </Link> */}
          <a href="#" className="nav-link">
            COIN SWAP
          </a>
          <i class="fas fa-search fa-lg search-icon"></i>
        </div>

    


      </div>
      {/* <div className="hamburger" onClick={handleClick}>
        <Hamburger isOpen={hamburgerOpen} />
      </div> */} 
      {/* </nav> */}

      {/* <style jsx>{`
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
                
               
                
            `}</style> */}
    </header>
  );
}

// import React, { useState } from "react";

// import { Link } from "react-router-dom";

// import { useSelector, useDispatch } from "react-redux";
// import { Twirl as Hamburger } from "hamburger-react";
// import "./NavBar.css";
// function NavBar() {
//   const [clicked, setClicked] = useState(false);
//   const dispatch = useDispatch();

//   const handleClick = (e) => {
//     e.preventDefault();
//     setClicked(!clicked);
//   };

//   return (
//     <nav className="NavbarItems">
//       <Link className="cla" to="/">
//         <h1 className="NavbarLogo changeTitle">Davids Logo</h1>
//       </Link>
//       <div className="MenuItmem" onClick={handleClick}>
//         <Hamburger className="hamburger" />
//       </div>
//       <ul className={clicked ? "nav-menu active" : "nav-menu"}>
//         <li>
//           <Link className="nav-links" to="/Home">
//             Home
//           </Link>
//           <Link className="nav-links" to="/Shows">
//             Shows
//           </Link>
//           <Link className="nav-links" to="/Favorites">
//             Favorites
//           </Link>

//           <Link className="nav-links" to="/Profile">
//             Profile
//           </Link>

//           <Link className="nav-links" to="/Premium">
//             Premium
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default NavBar;
