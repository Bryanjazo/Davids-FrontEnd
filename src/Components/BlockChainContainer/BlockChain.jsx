import React from "react";
import ReactPlayer from "react-player";
import RecentsCard from "../../Card/RecentsCard";
import LifeStyleText from "../../LifestyleContainer/LifeStyleText";


export default function BlockChain() {
  return (
    <div className="recentSection">
      <h3 className="recentsTitle">BLOCKCHAIN</h3>
      <LifeStyleText />

      <div className="img">
          <ReactPlayer

            width="100%"
            height="60rem"

            url="https://www.youtube.com/watch?v=mKrLx4ex65w&feature=emb_title"
          />
        </div>
    </div>



  );
}
