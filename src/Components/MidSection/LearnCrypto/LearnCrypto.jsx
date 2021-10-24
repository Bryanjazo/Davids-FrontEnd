import React from "react";
import LifeStyleText from "../LifestyleContainer/LifeStyleText";
import "./learnCrypto.css";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import "./../LifestyleContainer/LifeStyle.css";
export default function LearnCrypto() {
  const { blogs } = useSelector((state) => state.crypto);

  return (
    <div className="c-section">
      {blogs.map((b) =>
        b
          .filter(
            (info) =>
              info.categories[0] === "Learn Crypto" ||
              info.categories[1] === "Learn Crypto"
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
