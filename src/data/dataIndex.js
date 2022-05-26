import { configureStore } from "@reduxjs/toolkit";
import cartItem from "./cartItem.js";
import tampilCard from "./cartSlice.js";

const data = configureStore({
  reducer: { uiCard: tampilCard, items: cartItem },
});

export default data;
