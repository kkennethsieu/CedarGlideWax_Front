import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
        existing.total = existing.quantity * existing.price;
      } else {
        state.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
          total: product.price,
          img: product.img,
        });
      }

      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.total,
        0
      );
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.items = state.items.filter((item) => item.id !== id);

      // Recalculate totals
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.total,
        0
      );
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },

    increaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        item.quantity += 1;
        item.total = item.quantity * item.price;
      }

      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.total,
        0
      );
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },

    decreaseQuantity: (state, action) => {
      const { id } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item && item.quantity > 0) {
        item.quantity -= 1;
        item.total = item.quantity * item.price;
      }

      // Recalculate totals
      state.totalAmount = state.items.reduce(
        (sum, item) => sum + item.total,
        0
      );
      state.totalQuantity = state.items.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
