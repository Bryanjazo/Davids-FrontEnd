import React from "react";
import "./SubNav.css";
import { useSelector } from "react-redux";
import CryptoTickers from "../Crypto/CryptoTickers";
export default function SubNavBar() {
  const { cryptos, newsArticles } = useSelector((state) => state.crypto);
  return (
    <div>
      <div className="SubNav-container">
        <p className="subNav-p">Asset Manager</p>
        <p className="subNav-p">DeFi</p>
        <p className="subNav-p">Education</p>
        <p className="subNav-p">Macro</p>
        <p className="subNav-p">Markets</p>
        <p className="subNav-p">Financial Services</p>
        <p className="subNav-p">Op-Od</p>
        <p className="subNav-p">Profiles</p>
        <p className="subNav-p">Regulations</p>
      </div>

      <div className="ticker-div">
        <CryptoTickers crypto={cryptos} />
      </div>
    </div>
  );
}
