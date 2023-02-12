import React from "react";

export const ContactSkeleton = () => {
  return (
    <div className="flex flex-col xl:flex-row mt-4 ">
      <div className="flex flex-col rounded-xl border border-gray-200 h-60 p-8 w-full xl:w-2/3 text-gray-700">
        <h1 className="text-xl w-2/3 md:w-1/4 h-20 bg-gray-400 animate-pulse"></h1>

        <p className="text-lg text-gray-600 w-full lg:w-4/5 h-full inline-block break-words mt-6 bg-gray-400 animate-pulse"></p>
        <div
          className={`ml-auto rounded-full px-6 py-2 text-lg h-20 bg-gray-400 w-2/3 mt-4 sm:w-1/3 md:w-1/5 lg:w-1/6`}
        ></div>
      </div>

      <div className="flex flex-col rounded-xl rounded-t-none xl:rounded-tl-none xl:rounded-l-none border xl:border-l-0 w-4/5 xl:w-1/3 mx-auto xl:my-4 p-4 max-h-full bg-gray-200 bg-opacity-75">
        <h1 className="text-xl text-gray-700">Datos de Contacto</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 text-lg mt-6 text-gray-500 gap-4">
          <h2 className="w-2/3 bg-gray-400  h-6 animate-pulse"></h2>
          <h2 className="break-words w-2/3 bg-gray-400  h-6 animate-pulse"></h2>
          <h2 className="w-2/3 bg-gray-400  h-6 animate-pulse"></h2>
        </div>
      </div>
    </div>
  );
};
