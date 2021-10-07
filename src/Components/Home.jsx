import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getcryptos, getnewsArticles } from "../Redux/CryptoReduxer";
import { useSelector } from "react-redux";
import CryptoTickers from "./CryptoTickers";
import NewsArticles from "./NewsArticle/NewsArticles";
export default function Home() {
  const { cryptos, newsArticles } = useSelector((state) => state.crypto);

  console.log(newsArticles);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcryptos());
    dispatch(getnewsArticles());
  }, []);

  return (
    <div>
      <CryptoTickers crypto={cryptos} />
      <NewsArticles news={newsArticles} />
    </div>
  );
}
