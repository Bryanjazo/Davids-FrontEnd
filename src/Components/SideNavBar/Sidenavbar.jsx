import React, { useState } from "react";
import "./sidenavbar.css";
import Hamburger from "../NavBar/Hamburger";
import { Transition } from "react-transition-group";
import logo from "../images/SmallLogo.png";
import example from "../images/workcation.jpeg";
const duration = 1000;
const sidebarStyle = {
  transition: `width ${duration}ms`,
};
const sidebarTransitionStyles = {
  entering: { width: 0 },
  entered: { width: "200px" },
  exiting: { width: "200px" },
  exited: { width: 0 },
};
const linkStyle = {
  transition: `opacity ${duration}ms`,
};
const linkTransitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
  exiting: { opacity: 1 },
  exited: { opacity: 0 },
};

export default function SideNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  if (!isOpen) {
    return (
      <div onClick={handleClick}>
        <Hamburger />
      </div>
    );
  }

  return (
    <Transition in={isOpen} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...linkStyle,
            ...linkTransitionStyles[state],
          }}
        >
          <div id="menu-slide" className="menu-slide menu-open">
            <div id="nav-close" className="menu-close-btn">
              <span className="icon" onClick={handleClick}>
                
              </span>
              <div className="nav-txt">Sections</div>
            </div>
            <div className="slider-category-items">
              <div className="menu-slide-out-container">
                <ul id="menu-slidout-1" className="menu">
                  <li
                    id="menu-item-1763"
                    className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-477 current_page_item menu-item-1763"
                  >
                    <a
                      href="https://blockworks.co/newsletter/"
                      aria-current="page"
                    >
                      Lifestyle
                    </a>
                  </li>
                  <li
                    id="menu-item-1762"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1762"
                  >
                    <a href="#">Blockchain</a>
                  </li>
                  <li
                    id="menu-item-787"
                    className="menu-item menu-item-type-post_type_archive menu-item-object-events menu-item-787"
                  >
                    <a href="#">Learn Crypto</a>
                  </li>
                  <li
                    id="menu-item-788"
                    className="menu-item menu-item-type-post_type_archive menu-item-object-webinars menu-item-788"
                  >
                    <a href="#">Writers Feed</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="nav-txt">Categories</div>
            <div className="slider-category-items">
              <div className="menu-slide-out-2-container">
                <ul id="menu-slideout-2" className="menu">
                  <li
                    id="menu-item-2749"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2749"
                  >
                    <a href="https://blockworks.co/category/asset-management/">
                      All Blogs
                    </a>
                  </li>
                  <li
                    id="menu-item-2751"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2751"
                  >
                    <a href="#">About David</a>
                  </li>
                  <li
                    id="menu-item-3161"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-3161"
                  >
                    <a href="#">About Us</a>
                  </li>
                  <li
                    id="menu-item-5633"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-5633"
                  >
                    <a href="#">Become A Patron</a>
                  </li>
                  <li
                    id="menu-item-2752"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2752"
                  >
                    <a href="#">Services</a>
                  </li>
                  <li
                    id="menu-item-2753"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2753"
                  >
                    <a href="#">Lets Connect</a>
                  </li>
                  <li
                    id="menu-item-9235"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-9235"
                  >
                    <a href="#">Coin Swap</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="card-type slide-query">
              <div className="crd">
                <a href="#" className="imglink">
                  <div className="imgbox">
                    <img
                      alt=""
                      className=" ls-is-cached lazyloaded"
                      src={example}
                    />
                    <noscript>
                      <img src={example} alt="" />
                    </noscript>
                  </div>
                </a>
                <div className="card-content">
                  <div className="tags">
                    <p className="post-tag">Whats trending</p>
                  </div>
                  <a href="h#" className="card_title">
                    The Rise of the “Workcation” Lifestyle
                  </a>

                  <div className="post-creation-details">
                    <span className="author-wrap">
                      By
                      <a
                        href="#"
                        title="Posts by Julie Muroff"
                        className="author url fn"
                        rel="author"
                      >
                        {" "}
                        Brittany VanDerBill
                      </a>
                    </span>
                    <span className="slash-divider">/ </span>
                    <span className="posted-on">
                      <time
                        className="entry-date published"
                        datetime="2021-05-05T13:18:58-04:00"
                      >
                        October 20, 2021
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="slide-footer">
              <div className="slide-logo">
                <img
                  alt=""
                  data-src="https://blockworks.co/wp-content/themes/blockworks/images/logo-blue.png"
                  className=" ls-is-cached lazyloaded"
                  src={logo}
                />
                <noscript>
                  <img src={logo} alt="" />
                </noscript>
              </div>
              <div className="slide-social">
                <span>follow us</span>
                <div>
                  <a
                    target="_blank"
                    href="https://twitter.com/gokhshteinmedia?s=21"
                  >
                    <i class="fab fa-twitter fa-lg"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/gokhshteinmedia/?igshid=d73bi47bpcv6"
                  >
                    <i class="fab fa-instagram fa-lg"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/GokhshteinMedia/"
                  >
                    <i class="fab fa-facebook fa-lg"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://www.youtube.com/channel/UCePzY0YpGYCoFs1yZWQZ4kQ"
                  >
                    <i class="fab fa-youtube fa-lg"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
