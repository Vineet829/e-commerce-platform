import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: false,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    openCart: (state) => {
      state.status = true;
    },
    closeCart: (state) => {
      state.status = false;
    },
    addItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        state.items[itemIndex].amount += action.payload.amount;
      } else {
        state.items.push({ ...action.payload });
      }
    },
    removeItem: (state, action) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);

      if (itemIndex >= 0) {
        if (state.items[itemIndex].amount <= action.payload.amount) {
          state.items.splice(itemIndex, 1);
        } else {
          state.items[itemIndex].amount -= action.payload.amount;
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { openCart, closeCart, addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
