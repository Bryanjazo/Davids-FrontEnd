import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getcryptos, getnewsArticles } from "../Redux/CryptoReduxer";
import { useSelector } from "react-redux";
import CryptoTickers from "./Crypto/CryptoTickers";
import NewsArticles from "./NewsContainer/NewsArticles";
import Teamheader from "./TeamContainer/Teamheader";
import HeadlineCard from "./Card/HeadlineCard";
import Features from "./NewsContainer/Features";
import Recents from "./NewsContainer/Recents";
import "./Home.css";
import Lifestyle from "./LifestyleContainer/Lifestyle";
import BlockChain from "./BlockChainContainer/BlockChain";
import LearnCrypto from "./LearnCrypto/LearnCrypto";
import WritersFeed from "./WritersFeed/WritersFeed";
import Footer from "./Footer/Footer";
export default function Home() {
  const { cryptos, newsArticles } = useSelector((state) => state.crypto);

  console.log(newsArticles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcryptos());
    // dispatch(getnewsArticles());
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
        <Teamheader />
      </div>
    </div>
  );
}
