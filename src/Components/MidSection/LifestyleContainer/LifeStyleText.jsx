import React from "react";
import "./LifeStyle.css";
import { useHistory } from "react-router-dom";

import { AddBlog } from "../../../Redux/CryptoReduxer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
export default function LifeStyleText(blog) {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className="c-section">
      {blog.blog.map((b) =>
        b
          .filter(
            (info) =>
              info.categories[0] === "Lifestyle" ||
              info.categories[1] === "Lifestyle"
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
