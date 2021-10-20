import React from "react";
import test from "../images/test.png";
import "./features.css";
import ReactPlayer from "react-player";

export default function Features() {
  return (
    <div className="featuresSection">
      <h3 className="featureTitle">Features</h3>
      <div className="hl-card">
        <div className="header">
          <h1>
            {" "}
            Charles Payne from Fox Business with guests David Gokhshtein and
            Jason Williams{" "}
          </h1>
        </div>
        <div className="sub-header">
          <p className="date">
            <i class="far fa-calendar"></i> May 7, 2021
          </p>
        </div>
        <div className="img">
          <ReactPlayer
            width="100%"
            height="60rem"

            url="https://www.youtube.com/watch?v=mKrLx4ex65w&feature=emb_title"
          />
        </div>
      </div>
    </div>
  );
}
