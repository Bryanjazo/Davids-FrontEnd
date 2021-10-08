import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getcryptos, getnewsArticles } from "../Redux/CryptoReduxer";
import { useSelector } from "react-redux";
import CryptoTickers from "./CryptoTickers";
<<<<<<< HEAD
import NewsArticles from "./NewsArticle/NewsArticles";
import HeadlineCard from "./Card/HeadlineCard";
=======
import NewsArticles from "./NewsContainer/NewsArticles";
import Features from "./NewsContainer/Features"
import Recents from "./NewsContainer/Recents"
import './Home.css'



>>>>>>> origin/main
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
      <div className='split'>

      <NewsArticles news={newsArticles} />
<<<<<<< HEAD
      <HeadlineCard />
=======
      <Features/>
      <Recents/>
      </div>
      
>>>>>>> origin/main
    </div>
  );
}
