import "react-lazy-load-image-component/src/effects/blur.css";

import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { clp } from "../../helpers/cart";

import Placeholder from "../../assets/icons/placeholder-image.png";

export const QuoteItem = ({ quote }) => {
  const [totalBrutePrice, setTotalBrutePrice] = useState(0);

  useEffect(() => {
    let sum = 0;
    quote.cart &&
      quote.cart.forEach((product) => {
        const start = new Date(product.startDate);
        const end = new Date(product.endDate);

        const dif = end.getTime() - start.getTime();

        const dayDif = dif / (1000 * 3600 * 24);

        sum += product.brutePrice * product.amount * dayDif;
      });

    setTotalBrutePrice(sum);
  }, []);

  return (
    <div className="flex lg:flex-row flex-col 3xl:w-2/3 rounded-xl border border-gray-200 p-4 my-4">
      <div className="flex flex-col 2xl:w-1/2 lg:w-3/4 font-mabry-me text-gray-800 text-lg">
        <h1 className=" text-xl">Cotizacion #{quote.id}</h1>
        <h2 className="mt-4 ">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-10 2xl:gap-0 md:w-full 3xl:w-11/12">
          {quote.cart.map((product, index) => (
            <div className="flex flex-col gap-2 w-full 2xl:mr-0" key={index}>
              <p className="relative top-1/3 left-28">x{product.amount}</p>
              <div className="p-2 w-fit border border-gray-200">
                <LazyLoadImage
                  src={product.imageUrl}
                  width={100}
                  height={80}
                  placeholderSrc={Placeholder}
                  effect="blur"
                />
              </div>
              <h2 className="text-sm text-gray-600">{product.name}</h2>
              <h2 className="text-sm md:text-sm sm:text-xs">
                {product.startDate} -> {product.endDate}
              </h2>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-full xl:w-1/2 font-mabry-me text-lg text-gray-800 mt-10 xl:mt-0">
        <h2 className="text-xl mb-4">Resumen</h2>
        <div className="grid grid-cols-2 md:hidden">
          <div className="flex-col mb-10 text-sm">
            <h1>Total sin IVA</h1>
            <h2>{clp.format(totalBrutePrice)}</h2>
          </div>
          <div className="flex-col mb-10 text-sm">
            <h1>IVA</h1>
            <h2>{clp.format(totalBrutePrice * 0.19)}</h2>
          </div>
          <div className="flex-col mb-10 text-sm">
            <h1>TOTAL</h1>
            <h2>{clp.format(totalBrutePrice * 1.19)}</h2>
          </div>
        </div>
        <div className="flex-row justify-between text-lg px-4 hidden md:flex">
          <h2>Total sin IVA</h2>
          <h2>IVA</h2>
          <h2>TOTAL</h2>
        </div>
        <div className="hidden md:flex flex-row justify-between px-4">
          <h2>{clp.format(totalBrutePrice)}</h2>
          <h2>{clp.format(totalBrutePrice * 0.19)}</h2>
          <h2>{clp.format(totalBrutePrice * 1.19)}</h2>
        </div>
        <h2 className="mt-4">Datos de Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-sm text-gray-600 mt-6 lg:pr-10 mb-10">
          <h2>{quote.name}</h2>
          <h2>{quote.rut}</h2>
          <h2>{quote.email}</h2>
          <h2>{quote.phone}</h2>
        </div>
        <div
          className={`rounded-full ml-auto px-6 py-2 ${
            quote.state === "created" && "bg-yellow-400 text-gray-500"
          }
            ${quote.state === "success" && "bg-green-400 text-gray-600"}
            ${quote.state === "rejected" && "bg-red-400 text-gray-600"}
          }`}
        >
          {quote.state === "created" && "En proceso"}
          {quote.state === "success" && "Cotizacion Resuelta"}

          {quote.state === "rejected" && "Cotizacion Rechazada"}
        </div>
      </div>
    </div>
  );
};
