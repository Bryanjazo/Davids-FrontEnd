import React, { useEffect, useState } from "react";
import RecentsCard from "../../Card/RecentsCard";
import LifeStyleText from "../LifestyleContainer/LifeStyleText";
import "./blockChain.css";

export default function BlockChain() {
  const [blockchain, setBlockchain] = useState([]);
  // useEffect(() => {
  //   fetch("http://localHost:8080/api/v1/lifestyles")
  //     .then((resp) => resp.json())
  //     .then((data) => setBlockchain(data));
  // }, []);
  return (
    <div className="recentSection">
      <h3 className="blockChainTitle">BLOCKCHAIN</h3>
      {blockchain.map((list) => (
        <LifeStyleText {...list} />
      ))}
    </div>
  );
}

// create a full page with this.. so when user clicks on the blockchain section
