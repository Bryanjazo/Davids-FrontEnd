import React, { useEffect, useState } from "react";
import RecentsCard from "../../Card/RecentsCard";
import LifeStyleText from "../LifestyleContainer/LifeStyleText";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import moment from "moment";
export default function BlockChain() {
  const [blockchain, setBlockchain] = useState([]);
  // useEffect(() => {
  //   fetch("http://localHost:8080/api/v1/lifestyles")
  //     .then((resp) => resp.json())
  //     .then((data) => setBlockchain(data));
  // }, []);
  const { blogs } = useSelector((state) => state.crypto);
  return (
    <div className="lifeStyleSection">
      <h3 className="lifeStyleHeader">Blockchain</h3>
      {blogs.map((b) =>
        b
          .filter(
            (info) =>
              info.categories[0] === "Blockchain" ||
              info.categories[1] === "Blockchain"
          )
          .map((arr) => (
            <Link to={"/Blogs/" + arr.slug.current} key={arr.slug.current}>
              <div className="lifeStyle-container">
                <div className="lifeStyle-Header">
                  <h1 className="lifestyle-title">{arr.title}</h1>
                </div>
                <div className="lifeStyle-paragraph">
                  <p className="Date">
                    {moment(arr._createdAt).format("MMMM Do YYYY")}
                  </p>
                </div>
              </div>
            </Link>
          ))
      )}
    </div>
  );
}

// create a full page with this.. so when user clicks on the blockchain section
