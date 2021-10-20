import React from "react";
import { useSelector, useDispatch } from "react-redux";
export default function BlogPost(props) {
  const { Blogs } = useSelector((state) => state.crypto);

  console.log(Blogs, "Blogs");
  return (
    <div>
      <p>{Blogs.blog_text}</p>
    </div>
  );
}
