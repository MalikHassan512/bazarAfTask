import {combineReducers, configureStore} from '@reduxjs/toolkit'; 
import CartSlice from './CartSlice';

const rootReducer = combineReducers({
    cart: CartSlice,
});

export const store = configureStore({
  reducer: rootReducer, 
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      // serializableCheck: false,
    }),
});
