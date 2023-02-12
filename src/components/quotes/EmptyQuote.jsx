import { HashLink } from "react-router-hash-link";
import EmptyInvoice from "../../assets/icons/empty-invoice.png";

export const EmptyQuote = () => {
  return (
    <div className="flex flex-col">
      <h1 className="font-henue-me text-center md:text-3xl sm:text-2xl text-lg">
        No tienes cotizaciones creadas
      </h1>
      <img
        className="w-1/3 h-1/3 md:w-1/4 md:h-1/4 mx-auto"
        src={EmptyInvoice}
      />
      <h2 className="text-center xl:mt-10 font-henue-me text-sm sm:text-lg">
        Añade algunos productos para empezar
      </h2>
      <button className="rounded-full font-mabry-re bg-main-button lg:w-1/3 w-2/3 mx-auto py-2 mt-10 text-xl text-gray-600 hover:text-gray-300">
        <HashLink to="/#products">Productos</HashLink>
      </button>
    </div>
  );
};
