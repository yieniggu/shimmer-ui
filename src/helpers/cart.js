export const saveCartToStorage = (cart) => {
  localStorage.cart = cart;
};

export const getCartFromStorage = () => {
  if (localStorage.cart) return JSON.parse(localStorage.cart);

  return [];
};

export const clp = Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});
