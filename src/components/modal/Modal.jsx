import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../store/slices/ui";
import { BuyingProduct } from "./BuyingProduct";
import { NewContact } from "./NewContact";

export const Modal = () => {
  const { modalOpen, type } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const onCloseModal = (e) => {
    e.target.id.includes("close") && dispatch(closeModal());
  };

  if (!modalOpen) return null;

  return (
    <div
      id="close1"
      className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto"
      onClick={onCloseModal}
    >
      <div
        className={`flex rounded-lg flex-col shadow-2xl sticky ${
          (type === "buyingProduct" || type === "contact") &&
          "lg:w-2/3 2xl:w-1/3 w-3/4 mr-14 md:mr-0"
        }`}
      >
        <button
          id="close2"
          className="text-white text-lg place-self-end"
          onClick={onCloseModal}
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          {type === "buyingProduct" && <BuyingProduct />}
          {type === "contact" && <NewContact />}
        </div>
      </div>
    </div>
  );
};
