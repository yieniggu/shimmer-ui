import "react-lazy-load-image-component/src/effects/blur.css";

import Delivery from "../../assets/icons/delivery.png";
import Capaciting from "../../assets/icons/capaciting.png";
import Worker from "../../assets/icons/worker.png";
import DeniedWorker from "../../assets/icons/denied-worker.png";

import Comac from "../../assets/logos/comac-logo.png";
import Artika from "../../assets/logos/artika-logo.png";
import Karcher from "../../assets/logos/karcher-logo.png";
import Placeholder from "../../assets/icons/placeholder-image.png";

import { ProductIcon } from "./ProductIcon";
import { useDispatch } from "react-redux";
import { buyingProduct } from "../../store/slices/products";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const openBuyingProduct = () => {
    console.log("opening modal");
    dispatch(buyingProduct("buyingProduct", product));
  };

  return (
    <div className="flex flex-col bg-card rounded-lg sm:w-fit w-screen shadow-2xl">
      <div className="mx-auto rounded-sm border-b-2 border-gray-400">
        <div>
          <LazyLoadImage
            className="2xl:w-full lg:w-5/6"
            src={product.imageUrl}
            placeholderSrc={Placeholder}
            effect="blur"
            width={400}
            height={350}
          />
        </div>
      </div>
      <div className="font-henue-me text-gray-600 w-full px-4 rounded-lg h-full bg-white pb-4">
        <div className="flex flex-row justify-between">
          <h1 className="text-lg mt-2">{product.name}</h1>
          <div className="flex flex-row justify-end gap-2 mt-2">
            {product.types.map((type, index) => (
              <ProductIcon key={index} type={type} />
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-4 mt-4 justify-between h-6">
          {product.brand === "Comac" && <img src={Comac} />}
          {product.brand === "Artika" && <img src={Artika} />}
          {product.brand === "Karcher" && <img src={Karcher} />}

          <h2 className="text-lg font-mabry-re text-title my-auto border-b border-l pl-2 border-gray-300">
            {product.tags.join(", ")}
          </h2>
        </div>

        <h3 className="mt-4 text-lg font-henue-re">
          ${product.brutePrice} + IVA
        </h3>
        <div className="flex flex-row justify-between mt-6 font-henue-ul">
          {product.delivery && (
            <div className="flex flex-row gap-2 text-sm">
              <img className="w-8" src={Delivery} />
              <h2 className="my-auto">24h</h2>
            </div>
          )}

          {product.training && (
            <div className="flex flex-row gap-2 text-sm">
              <img className="h-8" src={Capaciting} />
              <h2 className="my-auto">+ Capacitacion</h2>
            </div>
          )}

          <div className="flex flex-row gap-2 text-sm">
            <img className="h-8" src={product.worker ? Worker : DeniedWorker} />
            <h2 className="my-auto">
              {product.worker ? "Incluido" : "No incluido"}
            </h2>
          </div>
        </div>
        <p className="mt-6 text-gray-400 font-henue-ul">
          Arriendo Minimo {product.minDays} dias corridos
        </p>
        <div className="flex flex-row justify-center">
          <button
            className="rounded-md bg-gradient-to-l from-init-gradient to-end-gradient text-gray-500 w-1/2 mt-4 p-2 hover:text-gray-400 soft"
            onClick={openBuyingProduct}
          >
            Cotizar
          </button>
        </div>
      </div>
    </div>
  );
};
