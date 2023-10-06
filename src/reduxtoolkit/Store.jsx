import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ProductsSlices from '../slices/Products-slices';
import CartSlices from '../slices/Cart-slices';

const rootReducer = combineReducers({
  products: ProductsSlices,
  cart: CartSlices,
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = [...getDefaultMiddleware({ serializableCheck: false })];

export const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

export const persistor = persistStore(store);