import { createSlice } from "@reduxjs/toolkit";

const carts = createSlice({
  name: "cart",
  initialState: { showCard: false },
  reducers: {
    showNow(state) {
      state.showCard = !state.showCard;
    },
  },
});

export const cardShow = carts.actions;

export default carts.reducer;
