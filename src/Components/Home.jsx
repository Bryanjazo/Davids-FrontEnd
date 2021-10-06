import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getcryptos } from "../Redux/CryptoReduxer";
import { useSelector } from "react-redux";
import CryptoTickers from "./CryptoTickers";
export default function Home() {
  const { cryptos } = useSelector((state) => state.crypto);

  console.log(cryptos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcryptos());
  }, []);

  return (
    <div>
      <CryptoTickers crypto={cryptos} />
    </div>
  );
}
