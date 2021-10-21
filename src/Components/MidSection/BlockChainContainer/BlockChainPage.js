import React from "react";
import RecentsCard from "../../Card/RecentsCard";
import LifeStyleText from "../LifestyleContainer/LifeStyleText";
import './page.css'

import ReactPlayer from "react-player";




export default function BlockChainPage() {
  return (
    <div className="PageSection">
      <h3 className="title">TITLE</h3>

        <div className='row'>

          <div className='column left'>

          <h1>this needs to take up 66% of the screen</h1>

          <LifeStyleText />

          </div>

          <div className='column right'>
        
              <div className="img">
                  <ReactPlayer
                    width="100%"
                    height="30rem"
                    
                    url="https://www.youtube.com/watch?v=mKrLx4ex65w&feature=emb_title"
                  />
                

              </div>
          </div>
      </div>

      
    </div>
  );
}
