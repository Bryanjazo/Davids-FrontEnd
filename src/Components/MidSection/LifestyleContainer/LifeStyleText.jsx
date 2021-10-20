import React from "react";
import "./LifeStyle.css";
import { useHistory } from "react-router-dom";
import BlogPost from "../../BlogContainer/BlogPost";
import { AddBlog } from "../../../Redux/CryptoReduxer";
import { useSelector, useDispatch } from "react-redux";
export default function LifeStyleText(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = (e, props) => {
    e.preventDefault();
    dispatch(AddBlog(props));
    history.push(`/Blogs`);
  };
  return (
    <div>
      <div
        className="lifeStyle-container"
        onClick={(e) => handleClick(e, props)}
      >
        <div className="lifeStyle-Header">
          <h1>{props.header}</h1>
        </div>
        <div className="lifeStyle-paragraph">
          <p className="Date">{props.date}</p>
        </div>
      </div>
    </div>
  );
}
