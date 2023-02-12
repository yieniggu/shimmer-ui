import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../store/slices/products";
import { openModal } from "../../store/slices/ui";
import { LoadingCard } from "../card/LoadingCard";
import { ProductCard } from "../card/ProductCard";

export const ProductsList = () => {
  const { products, loadingProducts } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const openContactModal = () => {
    dispatch(openModal("contact"));
  };

  return (
    <div>
      {loadingProducts ? (
        <div className="grid grid-cols-3 mt-6 justify-items-center">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-6 justify-items-center gap-6 xl:gap-0">
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </div>
      )}
      <div className="text-center">
        <h1 className="font-henue-me text-xl text-center mt-10">
          No encuentras lo que buscas?
        </h1>
        <button
          className="rounded-full mt-4 bg-main-button px-8 py-2 text-gray-100 font-bold hover:text-gray-500 text-lg soft"
          onClick={openContactModal}
        >
          Contactanos
        </button>
      </div>
    </div>
  );
};
