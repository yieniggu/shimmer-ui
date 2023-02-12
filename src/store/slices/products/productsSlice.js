import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loadingProducts: true,
  productsFirstFetch: true,
  loadingProduct: true,
  products: null,
  selectedProduct: null,
  buyingProduct: null,
  loadingQuotes: true,
  loadingQuote: true,
  quotesFirstFetch: true,
  quotes: null,
  selectedQuote: null,
  cart: null,
  cartRestored: false,
  cartUpdate: 0,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setSelectedProduct: (state, { payload }) => {
      state.selectedProduct = payload;
    },
    setBuyingProduct: (state, { payload }) => {
      state.buyingProduct = payload;
    },
    setLoadingProduct: (state, { payload }) => {
      state.loadingProduct = payload;
    },
    setLoadingProducts: (state, { payload }) => {
      state.loadingProducts = payload;
    },
    setProductsFirstFetch: (state, { payload }) => {
      state.productsFirstFetch = payload;
    },
    setLoadingQuotes: (state, { payload }) => {
      state.loadingQuotes = payload;
    },
    setQuotes: (state, { payload }) => {
      state.quotes = payload;
    },
    addQuote: (state, { payload }) => {
      state.quotes.push(payload);
    },
    setSelectedQuote: (state, { payload }) => {
      state.selectedQuote = payload;
    },
    removeQuote: (state, { payload }) => {
      state.quotes = state.quotes.filter(quote.id !== payload.id);
    },
    setCart: (state, { payload }) => {
      state.cart = payload;
      state.cartRestored = true;
    },
    addProductToCart: (state, { payload }) => {
      state.cart.push(payload);
      state.cartUpdate++;
    },
    removeProductFromCart: (state, { payload }) => {
      state.cart = state.cart.filter(
        (product) => product.name !== payload.name
      );
      state.cartUpdate++;
    },
    editProductOnCart: (state, { payload }) => {
      const index = state.cart.findIndex(
        (product) => product.name === payload.name
      );

      state.cart[index] = payload;
    },
    increaseCartUpdate: (state) => {
      state.cartUpdate++;
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  setLoadingProduct,
  setLoadingProducts,
  setBuyingProduct,
  setProductsFirstFetch,
  setQuotes,
  setLoadingQuotes,
  setCart,
  addProductToCart,
  removeProductFromCart,
  editProductOnCart,
  addQuote,
  removeQuote,
  increaseCartUpdate,
} = productsSlice.actions;
