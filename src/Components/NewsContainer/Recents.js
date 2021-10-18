import React, { useEffect, useState } from "react";
import RecentsCard from "../Card/RecentsCard";
import "./recents.css";

export default function Recents() {
  const [headlines, setHeadlines] = useState([]);
  // useEffect(() => {
  //   fetch("http://localHost:8080/api/v1/headlines")
  //     .then((resp) => resp.json())
  //     .then((data) => setHeadlines(data));
  // }, []);
  return (
    <div className="recentSection">
      <h3 className="recentsTitle">Recents</h3>
      {headlines.map((headline) => (
        <RecentsCard {...headline} />
      ))}
    </div>
  );
}
