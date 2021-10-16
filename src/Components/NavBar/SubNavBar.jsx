import React from "react";
import "./SubNav.css";
import { useSelector } from "react-redux";
import CryptoTickers from "../Crypto/CryptoTickers";
export default function SubNavBar() {
  const { cryptos, newsArticles } = useSelector((state) => state.crypto);
  return (
     <div>
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

      <div className="ticker-div">
        <CryptoTickers crypto={cryptos} />
      </div>
    </div>
  );
}
