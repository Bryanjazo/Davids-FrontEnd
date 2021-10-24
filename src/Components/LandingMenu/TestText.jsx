import React from "react";
import "./TestText.css";
import airbnb from "../images/airbnb.jpeg";
export default function TestText() {
  return (
    <div className="Page-Section">
      <h1 className="title">Lifestyle</h1>
      <div className="cardSections">
        <div className="Block-section">
          <div className="imageSection">
            <img src={airbnb} />
          </div>
          <div className="categoryAllmenu">
            <a className="allCategorymenu">Lifestyle</a>
          </div>
          <div className="headingAllmenuDiv">
            <a className="headingAllmenu">
              What 9,156 New Cryptocurrencies Can Teach Us About the Market
            </a>
          </div>
          <div className="author-dateAllmenu">
            <a className="headingAllDate">By example / October 23, 2021</a>
          </div>
        </div>
      </div>
    </div>
  );
}
