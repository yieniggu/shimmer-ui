import React from "react";
import Placeholder from "../../assets/placeholder-image-resized.png";

export const LoadingCard = () => {
  return (
    <div className="flex flex-col bg-card rounded-lg w-2/3 shadow-2xl">
      <div className="mx-auto rounded-sm border-b-2 border-gray-400 h-full w-full animate-pulse bg-gray-300">
        <img src={Placeholder} />
      </div>
      <div className="w-full px-4 rounded-lg h-5/6 bg-white pb-4">
        <h1 className="rounded-lg mt-2 w-2/3 h-8 bg-gray-300 animate-pulse"></h1>
        <div className="flex flex-row-reverse ml-auto mt-4 w-2/5 h-6 animate-pulse rounded-lg bg-gray-300"></div>

        <h3 className="w-1/4 animate-pulse bg-gray-300 rounded-lg h-6 mt-4"></h3>
        <div className="flex flex-row justify-between mt-6 font-henue-ul">
          <div className="flex flex-row gap-2 w-1/4 rounded-lg bg-gray-300 h-10 animate-pulse"></div>
          <div className="flex flex-row gap-2 w-1/4 rounded-lg bg-gray-300 h-10 animate-pulse"></div>
          <div className="flex flex-row gap-2 w-1/4 rounded-lg bg-gray-300 h-10 animate-pulse"></div>
        </div>
        <p className="mt-6 w-2/4 rounded-lg bg-gray-300 h-8 animate-pulse"></p>
        <div className="flex flex-row justify-center">
          <div className="rounded-md bg-gray-300 h-10 animate-pulse text-gray-500 w-1/2 mt-4 p-2"></div>
        </div>
      </div>
    </div>
  );
};
