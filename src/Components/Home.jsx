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
import LearnCryptoHeading from "./MidSection/LearnCrypto/LearnCryptoHeading";
import WritersHeading from "../Components/MidSection/WritersFeed/WritersHeading";
import Footer from "./Footer/Footer";
import NavBar from "./NavBar/NavBar";
import { getBlogs } from "../Redux/CryptoReduxer";
import BlockchainHeadings from "./MidSection/BlockChainContainer/BlockchainHeadings";
export default function Home() {
  const { cryptos, newsArticles, blogs } = useSelector((state) => state.crypto);

  return (
    <div>
      <div className="home">
        <div className="split">
          <div className="newsSplit">
            <NewsArticles />

            <Features />

            <Recents />
          </div>

          <div className="split2">
            <Lifestyle />
            <BlockchainHeadings />
            <LearnCryptoHeading />
            <WritersHeading />
          </div>

          {/* <Teamheader /> */}
        </div>
      </div>
    </div>
  );
}
