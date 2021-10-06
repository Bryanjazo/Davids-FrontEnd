import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getcryptos = createAsyncThunk("crypto/getcryptos", async () => {
  const response = await fetch(
    `https://api.nomics.com/v1/currencies/ticker?key=5ad6d9416ed39edbcd7d16bf27de2c127bbb6f57&ids=BTC,ETH,XRP&interval=1h&per-page=100&page=1`
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
