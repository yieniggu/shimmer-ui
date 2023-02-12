import { toast } from "react-toastify";
import {
  addNewQuote,
  getProducts,
  getQuotes,
} from "../../../firebase/firestore";
import { downloadImage } from "../../../firebase/storage";
import { getCartFromStorage } from "../../../helpers/cart";
import { openModal, setQuoteSent, setSendingQuote } from "../ui";
import {
  setBuyingProduct,
  setCart,
  setLoadingProducts,
  setProducts,
  setProductsFirstFetch,
  editProductOnCart,
  increaseCartUpdate,
  removeProductFromCart,
  setLoadingQuotes,
  addQuote,
  setQuotes,
} from "./productsSlice";

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(setLoadingProducts(true));

    try {
      const productsDocs = await getProducts();

      const products = await setProductsData(productsDocs);
      dispatch(setProducts(products));
      dispatch(setLoadingProducts(false));
      dispatch(setProductsFirstFetch(false));
    } catch (e) {
      console.error(e);
      dispatch(setProducts([]));
      dispatch(setLoadingProducts(false));
      dispatch(setProductsFirstFetch(false));
    }
  };
};

const setProductsData = async (productsDocs) => {
  let finalProducts = [];

  for (let productDoc of productsDocs) {
    let finalProduct = productDoc.data();
    finalProduct.id = productDoc.id;
    console.log(finalProduct);

    const url = await downloadImage(productDoc.id + ".png");
    finalProduct.imageUrl = url;

    finalProducts.push(finalProduct);
  }

  return finalProducts;
};

export const buyingProduct = (type, product) => {
  return async (dispatch) => {
    dispatch(openModal(type));

    dispatch(setBuyingProduct({ product }));
  };
};

export const restoreCart = () => {
  return async (dispatch) => {
    console.log("restore thunk");
    const cart = getCartFromStorage();

    console.log("cart: ", cart);

    dispatch(setCart(cart));
  };
};

export const editProduct = (product) => {
  return async (dispatch) => {
    dispatch(editProductOnCart(product));
    dispatch(increaseCartUpdate());
  };
};

export const removeProduct = (product) => {
  return async (dispatch) => {
    dispatch(removeProductFromCart(product));
    return toast.warn("Producto eliminado con exito", {
      position: "top-right",
      autoClose: 2000,
    });
  };
};

export const fetchQuotes = (agentId) => {
  return async (dispatch) => {
    dispatch(setLoadingQuotes(true));

    const snapshot = await getQuotes(agentId);
    console.log("snap: ", snapshot);

    dispatch(setQuotes([]));
    snapshot.forEach((doc) => {
      dispatch(addQuote({ id: doc.id, ...doc.data() }));
    });

    dispatch(setLoadingQuotes(false));
  };
};

export const newQuote = (cart, contactFields) => {
  return async (dispatch) => {
    // console.log(cart, contactFields);
    dispatch(setSendingQuote(true));

    const id = toast.loading("Enviando solicitud de contacto");

    try {
      await addNewQuote(cart, contactFields);
      toast.update(id, {
        render: "Cotizacion enviada",
        type: "success",
        isLoading: false,
      });
      dispatch(addQuote({ cart, ...contactFields }));
      setQuoteSent(true);
      dispatch(resetCart());
    } catch (error) {
      console.error(error);
      toast.update(id, {
        render: "Ups! algo salio mal",
        type: "error",
        isLoading: false,
      });
    } finally {
      setTimeout(() => {
        toast.done(id);
      }, 1000);
      dispatch(setSendingQuote(false));
    }
  };
};

export const resetCart = () => {
  return async (dispatch) => {
    dispatch(setCart([]));

    localStorage.removeItem("cart");
  };
};
