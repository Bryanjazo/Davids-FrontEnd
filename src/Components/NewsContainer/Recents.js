import React, { useEffect, useState } from "react";
import RecentsCard from "../Card/RecentsCard";
import "./recents.css";
import { useSelector } from "react-redux";
export default function Recents() {
  const [headlines, setHeadlines] = useState([]);
  const { blogs } = useSelector((state) => state.crypto);
  // useEffect(() => {
  //   fetch("http://localHost:8080/api/v1/headlines")
  //     .then((resp) => resp.json())
  //     .then((data) => setHeadlines(data));
  // }, []);

  return (
    <div className="recentSection">
      <h3 className="recentsTitle">Recents</h3>
      {blogs.map((blog) =>
        blogs.map((item) =>
          item
            .filter((category) => category.categories[0] === "Recents")
            .map((blogD) => <RecentsCard {...blogD} />)
        )
      )}
    </div>
  );
}
