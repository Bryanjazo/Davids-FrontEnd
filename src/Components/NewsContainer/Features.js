import React from "react";
import test from "../images/test.png";
import "./features.css";

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
          <img src={test} alt="" id="img" />
        </div>
        <div className="paragraph">
          <p className="paragraph-text">
            By Jasper Hamill The price of Bitcoin has rocketed over $50,0000 in
            a rally that has prompted analysts to predict that the world’s top
            cryptocurrency will soon break its all-time high. Bitcoin surged
            above the psychologically important $50k barrier on Tuesday, before
            soaring to a peak of almost $55k. The bull run comes after a week of
            good news for the blockchain business and a wave of positivity which
            saw October being dubbed “Uptober”. The month started on a high
            after U.S Federal Reserve Chairman Jerome Powell closed out
            September by saying he has “no intention” of banning crypto.
            Securities and Exchange Commission Chair Gary Gensler also said the
            US would follow in China’s footsteps by banning crypto Speaking at a
            House hearing, he said: “Our approach is really quite different.”
            These two important statements assuage fears of an imminent crypto
            crackdown, but that wasn’t the end of the good news because
            announcements from two financial giants raised hopes that mainstream
            adoption could be on the way. Earlier this week, Bank of American
            released an analyst note that said “the digital asset universe is
            <li class="container">
              <input type="checkbox" id="check_id" />
              <label for="check_id"></label>
              <ul>
                too large to ignore”. “We believe crypto-based digital assets
                could form an entirely new asset class,” analysts wrote.
                “Bitcoin is important with a market value of ~$900bn, but the
                digital asset ecosystem is so much more. “Our view is that there
                could be more opportunity than skeptics expect.
              </ul>
            </li>
          </p>
        </div>
      </div>
    </div>
  );
}
