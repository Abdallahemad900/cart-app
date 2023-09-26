import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


const cartslice = createSlice({
    name: 'cartslice',
    initialState: [],
    reducers: {
        addToCart:(state ,action)=> {
            state.push(action.payload)
        },
        deleteFromCart:(state,action) =>{},
        clear:(state,action)=>{}
    },
   
  })

  export const {addToCart,deleteFromCart,clear} = cartslice.actions;
  export default cartslice.reducer
