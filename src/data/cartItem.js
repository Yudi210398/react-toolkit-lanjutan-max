import { createSlice } from "@reduxjs/toolkit";

const cartItems = createSlice({
  name: `cartItem`,
  initialState: {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
  },
  reducers: {
    tambahitem(state, action) {
      const itemBaru = action.payload;
      const adaItem = state.items.find((item) => item.id === itemBaru.id);
      state.totalQuantity++;

      if (!adaItem) {
        state.items.push({
          id: itemBaru.id,
          harga: itemBaru.harga,
          quantity: 1,
          totalHarga: itemBaru.harga,
          nama: itemBaru.nama,
        });
      } else {
        adaItem.quantity++;
        adaItem.totalHarga = adaItem.totalHarga + itemBaru.harga;
      }

      state.totalPrice = state.items
        .map((a) => a.totalHarga)
        .reduce((a, b) => a + b, 0);
    },

    hapusItem(state, action) {
      const id = action.payload;
      const adaItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      if (adaItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        adaItem.quantity--;
        adaItem.totalHarga = adaItem.totalHarga - adaItem.harga;
      }

      state.totalPrice = state.items
        .map((a) => a.totalHarga)
        .reduce((a, b) => a + b, 0);
    },
  },
});

export const itemBarang = cartItems.actions;
export default cartItems.reducer;
