import React from "react";
import LifeStyleText from "../LifestyleContainer/LifeStyleText";
import "./WritersFeed.css";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
export default function WritersFeed() {
  const { blogs } = useSelector((state) => state.crypto);
  return (
    <div className="c-section">
      {blogs.map((b) =>
        b
          .filter(
            (info) =>
              info.categories[0] === "Writers Feed" ||
              info.categories[1] === "Writers Feed"
          )
          .map((arr) => (
            <Link to={"/Blogs/" + arr.slug.current} key={arr.slug.current}>
              <div className="writers-container">
                <div className="writers-Header">
                  <h1 className="writers-feed-title">{arr.title}</h1>
                </div>
                <div className="WritersPContainer">
                  <div className="writers-author">
                    <b>
                      <p className="writers-p">{arr.authorName}</p>
                    </b>
                  </div>
                  <div className="writers-paragraph">
                    <p className="writers-p">
                      {moment(arr._createdAt).format("MMMM Do YYYY")}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))
      )}
    </div>
  );
}
