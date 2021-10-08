import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getcryptos, getnewsArticles } from "../Redux/CryptoReduxer";
import { useSelector } from "react-redux";
import CryptoTickers from "./Crypto/CryptoTickers";
import NewsArticles from "./NewsContainer/NewsArticles";

import HeadlineCard from "./Card/HeadlineCard";
import Features from "./NewsContainer/Features";
import Recents from "./NewsContainer/Recents";
import "./Home.css";
import Lifestyle from "./NewsContainer/Lifestyle";
import BlockChain from "./NewsContainer/BlockChain";
import LearnCrypto from "./NewsContainer/LearnCrypto";
import WritersFeed from "./NewsContainer/WritersFeed";
export default function Home() {
  const { cryptos, newsArticles } = useSelector((state) => state.crypto);

  console.log(newsArticles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcryptos());
    dispatch(getnewsArticles());
  }, []);

  return (
    <div className="home">
      <CryptoTickers crypto={cryptos} />

      <div className="split">
        <NewsArticles news={newsArticles} />
        <Features />
        <Recents />
        <Lifestyle />
        <BlockChain />
        <LearnCrypto />
        <WritersFeed />
      </div>
    </div>
  );
}
