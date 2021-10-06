import React from "react";
import "./CryptoTicker.css";
export default function CryptoTickers(crypto) {
  return (
    <div className="header"><div className="hmove">
      {crypto.crypto.map((arr) =>
        arr.map((crypto) => (
          <div className="crypto">
            <ul className="navMenu">
              <div className="div-menu">
                <li className="navLink">
                  <img
                    className="Crypto-Img"
                    src={crypto.logo_url}
                    alt={crypto.name}
                  />
                  {crypto.symbol} {Math.floor(crypto.price)}
                </li>
              </div>
            </ul>
          </div>
        ))
      )}
      </div></div>
  );
}
