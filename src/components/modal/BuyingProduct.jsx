import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Datepicker from "react-tailwindcss-datepicker";
import {
  addProductToCart,
  removeProduct,
  removeProductFromCart,
} from "../../store/slices/products";
import { closeModal } from "../../store/slices/ui";

import Cart from "../../assets/icons/cart-icon.png";
import { toast } from "react-toastify";

export const BuyingProduct = () => {
  const { buyingProduct, cart } = useSelector((state) => state.products);

  const { product } = buyingProduct;
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(1);
  const [dayDif, setDayDif] = useState(null);

  const decrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const increase = () => {
    setAmount(amount + 1);
  };

  const today = new Date();

  const [date, setDate] = useState({ startDate: null, endDate: null });

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  useEffect(() => {
    if (date.startDate && date.endDate) {
      const start = new Date(date.startDate);
      const end = new Date(date.endDate);

      const dif = end.getTime() - start.getTime();

      const dayDif = dif / (1000 * 3600 * 24);

      setDayDif(Math.round(dayDif));
    }
  }, [date]);

  const clp = Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  const addProduct = () => {
    let finalProduct = {
      ...product,
      amount,
      startDate: date.startDate,
      endDate: date.endDate,
    };

    dispatch(addProductToCart(finalProduct));

    toast.success("Producto agregado a la cotizacion", {
      position: "top-right",
      autoClose: 2000,
    });
    dispatch(closeModal());
  };

  return (
    <div className="p-4">
      {cart.some((cartProduct) => cartProduct.name === product.name) ? (
        <div className="flex flex-col text-center font-mabry-me">
          <h1 className="text-2xl mb-6">Este producto ya existe en tu carro</h1>
          <h2>Puedes eliminarlo o editar las opciones al hacer checkout</h2>
          <div className="flex flex-row justify-center gap-6 mt-4">
            <button
              className="rounded-lg border border-gray-500 px-6 bg-white hover:bg-gray-300 soft py-1"
              onClick={() => {
                dispatch(removeProduct(product));
              }}
            >
              Eliminar
            </button>
            <a className="rounded-lg bg-card-button px-6" href="/cart">
              <button className="mt-1">
                <img className="my-auto w-6" src={Cart} />
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col">
          <h1 className="font-henue-me mx-auto border-b border-r border-gray-500 w-fit px-2">
            Agregar Producto a la Cotizacion
          </h1>
          <div className="flex flex-row mt-4 justify-between gap-10">
            <img
              className="w-36 p-2 border border-gray-500"
              src={product.imageUrl}
            />

            <div className="flex flex-row gap-2">
              <button
                className="font-mabry-me text-xl my-auto"
                onClick={decrease}
              >
                -
              </button>
              <input
                className="h-6 w-12 p-2 text-center my-auto border border-gray-500 rounded-lg outline-none font-mabry-re"
                type="number"
                name="amount"
                min={1}
                value={amount}
                readOnly
              />

              <button
                className="font-mabry-me text-xl my-auto"
                onClick={increase}
              >
                +
              </button>
            </div>
          </div>
          <h3 className="font-mabry-re">{product.name}</h3>
          <h3 className="font-henue-me text-center mt-4">
            Precio Referencial (Diario)
          </h3>
          <div className="flex flex-row justify-between mt-4 font-mabry-me">
            <h3>Precio sin IVA</h3>
            <h3>{clp.format(product.brutePrice * amount)}</h3>
          </div>
          <div className="flex flex-row justify-between mt-2 font-mabry-me">
            <h3>IVA</h3>
            <h3>
              {clp.format(Math.round(amount * product.brutePrice * 0.19))}
            </h3>
          </div>

          <div className="flex flex-row justify-between mt-2 font-mabry-me">
            <h3>TOTAL</h3>
            <h3>
              {clp.format(
                Math.round(amount * product.brutePrice * 0.19) +
                  amount * product.brutePrice
              )}
            </h3>
          </div>

          <hr className="mt-2 h-1 bg-gray-500" />
          <h3 className="font-henue-me text-center mt-4">
            Seleccionar fecha de uso
          </h3>

          <p className="font-henue-re text-gray-500 text-center">
            Minimo {product.minDays} dias corridos
          </p>
          <Datepicker
            value={date}
            onChange={handleDateChange}
            minDate={today.setDate(today.getDate() + 1)}
          />
          {dayDif && dayDif < product.minDays && (
            <p className="font-mabry-re text-red-500">
              Debes seleccionar un rango de fechas valido
            </p>
          )}

          {dayDif && dayDif > 30 && (
            <div>
              <h3 className="font-henue-me text-center mt-4">
                Resumen ({Math.round(dayDif)} dias)
              </h3>
              <div className="flex flex-row justify-between mt-2 font-mabry-me">
                <h3>Total sin IVA</h3>
                <h3>{clp.format(amount * product.brutePrice * dayDif)}</h3>
              </div>
              <div className="flex flex-row justify-between mt-2 font-mabry-me">
                <h3>IVA</h3>
                <h3>
                  {clp.format(amount * product.brutePrice * dayDif * 0.19)}
                </h3>
              </div>
              <div className="flex flex-row justify-between mt-2 font-mabry-me">
                <h3>TOTAL</h3>
                <h3>
                  {clp.format(
                    amount * product.brutePrice * dayDif * 0.19 +
                      amount * product.brutePrice * dayDif
                  )}
                </h3>
              </div>
            </div>
          )}

          <hr className="mt-2 h-1 bg-gray-500" />
          <button
            className="font-mabry-re mt-4 bg-card-button py-1 px-4 text-gray-600 rounded-lg mx-auto hover:text-gray-400"
            disabled={!dayDif || dayDif < product.minDays}
            onClick={addProduct}
          >
            Agregar
          </button>
        </div>
      )}
    </div>
  );
};
