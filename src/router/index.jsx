import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../pages/Cart/Cart";
import { Contacts } from "../pages/Contacts/Contacts";
import { Home } from "../pages/Home/Home";
import { Quotes } from "../pages/Quotes/Quotes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};
