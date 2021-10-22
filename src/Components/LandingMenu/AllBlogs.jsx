import React from "react";
import LandingPage from "../LandingPages/LandingPage";
import { useSelector } from "react-redux";
import ReactPlayer from "react-player";
import moment from "moment";
export default function AllBlogs() {
  const { blogs } = useSelector((state) => state.crypto);
  return (
    <div className="PageSection">
      <h3 className="title">All Blogs</h3>
      <div className="row-right">
        <div className="imgLanding">
          <ReactPlayer
            width="92%"
            height="30rem"
            url="https://www.youtube.com/watch?v=mKrLx4ex65w&feature=emb_title"
          />
        </div>
      </div>
      {blogs.map((item) =>
        item.map((list) => (
          <div className="row">
            <div className="column left">
              {console.log(list)}
              <img className="landingPageImg" src={list.mainImage.asset.url} />
              <div className="text">
                <div className="landing-category">
                  <h3>
                    {list.categories[0] === "Recents"
                      ? list.categories[1]
                      : list.categories[0]}
                  </h3>
                </div>
                <div className="landing-titles">
                  <h2>{list.title}</h2>
                </div>

                <div className="landing-text">
                  <p className="p-landing-text">
                    The top{" "}
                    {list.categories[0] === "Recents"
                      ? list.categories[1]
                      : list.categories[0]}{" "}
                    topics in the US{" "}
                  </p>
                </div>

                <div className="landing-date-author">
                  <p className="p-landing-text">
                    {list.authorName} /{" "}
                    {moment(list._createdAt).format("MMMM Do YYYY")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
