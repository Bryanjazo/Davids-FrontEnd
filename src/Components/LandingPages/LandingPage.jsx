import React from "react";
import "./LandingPage.css";
import ReactPlayer from "react-player";
import LifeStyleText from "../MidSection/LifestyleContainer/LifeStyleText";
import DarkBitcoin from "../images/DarkBitcoin.png";
export default function LandingPage(props) {
  return (
    <div className="PageSection">
      <h3 className="title">TITLE</h3>

      <div className="row">
        <div className="row-right">
          <div className="imgLanding">
            <ReactPlayer
              width="92%"
              height="30rem"
              url="https://www.youtube.com/watch?v=mKrLx4ex65w&feature=emb_title"
            />
          </div>
        </div>
        <div className="column left">
          <img className="landingPageImg" src={DarkBitcoin} />
          <div className="text">
            <div className="landing-category">
              <h3>Category</h3>
            </div>
            <div className="landing-titles">
              <h2>Title</h2>
            </div>

            <div className="landing-text">
              <p className="p-landing-text">Some Text</p>
            </div>

            <div className="landing-date-author">
              <p className="p-landing-text">Date Author</p>
            </div>
          </div>
        </div>
        <div className="column left">
          <img className="landingPageImg" src={DarkBitcoin} />
          <div className="text">
            <div className="landing-category">
              <h3>Category</h3>
            </div>
            <div className="landing-titles">
              <h2>Title</h2>
            </div>

            <div className="landing-text">
              <p className="p-landing-text">Some Text</p>
            </div>

            <div className="landing-date-author">
              <p className="p-landing-text">Date Author</p>
            </div>
          </div>
        </div>
        <div className="column left">
          <img className="landingPageImg" src={DarkBitcoin} />
          <div className="text">
            <div className="landing-category">
              <h3>Category</h3>
            </div>
            <div className="landing-titles">
              <h2>Title</h2>
            </div>

            <div className="landing-text">
              <p className="p-landing-text">Some Text</p>
            </div>

            <div className="landing-date-author">
              <p className="p-landing-text">Date Author</p>
            </div>
          </div>
        </div>
        <div className="column left">
          <img className="landingPageImg" src={DarkBitcoin} />
          <div className="text">
            <div className="landing-category">
              <h3>Category</h3>
            </div>
            <div className="landing-titles">
              <h2>Title</h2>
            </div>

            <div className="landing-text">
              <p className="p-landing-text">Some Text</p>
            </div>

            <div className="landing-date-author">
              <p className="p-landing-text">Date Author</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
