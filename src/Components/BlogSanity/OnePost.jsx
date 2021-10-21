import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import sanityClient from "../../Client/client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/react";
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
            mainImage{
            asset->{
               _id,
               url
             }
           },
           body,
           "name": author->name,
           "authorImage": author->image
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
    <div className="bg-gray-200 min-h-screen p-12">
      <div className="container shadow-lg mx-auto rounded-lg">
        <div className="relative">
          <div className="absolute h-full w-full flex items-center justify-center p-8">
            {/* Title Section */}
            <div className="bg-white bg-opacity-75 rounded p-12">
              <h2 className="cursive text-3xl lg:text-6xl mb-4">
                {postData.title}
              </h2>
              <div className="flex justify-center text-gray-800">
                <h4 className="cursive flex items-center pl-2 text-2xl">
                  {postData.name}
                </h4>
              </div>
            </div>
          </div>
          <img
            className="w-full object-cover rounded-t"
            src={urlFor(postData.mainImage).url()}
            alt=""
            style={{ height: "400px" }}
          />
        </div>
        <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full">
          <BlockContent
            blocks={postData.body}
            projectId={sanityClient.clientConfig.projectId}
            dataset={sanityClient.clientConfig.dataset}
          />
        </div>
      </div>
    </div>
  );
}
