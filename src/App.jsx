import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "./App.css";
import { Modal } from "./components/modal/Modal";
import { AppRouter } from "./router";
import {
  fetchProducts,
  fetchQuotes,
  restoreCart,
} from "./store/slices/products";

import "react-toastify/dist/ReactToastify.css";
import { setIdentifier } from "./store/slices/ui";
import { fetchContacts } from "./store/slices/contact/thunks";

function App() {
  const { cart, cartRestored, cartUpdate, productsFirstFetch } = useSelector(
    (state) => state.products
  );

  const { contactsFirstFetch } = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("restoring cart");
    dispatch(restoreCart());
    dispatch(setIdentifier());

    productsFirstFetch && dispatch(fetchProducts());
  }, []);

  useEffect(() => {
    if (cartRestored) {
      console.log("cart Update: ", cartUpdate, cart);
      localStorage.cart = JSON.stringify(cart);
    }
  }, [cartUpdate]);

  return (
    <div className="App">
      <Modal />
      <ToastContainer autoClose={2000} />

      <AppRouter />
    </div>
  );
}

export default App;
