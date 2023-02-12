import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Cart from "../../assets/icons/cart-icon.png";

export const CartIcon = () => {
  const { cart } = useSelector((state) => state.products);

  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div
      className="flex w-20 h-12 my-auto cursor-pointer rounded-md bord group"
      onClick={goToCart}
    >
      <img className="relative w-12 h-12 my-auto ml-4" src={Cart} />
      <span className="absolute inline-flex top-12 h-8 w-8 rounded-full bg-card-button opacity-80 group-hover:opacity-100 soft">
        <p className="text-title text-sm my-auto mx-auto font-bold">
          {cart ? cart.length : 0}
        </p>
      </span>
    </div>
  );
};
