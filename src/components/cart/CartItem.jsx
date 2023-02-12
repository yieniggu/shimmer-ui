import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import { clp } from "../../helpers/cart";
import {
  editProduct,
  removeProduct,
  removeProductFromCart,
} from "../../store/slices/products";

export const CartItem = ({ product }) => {
  const [amount, setAmount] = useState(product.amount);
  const [dayDif, setDayDif] = useState(null);

  const today = new Date();
  const dispatch = useDispatch();

  const decreaseAmount = () => {
    amount > 1 && setAmount(amount - 1);
  };

  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  const [date, setDate] = useState({
    startDate: product.startDate,
    endDate: product.endDate,
  });

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    if (
      amount != product.amount ||
      product.startDate != date.startDate ||
      product.endDate != date.endDate
    ) {
      const newProduct = {
        ...product,
        amount,
        startDate: date.startDate,
        endDate: date.endDate,
      };
      dispatch(editProduct(newProduct));
    }
  }, [amount, dayDif]);

  useEffect(() => {
    if (date.startDate && date.endDate) {
      const start = new Date(date.startDate);
      const end = new Date(date.endDate);

      const dif = end.getTime() - start.getTime();

      const dayDif = dif / (1000 * 3600 * 24);

      setDayDif(Math.round(dayDif));
    }
  }, [date]);

  return (
    <>
      <div className="flex md:flex-row flex-col justify-between mt-4 grow">
        <div className="flex  justify-start">
          <img className="w-32 h-fit" src={product.imageUrl} />
          <div className="flex flex-col gap-4">
            <h2 className="font-henue-me 3xl:text-lg 2xl:text-md text-sm">
              {product.name}
            </h2>
            <div className="flex flex-row justify-between mt-2">
              <div className="flex flex-row justify-start gap-1">
                <i
                  className="fa-solid fa-minus my-auto text-sm cursor-pointer"
                  onClick={decreaseAmount}
                ></i>
                <input
                  className="h-6 w-12 p-2 text-center my-auto border border-gray-500 rounded-lg outline-none font-mabry-re text-lg"
                  type="number"
                  name="amount"
                  min={1}
                  value={amount}
                  readOnly
                />

                <i
                  className="fa-solid fa-plus text-sm my-auto cursor-pointer"
                  onClick={increaseAmount}
                ></i>
              </div>
              <i
                className="ml-2 fa-solid fa-trash text-lg text-title cursor-pointer my-auto md:mr-auto"
                onClick={() => dispatch(removeProduct(product))}
              ></i>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="flex flex-col w-full">
            <div className="flex-row justify-between text-lg my-auto 3xl:gap-36 2xl:gap-16 lg:gap-28 lg:ml-0 ml-10 text-center hidden md:flex">
              <h2 className="hidden lg:flex">
                {clp.format(product.brutePrice * product.amount * dayDif) || 0}
              </h2>
              <h2 className="hidden lg:flex">
                {clp.format(
                  Math.round(
                    product.brutePrice * product.amount * 0.19 * dayDif
                  ) || 0
                )}
              </h2>
              <h2 className="">
                {clp.format(
                  product.brutePrice * 1.19 * product.amount * dayDif
                ) || 0}
              </h2>
              <input
                className="h-6 w-12 p-2 text-center ml-auto border border-gray-500 rounded-lg outline-none font-mabry-re text-lg"
                type="number"
                name="days"
                min={product.minDays}
                value={dayDif}
                readOnly
              />
            </div>
            <div className="flex md:flex-row flex-col justify-end">
              <div className="flex flex-col">
                <div className="flex flex-row justify-between md:hidden mb-10">
                  <h1 className="text-lg text-gray-600">TOTAL</h1>
                  <p className="text-lg text-gray-600">
                    {clp.format(product.brutePrice * product.amount * dayDif) ||
                      0}
                  </p>
                </div>
                <div className="flex flex-row justify-between md:hidden">
                  <h1 className="text-lg text-gray-600">Dias</h1>
                  <input
                    className="h-6 w-12 p-2 text-center ml-auto border border-gray-500 rounded-lg outline-none font-mabry-re text-lg md:hidden"
                    type="number"
                    name="days"
                    min={product.minDays}
                    value={dayDif}
                    readOnly
                  />
                </div>
                <Datepicker
                  value={date}
                  onChange={handleDateChange}
                  minDate={today.setDate(today.getDate() + 1)}
                  containerClassName="ml-auto w-fit"
                />
                {dayDif && dayDif < product.minDays && (
                  <p className="font-mabry-re text-red-500 text-sm text-center">
                    Fecha Invalida
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="h-1 bg-gray-100 mt-4" />
    </>
  );
};
