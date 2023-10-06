import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
      addToCart: (state, action) => {
        const productToAdd = action.payload;
        const existingProduct = state.find((product) => product.id === productToAdd.id);
  
        if (existingProduct) {
          existingProduct.quantity += 1;
        } else {
          state.push({ ...productToAdd, quantity: 1 });
        }
      },
      removeFromCart: (state, action) => {
        const productIdToRemove = action.payload;
        return state.filter((product) => product.id !== productIdToRemove);
      },
      incrementQuantity: (state, action) => {
        const productIdToIncrement = action.payload;
        const productToIncrement = state.find((product) => product.id === productIdToIncrement);
        if (productToIncrement) {
          productToIncrement.quantity += 1;
        }
      },
      decrementQuantity: (state, action) => {
        const productIdToDecrement = action.payload;
        const productToDecrement = state.find((product) => product.id === productIdToDecrement);
        if (productToDecrement && productToDecrement.quantity > 1) {
          productToDecrement.quantity -= 1;
        }
      },
      clearCart: (state) => {
        return [];
      },
    },
  });
  
  export const { addToCart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = cartSlice.actions;
  export default cartSlice.reducer;