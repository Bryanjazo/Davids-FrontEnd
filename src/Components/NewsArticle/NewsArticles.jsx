import React from "react";
import ImgMediaCard from "../Card/Card";
export default function NewsArticles(news) {
  const cardOne = news.news.map((first) =>
    first.first.results
      .filter((data) => data.image_url)
      .map((news) => <ImgMediaCard media={news} />)
  );
  const cardTwo = news.news.map((second) =>
    second.second.results
      .filter((data) => data.image_url)
      .map((news) => <ImgMediaCard media={news} />)
  );

  // news.news.map((first) =>first.first.results.filter((data) => data.image_url).map((news => news))
  return (
    <div>
      <div>{cardOne}</div>
      <div>{cardTwo}</div>
    </div>
  );
}
