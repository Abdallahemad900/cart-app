import { configureStore } from '@reduxjs/toolkit'
import ProductsSlices from '../slices/Products-slices'
import CartSlices from '../slices/Cart-slices'


export const store = configureStore({
    reducer: {
     products : ProductsSlices , 
     cart : CartSlices
    }
  })