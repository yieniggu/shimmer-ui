import React from "react";
import { Footer } from "./footer/Footer";
import { Header } from "./header/Header";

export const Layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
