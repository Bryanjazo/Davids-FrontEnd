import React, { useState, useEffect } from "react";
import sanityClient from "../../Client/client";
import { Link } from "react-router-dom";

export default function AllPost() {
  const [allPostsData, setAllPosts] = useState(null);
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
            title,
            slug,
            "author": author->name,
            mainImage{
              asset->{
              _id,
              url
            } 
          }
        }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  console.log(allPostsData);
  return (
    <div className="min-h-screen">
      <div className="container mx-auto">
        <h2 className="text-6xl flex justify-center">Blog Posts</h2>
        <h3 className="text-xl text-gray-600 flex justify-center mb-11 mt-5">
          Welcome to my blog posts page!
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {allPostsData &&
            allPostsData.map((post, index) => (
              <Link to={"/Blogs/" + post.slug.current} key={post.slug.current}>
                <span
                  className="block h-72 relative rounded shadow leading-snug bg-white
                    border-l-8 border-purple-800"
                  key={index}
                >
                  <img
                    className="w-full h-full rounded-r object-cover absolute"
                    src={post.mainImage.asset.url}
                    alt=""
                  />
                  <span
                    className="block relative h-full flex justify-end items-end pr
                    -4 pb-4"
                  >
                    <h2
                      className="text-gray-800 text-lg font-bold px-3 py-4 bg-red-700
                      text-red-100 bg-opacity-75 rounded"
                    >
                      {post.title}
                    </h2>
                  </span>
                </span>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
