import React from "react";
import "./LifeStyle.css";
export default function LifeStyleText(props) {
  console.log(props);
  return (
    <div>
      <div className="lifeStyle-container">
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
