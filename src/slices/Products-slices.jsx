import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const fetchProducts = createAsyncThunk("productsSlices/fetchProducts",async()=>{
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data; 
})

const productsSlices = createSlice({
  name: 'productsSlices',
  initialState: [],
  reducers: {
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
        return action.payload;
    })
  }
})
export default productsSlices.reducer;
export const {} = productsSlices.actions;
