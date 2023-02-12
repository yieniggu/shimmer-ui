import { configureStore } from "@reduxjs/toolkit";
import { contactSlice } from "./slices/contact/contactSlice";
import { productsSlice } from "./slices/products";
import { UISlice } from "./slices/ui";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    ui: UISlice.reducer,
    contacts: contactSlice.reducer,
  },
});
