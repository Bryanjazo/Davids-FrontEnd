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
    <div className="c-section">
      {blogs.map((b) =>
        b
          .filter(
            (info) =>
              info.categories[0] === "Blockchain" ||
              info.categories[1] === "Blockchain"
          )
          .map((arr) => (
            <Link to={"/Blogs/" + arr.slug.current} key={arr.slug.current}>
              <div className="containerAll">
                <img className="allImg" src={arr.mainImage.asset.url} />
                <div className="textAll">
                  <div className="AllHeading">
                    <h1 className="lifestyle-title">{arr.title}</h1>
                  </div>
                  <div className="AllParagraphs">
                    <b>
                      <p className="Date">
                        {moment(arr._createdAt).format("MMMM Do YYYY")}
                      </p>
                    </b>
                  </div>
                </div>
              </div>
            </Link>
          ))
      )}
    </div>
  );
}

// create a full page with this.. so when user clicks on the blockchain section
