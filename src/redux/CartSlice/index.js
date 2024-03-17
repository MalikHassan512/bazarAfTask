import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartCount: [],
    products: [],
    countOfSingleProduct: {},
  },
  reducers: {
    setCartCount: (state, action) => {
      // state.cartCount = action.payload;
      state.cartCount.push(action.payload);
    },

    setProducts: (state, action) => {
      // state.products = action.payload;
      state.products.push(action.payload);

      //remove duplicate products
      state.products = state.products.filter(
        (product, index, self) =>
          index ===
          self.findIndex(
            t => t[0].id === product[0].id && t[0].title === product[0].title,
          ),
      );
    },

    setCountOfSingleProduct: (state, action) => {
      const {productId, count} = action.payload;
      state.countOfSingleProduct[productId] = count;
    },
  },
});

export const {setCartCount} = cartSlice.actions;
export const {setProducts} = cartSlice.actions;
export const {setCountOfSingleProduct} = cartSlice.actions;

export default cartSlice.reducer;
