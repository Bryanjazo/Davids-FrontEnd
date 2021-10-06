import { configureStore } from "@reduxjs/toolkit";
import CryptoReduxer from "../Redux/CryptoReduxer";

export default configureStore({
  reducer: {
    crypto: CryptoReduxer,
  },
});
