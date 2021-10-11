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
            Asset Manager
          </a>
          <a href="#" className="sub-link">
            DeFi
          </a>
          <a href="#" className="sub-link">
            Education
          </a>
          <a href="#" className="sub-link">
            Macro
          </a>
          <a href="#" className="sub-link">
            Markets
          </a>
          <a href="#" className="sub-link">
            Financial Services
          </a>
          <a href="#" className="sub-link">
            Op-Od
          </a>
          <a href="#" className="sub-link">
            Profiles
          </a>
          <a href="#" className="sub-link">
            Regulations
          </a>
        </div>
      </div>

      <div className="ticker-div">
        <CryptoTickers crypto={cryptos} />
      </div>
    </div>
  );
}
