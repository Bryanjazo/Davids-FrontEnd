import React, { useEffect, useState } from "react";
import ImgMediaCard from "../Card/Card";
import HeadlineCard from "../Card/HeadlineCard";
import "./NewsArticle.css";
import { useSelector } from "react-redux";
import CryptoTickers from "../Crypto/CryptoTickers";
export default function NewsArticles() {
  const { cryptos, newsArticles, blogs } = useSelector((state) => state.crypto);

  return (
    <div className="headlineSection">
      <h3 className="headline">Headlines</h3>
      <div className="cardNews">
        <div className="cardNews1"></div>

        <div className="CardNews1">
          <HeadlineCard blogs={blogs} />
        </div>
      </div>
    </div>
  );
}
