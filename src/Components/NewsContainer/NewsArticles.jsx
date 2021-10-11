import React from "react";
import ImgMediaCard from "../Card/Card";
import HeadlineCard from "../Card/HeadlineCard";
import './NewsArticle.css'

export default function NewsArticles(news) {
  // const cardOne = news.news.map((first) =>
  //   first.first.results
  //     .filter((data) => data.image_url)
  //     .map((news) => <ImgMediaCard media={news} />)
  // );
  // const cardTwo = news.news.map((second) =>
  //   second.second.results
  //     .filter((data) => data.image_url)
  //     .map((news) => <ImgMediaCard media={news} />)
  // );

  // news.news.map((first) =>first.first.results.filter((data) => data.image_url).map((news => news))
  return (
    <div className="headlineSection">
      <h3 className="headline">Headlines</h3>
      <div className="cardNews">
        <div className="cardNews1"></div>
   
        <div className="CardNews1">
          <HeadlineCard />
        </div>
      </div>
    </div>
  );
}
