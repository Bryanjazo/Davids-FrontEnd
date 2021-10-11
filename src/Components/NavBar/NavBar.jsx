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
      <img
        width="350px"
        height="auto"
        class="logo"
        className="logo-img"
        src={logo}
        alt="logo"
      />
      {/* <nav className="navbar"> */}
      <div class="topnav">
        <a href="#" className="nav-link">
          <i class="fas fa-bars"></i>
        </a>
        <a href="#" className="nav-link">
          NEWSLETTER
        </a>
        <a href="#" className="nav-link">
          PODCASTS
        </a>
        <div className="topnav-right">
          <a href="#" className="nav-link">
            EVENTS
          </a>
          <a href="#" className="nav-link">
            WEBINARS
          </a>
          <i class="fas fa-search fa-lg search-icon"></i>
        </div>
      </div>
      <div className={hamburger} onClick={handleClick}>
        <Hamburger toggled={isHamburger} />
      </div>
      {/* </nav> */}
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
