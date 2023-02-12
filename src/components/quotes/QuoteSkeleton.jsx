import React from "react";
import Placeholder from "../../assets/icons/placeholder-image.png";

export const QuoteSkeleton = () => {
  return (
    <div className="flex lg:flex-row flex-col 3xl:w-2/3 rounded-xl border border-gray-200 p-4 my-4">
      <div className="flex flex-col 2xl:w-1/2 lg:w-3/4 font-mabry-me text-gray-800 text-lg">
        <h1 className="w-full h-8 sm:w-3/4 md:w-1/3 bg-gray-300 animate-pulse text-xl"></h1>
        <h2 className="mt-4 ">Productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-10 2xl:gap-0 md:w-full 3xl:w-11/12">
          <div className="flex flex-col gap-2 w-full 2xl:mr-0">
            <div className="p-2 w-3/4 sm:w-full lg:w-4/5 h-32 border border-gray-200 bg-gray-300 animate-pulse"></div>
            <h2 className="text-sm text-gray-600 w-2/3 sm:w-full h-6 bg-gray-300 animate-pulse"></h2>
            <h2 className="text-sm md:text-sm sm:text-xs w-3/4 sm:w-full h-6 bg-gray-300 animate-pulse"></h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full xl:w-1/2 font-mabry-me text-lg text-gray-800 mt-10 xl:mt-0">
        <h2 className="text-xl mb-4">Resumen</h2>
        <div className="grid grid-cols-2 md:hidden">
          <div className="flex-col mb-10 text-sm">
            <h1>Total sin IVA</h1>
            <h2 className="w-4/5 h-4 bg-gray-300 animate-pulse"></h2>
          </div>
          <div className="flex-col mb-10 text-sm">
            <h1>IVA</h1>
            <h2 className="w-4/5 h-4 bg-gray-300 animate-pulse"></h2>
          </div>
          <div className="flex-col mb-10 text-sm">
            <h1>TOTAL</h1>
            <h2 className="w-4/5 h-4 bg-gray-300 animate-pulse"></h2>
          </div>
        </div>
        <div className="flex-row justify-between text-lg px-4 hidden md:flex">
          <h2>Total sin IVA</h2>
          <h2>IVA</h2>
          <h2>TOTAL</h2>
        </div>
        <div className="hidden md:flex flex-row justify-between px-4">
          <h2 className="w-1/4 h-4 bg-gray-300 animate-pulse"></h2>
          <h2 className="w-1/4 h-4 bg-gray-300 animate-pulse"> </h2>
          <h2 className="w-1/4 h-4 bg-gray-300 animate-pulse"></h2>
        </div>
        <h2 className="mt-4">Datos de Contacto</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-4 text-sm text-gray-600 mt-6 lg:pr-10 mb-10">
          <h2 className="w-4/5 h-4 bg-gray-300 animate-pulse"></h2>
          <h2 className="w-4/5 h-4 bg-gray-300 animate-pulse"></h2>
          <h2 className="w-4/5 h-4 bg-gray-300 animate-pulse"></h2>
          <h2 className="w-4/5 h-4 bg-gray-300 animate-pulse"></h2>
        </div>
        <div
          className={`rounded-full ml-auto px-6 py-2 w-3/4 sm:w-3/5 md:w-1/3 h-12 bg-gray-300 animate-pulse`}
        ></div>
      </div>
    </div>
  );
};
