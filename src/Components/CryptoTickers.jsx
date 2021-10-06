import React from "react";
import "./CryptoTicker.css";
export default function CryptoTickers(crypto) {
  return (
    <header className="header">
      {crypto.crypto.map((arr) =>
        arr.map((crypto) => (
          <nav className="navbar">
            <ul className="nav-menu">
              <li className="nav-item">
                <img
                  className="Crypto-Img"
                  src={crypto.logo_url}
                  alt={crypto.name}
                />
                {crypto.symbol} {Math.floor(crypto.price)}
              </li>
            </ul>
          </nav>
        ))
      )}
    </header>
  );
}
