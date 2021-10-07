import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// News Api Key
// pub_16460f40f944c9cf18b904131a8b1b89ba7f
// https://newsdata.io/api/1/news?apikey=pub_16460f40f944c9cf18b904131a8b1b89ba7f&country=us
export const getcryptos = createAsyncThunk("crypto/getcryptos", async () => {
  const response = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=5ad6d9416ed39edbcd7d16bf27de2c127bbb6f57&ids=BTC,ETH,XRP,ADA,BNB,USDT,SOL,BCH,MATIC,VET,CAKE,LINK,BUSD,AVAX,ALGO,LUNA,DOGE,ICP,AXS,XLM,FIL&interval=1h&per-page=100&page=1`
  );
  const data = await response.json();
  return data;
});

const cryptoStore = createSlice({
  name: "crypto",
  initialState: {
    cryptos: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getcryptos.fulfilled, (state, action) => {
      state.cryptos.push(action.payload);
    });
  },
});

export const {} = cryptoStore.actions;

export default cryptoStore.reducer;
