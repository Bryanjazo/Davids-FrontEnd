import React from "react";
import ImgMediaCard from "../Card/Card";
export default function NewsArticles(news) {
  return (
    <div>
      {news.news.map((res) =>
        res.results.map((news) => <ImgMediaCard media={news} />)
      )}
    </div>
  );
}
