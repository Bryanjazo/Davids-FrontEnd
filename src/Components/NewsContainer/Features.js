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
            Bitcoin Rockets to Over $50k as ‘Uptober’ Rally Prompts All-Time
            High Predictions{" "}
          </h1>
        </div>
        <div className="sub-header">
          <p className="category">
            <i class="far fa-clone"></i> BlockChain
          </p>
          <p className="date">
            <i class="far fa-calendar"></i> October 6,2021
          </p>
          <p className="author">
            <i class="far fa-user-circle"></i> Author
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
