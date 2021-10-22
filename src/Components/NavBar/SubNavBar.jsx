import React from "react";
import "./SubNav.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CryptoTickers from "../Crypto/CryptoTickers";
export default function SubNavBar() {
  const { cryptos, newsArticles } = useSelector((state) => state.crypto);
  return (
    <div>
      <div className="SubNav-container">
        <div className="SubNav-container-two">
          <Link to="/" className="sub-link">
            Home
          </Link>

          <Link to="/Lifestyle" className="sub-link">
            Lifestyle
          </Link>

          <Link to="/Blockchain" className="sub-link">
            Blockchain
          </Link>

          <Link to="/Learn-Crypto" className="sub-link">
            Learn Crypto
          </Link>
          <Link to="/Writers-Feed" className="sub-link">
            Writers Feed
          </Link>
          <Link to="/All-Blogs" className="sub-link">
            All Blogs
          </Link>

          <Link to="/Patron" className="sub-link">
            Become A Patron
          </Link>
          <Link to="/About" className="sub-link">
            About Us
          </Link>
        </div>
      </div>

      <div className="ticker-div">
        <CryptoTickers crypto={cryptos} />
      </div>
    </div>
  );
}
