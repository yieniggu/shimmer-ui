import React from "react";
import { ProductCard } from "../card/ProductCard";
import { ProductsList } from "./ProductsList";

export const Buy = () => {
  return (
    <div className="bg-diamonds-transparent py-10">
      <h1 className="mx-auto w-fit font-mabry-me text-3xl text-center mt-10 border-b-2 border-r-2 border-gray-300 px-2 text-title">
        EQUIPOS DISPONIBLES
      </h1>

      <ProductsList />
    </div>
  );
};
