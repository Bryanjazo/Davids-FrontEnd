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

import Lifestyle from "./MidSection/LifestyleContainer/Lifestyle";
import BlockChain from "./MidSection/BlockChainContainer/BlockChain";
import LearnCrypto from "./MidSection/LearnCrypto/LearnCrypto";
import WritersFeed from "./MidSection/WritersFeed/WritersFeed";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";

export default function Home() {
  const { cryptos, newsArticles } = useSelector((state) => state.crypto);

  console.log(newsArticles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcryptos());
    // dispatch(getnewsArticles());
  }, []);

  return (
    <div>
      <div className="home">
        <div className="split">
          <div className="newsSplit">
            <NewsArticles news={newsArticles} />

            <Features />

            <Recents />
          </div>

          <div className="split2">
            <Lifestyle />
            <BlockChain />
            <LearnCrypto />
            <WritersFeed />
          </div>

          <Teamheader />
        </div>
      </div>
    </div>
  );
}
