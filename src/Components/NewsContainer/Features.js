import React from "react";

import "./features.css";
import ReactPlayer from "react-player";

export default function Features() {
  return (
    <div className="featuresSection">
      <h3 className="featureTitle">Featured Video</h3>
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
            url="https://www.youtube.com/watch?v=M5F9vIEWNvk&feature=emb_title"
          />
        </div>
        <div className="realted-videos">
          <h1>Realted Videos</h1>
        </div>
        <div className="sub-video-container">
          {/* <div className="video1">
            {" "}
            <ReactPlayer
              width="100%"
              height="25rem"
              url="youtube.com/watch?v=5G2dkiswEhg"
            />
          </div>
          <div className="video1">
            {" "}
            <ReactPlayer
              width="100%"
              height="25rem"
              url="https://www.youtube.com/watch?v=99TA8w4fJdc&feature=emb_title"
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
