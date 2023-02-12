import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import Shimmer from "../../assets/logos/shimmer-logo.png";
import { openModal } from "../../store/slices/ui";

export const Footer = () => {
  const dispatch = useDispatch();

  const openContactModal = () => {
    dispatch(openModal("contact"));
  };

  return (
    <div className="font-mabry-me flex flex-row justify-between h-96 bg-footer px-10 py-20 w-full relative top-full">
      <div className="flex flex-row md:w-1/3">
        <div className="flex flex-col border-r-4 border-title md:px-8 w-full">
          <h1 className="text-white w-full text-2xl text-center mr-20 md:mr-0">
            Shimmer SpA - <span className="text-title">A family company</span>
          </h1>
          <h3 className="mx-auto text-white text-xl">2023 &#129309;</h3>
          <img className="w-48 mx-auto" src={Shimmer} />
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-4 justify-between w-2/3 px-8">
        <div className="flex flex-col justify-around text-white text-2xl gap-4 ">
          <h1 className="hover:text-gray-600">
            <Link to="#">Home</Link>
          </h1>
          <h1 className="hover:text-gray-600">
            <HashLink to="#products">Productos</HashLink>
          </h1>
          <h1 className="hover:text-gray-600">
            <Link to="/cart">Carro</Link>
          </h1>
        </div>
        <div className="flex flex-col gap-6 md:w-1/3 mx-auto my-auto md:mt-0 mt-10">
          <button
            className="bg-main-button mx-auto rounded-full py-4 px-10 md:w-fit md:text-2xl text-gray-100 hover:text-gray-500 soft"
            onClick={openContactModal}
          >
            Contactanos
          </button>
          <h1 className="text-gray-100 text-xl mx-auto">
            Lo quieres, te lo daremos &#128666;
          </h1>
        </div>
      </div>
    </div>
  );
};
