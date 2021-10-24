import React from "react";
import "./LandingPage.css";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import moment from "moment";
import { Link } from "react-router-dom";
import LifeStyleText from "../MidSection/LifestyleContainer/LifeStyleText";
export default function WritersMenu() {
  const { blogs } = useSelector((state) => state.crypto);
  return (
    <div className="PageSection">
      <h3 className="title">Lifestyle</h3>
      <div className="cardSections">
        {blogs.map((item) =>
          item
            .filter(
              (category) =>
                category.categories[0] === "Writers Feed" ||
                category.categories[1] === "Writers Feed"
            )
            .map((list) => (
              <div className="Block-section">
                <Link
                  to={"/Blogs/" + list.slug.current}
                  key={list.slug.current}
                >
                  <div className="imageSection">
                    <img src={list.mainImage.asset.url} />
                  </div>
                  <div className="categoryAllmenu">
                    <a className="allCategorymenu">
                      {" "}
                      {list.categories[0] === "Writers Feed"
                        ? list.categories[0]
                        : list.categories[1]}
                    </a>
                  </div>
                  <div className="headingAllmenuDiv">
                    <a className="headingAllmenu">{list.title}</a>
                  </div>
                  <div className="author-dateAllmenu">
                    <a className="headingAllDate">
                      {list.authorName} /{" "}
                      {moment(list._createdAt).format("MMMM Do YYYY")}
                    </a>
                  </div>
                </Link>
              </div>
            ))
        )}
      </div>
    </div>
  );
}
