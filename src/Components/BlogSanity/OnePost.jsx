import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../Client/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
import moment from "moment";
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
      <div className="rightSide">
        <h1>gello</h1>
      </div>
      <div className="blogTitleContainer">
        <h1 className="blogTitle">{postData.title}</h1>
      </div>
      <div className="categoriesContainer">
        <p className="category">
          <i class="far fa-clone"></i> {postData.categories[0]}
        </p>
        <p className="date">
          <i class="far fa-calendar"></i>{" "}
          {moment(postData._createdAt).format("MMMM Do YYYY")}
        </p>
        <p className="author">
          <i class="far fa-user-circle"></i> {postData.authorName}
        </p>
      </div>

      <div className="BlogContainer">
        <div className="imgContainer">
          <img
            className="mainImage"
            src={urlFor(postData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          />
        </div>
        <div className="body">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>

    // <div className=" min-h-screen p-12">
    //   <div className="container shadow-lg mx-auto rounded-lg">
    //     <div className="relative">
    //       <div className="absolute h-full w-full flex items-center justify-center p-8">
    //         {/* Title Section */}
    //         <div className="bg-white bg-opacity-75 rounded p-12">
    //           <h2 className="cursive text-3xl lg:text-6xl mb-4">
    //             {postData.title}
    //           </h2>
    //           <div className="flex justify-center text-gray-800">
    //             <h4 className="cursive flex items-center pl-2 text-2xl">
    //               {postData.name}
    //             </h4>
    //           </div>
    //         </div>
    //       </div>
    //       <img
    //
    //         src={urlFor(postData.mainImage).url()}
    //         alt=""
    //         style={{ height: "400px" }}
    //       />
    //     </div>
    //     <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
    //       <BlockContent
    //         blocks={postData.body}
    //         projectId={sanityClient.clientConfig.projectId}
    //         dataset={sanityClient.clientConfig.dataset}
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}
