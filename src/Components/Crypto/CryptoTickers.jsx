import React from "react";
import "./CryptoTicker.css";
const roundAccurately = (number, decimalPlaces) => Number(Math.round(number + "e" + decimalPlaces) + "e-" + decimalPlaces);
export default function CryptoTickers(crypto) {
  return (
    <div className="headerCrypto"><section><div className="scroll hmove">
        {crypto.crypto.map((arr) => arr.map((crypto) => (
            <div className="crypto">
              <ul className="navMenu">
                <div className="div-menu">
                  <li className="navLink">
                    <img
                      className="Crypto-Img"
                      src={crypto.logo_url}
                      alt={crypto.name}
                    />
                    {crypto.symbol}{" "}
                    {crypto.price > 50
                      ? Math.round(crypto.price)
                      : Math.round(crypto.price * 1000) / 1000}
                  </li>
                </div>
              </ul>
            </div>
          ))
        )}
        </div>
        {/* <div className="scroll hmove2">
        {crypto.crypto.map((arr) => arr.map((crypto) => (
            <div className="crypto">
              <ul className="navMenu">
                <div className="div-menu">
                  <li className="navLink">
                    <img
                      className="Crypto-Img"
                      src={crypto.logo_url}
                      alt={crypto.name}
                    />
                    {crypto.symbol}{" "}
                    {crypto.price > 50
                      ? Math.round(crypto.price)
                      : Math.round(crypto.price * 1000) / 1000}
                  </li>
                </div>
              </ul>
            </div>
          ))
        )}
        </div> */}
        </section></div> 
  );
}
