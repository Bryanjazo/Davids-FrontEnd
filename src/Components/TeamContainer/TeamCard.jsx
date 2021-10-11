import "./TeamCard.css";
import user from "../images/user.png";
import React from "react";
import { FacebookIcon, LinkedinIcon, TwitterIcon } from "react-share";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "react-share";


export default function TeamCard() {
  return (
    <div id="c-body">
      <div id="card-container">
        <div class="card">
          <img src={user} id="c-img" alt="..." />
          <div class="name">Name</div>
          <div class="subHeader">
            <p>Position</p>
          </div>
          <share>
            <div>
              <div className="socialItems">
                <i class="fab fa-facebook fa-2x social"></i>
              </div>
              <div className="socialItems">
                <i class="fab fa-linkedin fa-2x social"></i>
              </div>
              <div className="socialItems">
                <i class="fab fa-instagram fa-2x social"></i>
              </div>
              <div className="socialItems">
                <i class="fab fa-youtube fa-2x social"></i>
              </div>
            </div>
          </share>
        </div>
      </div>
    </div>
  );
}
