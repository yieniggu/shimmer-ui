import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { newContact, setMessageSent } from "../../store/slices/ui";
import "animate.css";

export const NewContact = () => {
  const { sendingContact, messageSent, agentId } = useSelector(
    (state) => state.ui
  );

  const { contacts } = useSelector((state) => state.contacts);

  const dispatch = useDispatch();

  const [anyActive, setAnyActive] = useState(false);

  const [formValues, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const initialValidation = {
    nameV: true,
    emailV: true,
    phoneV: true,
    messageV: true,
  };

  const { name, email, phone, message } = formValues;
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
      messageV: message.length > 20,
    }));
  };

  const sendContactForm = () => {
    validateFields();

    validFields.nameV &&
      validFields.emailV &&
      validFields.phoneV &&
      validFields.messageV &&
      dispatch(
        newContact({ name, email, phone, message, state: "active", agentId })
      );
  };

  useEffect(() => {
    messageSent &&
      setTimeout(() => {
        reset();
        dispatch(setMessageSent(false));
      }, 2000);
  }, [messageSent]);

  useEffect(() => {
    contacts &&
      contacts.some((contact) => contact.state === "active") &&
      setAnyActive(true);
  }, [contacts]);

  return (
    <div className="px-4">
      {anyActive ? (
        <div className="py-4 text-center">
          <h2 className="text-center font-henue-me text-xl mb-10 text-gray-700">
            Ya tienes una solicitud de contacto activa
          </h2>
          <p className="text-gray-600 font-mabry-me text-lg">
            Espera a que sea resuelta antes de crear una nueva solicitud
          </p>
        </div>
      ) : (
        <div className="flex flex-col gap-2 px-4">
          <h1 className="text-xl font-mabry-me text-center border-b-2 border-r-2 w-fit mx-auto px-2 border-gray-300 mt-6">
            Contacto
          </h1>
          <h2 className="mx-2 font-henue-re text-lg">Nombre</h2>
          <input
            className="border rounded-full px-2 py-1 font-mabry-re"
            name="name"
            value={name}
            type="text"
            maxLength={40}
            placeholder="Shimmer Priority"
            onChange={handleInputChange}
          />
          {!validFields.nameV && (
            <p className="font-mabry-re text-red-500">
              El nombre debe tener al menos 3 caracteres
            </p>
          )}
          <h2 className="mx-2 font-henue-re text-lg">Correo</h2>
          <input
            className="border rounded-full px-2 py-1 font-mabry-re"
            name="email"
            value={email}
            type="email"
            maxLength={40}
            placeholder="client@shimmer.cl"
            onChange={handleInputChange}
          />
          {!validFields.emailV && (
            <p className="font-mabry-re text-red-500">
              Ingresa un correo valido
            </p>
          )}
          <h2 className="mx-2 font-henue-re text-lg">Telefono</h2>
          <input
            className="border rounded-full px-2 py-1 font-mabry-re"
            name="phone"
            value={phone}
            type="text"
            maxLength={40}
            placeholder="+569 12345678"
            onChange={handleInputChange}
          />
          {!validFields.phoneV && (
            <p className="font-mabry-re text-red-500">
              Ingresa un telefono valido
            </p>
          )}
          <h2 className="mx-2 font-henue-re text-lg">Mensaje</h2>
          <textarea
            className="border rounded-lg px-2 py-1 font-mabry-re h-40 resize-none"
            name="message"
            type="text"
            value={message}
            maxLength={250}
            placeholder="Buen dia! Quiero consultar sobre..."
            onChange={handleInputChange}
          />
          {!validFields.messageV && (
            <p className="font-mabry-re text-red-500">
              El mensaje debe tener al menos 20 caracteres
            </p>
          )}
          <button
            className="rounded-full bg-main-button font-mabry-re w-1/3 mx-auto text-gray-100 hover:text-white font-bold text-lg py-1"
            onClick={sendContactForm}
          >
            <div className="animate__animated animate__fadeInUp">
              {sendingContact && (
                <svg
                  className="animate-spin h-5 w-5 mr-3 ..."
                  viewBox="0 0 24 24"
                ></svg>
              )}

              {messageSent && <i className="fa-solid fa-check"></i>}

              {!messageSent && !sendingContact && "Enviar"}
            </div>
          </button>
        </div>
      )}
    </div>
  );
};
