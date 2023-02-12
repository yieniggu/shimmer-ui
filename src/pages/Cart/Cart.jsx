import { useDispatch, useSelector } from "react-redux";
import { CartItem } from "../../components/cart/CartItem";
import { Layout } from "../../layout";

import EmptyCart from "../../assets/icons/empty-cart.png";
import Vacuum from "../../assets/icons/vacuum.png";

import "./cart.css";
import { HashLink } from "react-router-hash-link";
import { useState } from "react";
import { useEffect } from "react";
import { clp } from "../../helpers/cart";
import { useForm } from "../../hooks/useForm";
import { newQuote } from "../../store/slices/products";
import { setQuoteSent } from "../../store/slices/ui";

export const Cart = () => {
  const { cart, cartUpdate } = useSelector((state) => state.products);
  const { sendingQuote, quoteSent, agentId } = useSelector((state) => state.ui);

  const dispatch = useDispatch();

  const [totalBrutePrice, setTotalBrutePrice] = useState(null);
  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    rut: "",
    email: "",
    phone: "",
  });

  const { name, rut, email, phone } = formValues;

  useEffect(() => {
    console.log("cart on cart: ", cart);
    let sum = 0;
    cart &&
      cart.forEach((product) => {
        const start = new Date(product.startDate);
        const end = new Date(product.endDate);

        const dif = end.getTime() - start.getTime();

        const dayDif = dif / (1000 * 3600 * 24);

        sum += product.brutePrice * product.amount * dayDif;
      });

    setTotalBrutePrice(sum);
  }, [cart, cartUpdate]);

  const initialValidation = {
    nameV: true,
    emailV: true,
    phoneV: true,
    rutV: true,
  };
  const [validFields, setValidFields] = useState(initialValidation);

  const validateFields = () => {
    setValidFields((prevState) => ({ ...prevState, nameV: name.length > 3 }));

    setValidFields((prevState) => ({
      ...prevState,
      emailV: email.match(/[^\s@]+@[^\s@]+\.[^\s@]+/gi),
    }));

    setValidFields((prevState) => ({
      ...prevState,
      phoneV: phone.match(/^(\+?56){0,1}(9)[98765]\d{7}$/gm),
    }));

    setValidFields((prevState) => ({
      ...prevState,
      rutV: rut.match(/\b[0-9|.]{1,10}\-[K|k|0-9]/gim),
    }));
  };

  const sendQuoteForm = () => {
    validateFields();

    validFields.nameV &&
      validFields.emailV &&
      validFields.phoneV &&
      validFields.rutV &&
      dispatch(
        newQuote(cart, { name, email, phone, rut, agentId, state: "created" })
      );
  };

  useEffect(() => {
    quoteSent &&
      setTimeout(() => {
        reset();
        dispatch(setQuoteSent(false));
      }, 2000);
  }, [quoteSent]);

  return (
    <div>
      <Layout>
        {cart && cart.length > 0 ? (
          <div className="flex 2xl:flex-row flex-col md:w-full w-screen px-10 py-6 gap-4">
            <div className="flex flex-row w-full grow 2xl:flex-col 2xl:w-2/3">
              <h1 className="font-mabry-me 2xl:text-3xl text-2xl">
                Carro{" "}
                <span className="text-lg">
                  ({cart && cart.length} producto)
                </span>
                <div className="flex flex-row w-full grow justify-between mt-10 px-2">
                  <div className="flex flex-row justify-start xl:mr-80 mr-52 2xl:mr-0">
                    <h2 className="2xl:text-xl text-lg">Producto</h2>
                  </div>
                  <div className="flex-row justify-end 3xl:gap-40 2xl:gap-20 lg:gap-30 gap-32 hidden md:flex">
                    <h2 className="2xl:text-xl text-lg hidden lg:flex  ">
                      Total sin IVA
                    </h2>
                    <h2 className="2xl:text-xl text-lg hidden lg:flex ">IVA</h2>
                    <h2 className="2xl:text-xl text-lg">TOTAL</h2>
                    <h2 className="2xl:text-xl text-lg">Dias</h2>
                  </div>
                </div>
                <hr className="h-1 bg-gray-400"></hr>
                {cart.map((product, index) => (
                  <CartItem key={index} product={product} />
                ))}
              </h1>
            </div>
            <div className="flex flex-col w-full mx-auto lg:w-2/3 2xl:w-1/3 rounded-lg border mt-20 py-10 font-henue-me md:text-xl text-lg h-fit bg-gray-200 p-6">
              <h1 className="text-center">Resumen Cotizacion</h1>
              <div className="flex flex-row justify-between px-4 mt-10 text-sm">
                <h2>Total sin IVA</h2>
                <h2>{clp.format(totalBrutePrice)}</h2>
              </div>
              <div className="flex flex-row justify-between px-4 mt-4 text-sm">
                <h2>IVA</h2>
                <h2>{clp.format(totalBrutePrice * 0.19)}</h2>
              </div>
              <div className="flex flex-row justify-between px-4 mt-10 text-sm">
                <h2>Total</h2>
                <h2>{clp.format(totalBrutePrice * 1.19)}</h2>
              </div>
              <hr className="h-0.5 bg-gray-100 px-4 mt-6" />

              <h2 className="text-center mt-4">Datos para la cotizacion</h2>
              <div className="mt-4 px-4">
                <p className="text-sm">Nombre o Razon Social</p>
                <input
                  className="border rounded-full px-4 py-1 w-full font-mabry-re text-lg"
                  name="name"
                  value={name}
                  type="name"
                  maxLength={40}
                  placeholder="Shimmer SpA"
                  onChange={handleInputChange}
                />
                {!validFields.nameV && (
                  <p className="font-mabry-re text-red-500 text-sm">
                    El nombre es demasiado corto
                  </p>
                )}
              </div>
              <div className="px-4 mt-4 ">
                <h2 className=" text-sm">RUT</h2>
                <input
                  className="border rounded-full px-2 py-1 font-mabry-re text-lg w-full"
                  name="rut"
                  type="text"
                  value={rut}
                  placeholder="12345678-9"
                  onChange={handleInputChange}
                />
                {!validFields.rutV && (
                  <p className="font-mabry-re text-red-500 text-sm">
                    RUT invalido
                  </p>
                )}
              </div>

              <div className="px-4 mt-4">
                <h2 className="text-sm">Correo</h2>
                <input
                  className="border rounded-full px-2 py-1 text-lg font-mabry-re w-full"
                  name="email"
                  value={email}
                  type="email"
                  maxLength={40}
                  placeholder="client@shimmer.cl"
                  onChange={handleInputChange}
                />
                {!validFields.emailV && (
                  <p className="font-mabry-re text-red-500 text-sm">
                    Ingresa un correo valido
                  </p>
                )}
              </div>

              <div className="px-4 mt-4">
                <h2 className="text-sm">Telefono</h2>
                <input
                  className="border rounded-full px-2 py-1 font-mabry-re text-lg w-full"
                  name="phone"
                  value={phone}
                  type="text"
                  maxLength={40}
                  placeholder="+569 12345678"
                  onChange={handleInputChange}
                />
                {!validFields.phoneV && (
                  <p className="font-mabry-re text-red-500 text-sm">
                    Ingresa un telefono valido
                  </p>
                )}
              </div>
              <button
                className="w-1/2 mx-auto rounded-xl bg-card-button mt-8 text-lg text-gray-500 py-2 hover:text-gray-300"
                onClick={sendQuoteForm}
                disabled={sendingQuote}
              >
                <div className="animate__animated animate__fadeInUp">
                  {sendingQuote && (
                    <svg
                      className="animate-spin h-5 w-5 mr-3 ..."
                      viewBox="0 0 24 24"
                    ></svg>
                  )}

                  {quoteSent && <i className="fa-solid fa-check"></i>}

                  {!quoteSent && !sendingQuote && "Enviar"}
                </div>
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col mx-auto py-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl text-center font-henue-me">
              Tu carro de compras esta vacio
            </h1>
            {/* <img className="relative top-10 w-20 vacuum" src={Vacuum} /> */}
            <img className="w-40 mt-20 mx-auto" src={EmptyCart} />

            <h2 className="text-center mt-20 font-henue-me">
              Añade algunos productos para empezar
            </h2>
            <button className="rounded-full font-mabry-re bg-main-button w-2/3 mx-auto py-2 mt-10 text-xl text-gray-600 hover:text-gray-300">
              <HashLink to="/#products">Productos</HashLink>
            </button>
          </div>
        )}
        {cart && cart.length < 3 && cart.length > 0 && (
          <div
            className={`w-full ${cart.length === 1 && "h-[222px]"} ${
              cart.length === 2 && "h-[89px]"
            }`}
          ></div>
        )}
      </Layout>
    </div>
  );
};
