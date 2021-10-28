import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../Client/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import Recents from "../Card/RecentsCard";

import ReactPlayer from "react-player";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  EmailIcon,
  EmailShareButton,
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";
import moment from "moment";

import { useSelector } from "react-redux";
import "./BothPost.css";
const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const override = css`
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -100px;
  overlay-y: scroll;
`;

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { blogs } = useSelector((state) => state.crypto);
  const { slug } = useParams();
  console.log(postData);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
          _createdAt,
          "authorName": author->name,
          createdAt,
          "categories": categories[]->title,
          "authorImage": author->image,
            mainImage{
        asset->{
           _id,
           url
         }
       },
          body
        }`,
        { slug }
      )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);
  if (!postData)
    return (
      <div className="ringLoaderContainer">
        <div className="ringLoader">
          <RingLoader size={50} />
        </div>
      </div>
    );

  return (
    <div>
      <div className="blogPost">
        <div className="One">
          <div className="videoLinks">
            <ReactPlayer
              width="100%"
              height="25rem"
              url="https://www.youtube.com/watch?v=99TA8w4fJdc&feature=emb_title"
            />
          </div>
        </div>

        <div className="Two">
          <div className="blogTitleContainer">
            <h1 className="blogTitle">{postData.title}</h1>
          </div>

          <div className="imgContainer">
            <img
              className="mainImage"
              src={urlFor(postData.mainImage).url()}
              alt=""
              style={{ height: "400px" }}
            />
          </div>
          <div className="authorDate">
            <div className="authoImg">
              {!postData.authorImage ? (
                ""
              ) : (
                <img
                  className="authorImgs"
                  src={urlFor(postData.authorImage.asset._ref).url()}
                  alt=""
                />
              )}
            </div>
            <div className="infoContainer">
              <p className="author">
                By {postData.authorName} {"/"}
              </p>

              <p className="date">
                {moment(postData._createdAt).format("MMMM Do YYYY")}
              </p>
            </div>
          </div>
          <div className="body">
            <BlockContent
              blocks={postData.body}
              projectId={sanityClient.clientConfig.projectId}
              dataset={sanityClient.clientConfig.dataset}
            />
          </div>
        </div>

        <div className="Three">
          <div className="sharableLinks">
            <div className="shareText">
              <p>Share</p>
            </div>

            <div className="shareIcon">
              <FacebookShareButton
                url={"http://localhost:3000/Blogs/" + postData.slug.current}
              >
                <FacebookIcon size={25} round={true} />
              </FacebookShareButton>
            </div>
            <div className="shareIcon">
              <TwitterShareButton
                url={"http://localhost:3000/Blogs/" + postData.slug.current}
              >
                <TwitterIcon size={25} round={true} />
              </TwitterShareButton>
            </div>
            <div className="shareIcon">
              <LinkedinShareButton
                url={"http://localhost:3000/Blogs/" + postData.slug.current}
              >
                <LinkedinIcon size={25} round={true} />
              </LinkedinShareButton>
            </div>
            <div className="shareIcon">
              <EmailShareButton
                url={"http://localhost:3000/Blogs/" + postData.slug.current}
              >
                <EmailIcon size={25} round={true} />
              </EmailShareButton>
            </div>
            <div className="shareIcon">
              <TelegramShareButton
                url={"http://localhost:3000/Blogs/" + postData.slug.current}
              >
                <TelegramIcon size={25} round={true} />
              </TelegramShareButton>
            </div>
            <div className="shareIcon">
              <WhatsappShareButton
                url={"http://localhost:3000/Blogs/" + postData.slug.current}
              >
                <WhatsappIcon size={25} round={true} />
              </WhatsappShareButton>
            </div>
          </div>
        </div>
      </div>
      <div className="relatedTopics">
        <div className="topicsTitle">
          <h1>Realted Topics</h1>
        </div>
        <div className="blogSection">
          {blogs.map((item) =>
            item.map((list) => (
              <div className="Blog">
                <Link
                  to={"/Blogs/" + list.slug.current}
                  key={list.slug.current}
                >
                  <div className="imageBlog">
                    {console.log(list)}
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
    </div>
  );
}
