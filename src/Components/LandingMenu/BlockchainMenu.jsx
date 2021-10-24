import React from "react";

import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import moment from "moment";
import { Link } from "react-router-dom";
export default function BlockchainMenu() {
  const { blogs } = useSelector((state) => state.crypto);
  console.log(blogs);
  return (
    <div className="PageSection">
      <h3 className="title">Blockchain</h3>
      <div className="cardSections">
        {blogs.map((item) =>
          item
            .filter(
              (category) =>
                category.categories[0] === "Blockchain" ||
                category.categories[1] === "Blockchain"
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
                      {list.categories[0] === "Learn Crypto"
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
