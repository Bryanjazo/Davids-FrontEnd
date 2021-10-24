import React from "react";

import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import moment from "moment";
import { Link } from "react-router-dom";
export default function AllBlogs() {
  const { blogs } = useSelector((state) => state.crypto);
  return (
    <div className="PageSection">
      <h3 className="title">All Blogs</h3>

      <div className="cardSections">
        {blogs.map((item) =>
          item.map((list) => (
            <div className="Block-section">
              <Link to={"/Blogs/" + list.slug.current} key={list.slug.current}>
                <div className="imageSection">
                  <img src={list.mainImage.asset.url} />
                </div>
                <div className="categoryAllmenu">
                  <a className="allCategorymenu">
                    {" "}
                    {list.categories[0] === "Recents"
                      ? list.categories[1]
                      : list.categories[0]}
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
