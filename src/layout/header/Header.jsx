import Shimmer from "../../assets/logos/shimmer-logo.png";

import { CartIcon } from "./CartIcon";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Header = () => {
  return (
    <div className="lg:w-full w-screen h-20 bg-poly-dark">
      <div className="flex flex-row justify-center lg:gap-20 my-auto font-mabry-re text-gray-500 lg:text-2xl text-lg gap-6">
        <button className="hover:text-gray-400">
          <HashLink to="/#products">Maquinas</HashLink>
        </button>
        <Link className="my-auto" to="/quotes">
          <button className="hover:text-gray-400">Cotizaciones</button>
        </Link>
        <img className="h-24 my-auto" src={Shimmer} />

        <Link className="my-auto" to="/contacts">
          <button className="hover:text-gray-400">Contacto</button>
        </Link>

        <CartIcon />
      </div>
    </div>
  );
};
