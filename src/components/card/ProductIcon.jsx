import React from "react";

import OnBoard from "../../assets/icons/on-board.png";
import Walking from "../../assets/icons/walking.png";
import PressureWashing from "../../assets/icons/pressure-washing.png";
import HotWater from "../../assets/icons/hot-water.png";
import ColdWater from "../../assets/icons/cold-water.png";

export const ProductIcon = ({ type }) => {
  return (
    <div>
      {type === "on-board" && (
        <img className="w-8 my-auto" src={OnBoard} alt="Hombre a bordo" />
      )}

      {type === "walking" && (
        <img className="w-8 my-auto" src={Walking} alt="Hombre caminando" />
      )}

      {type === "hot-water" && (
        <img className="w-6 h-6 my-auto" src={HotWater} alt="Agua Caliente" />
      )}

      {type === "cold-water" && (
        <img className="w-6 my-auto" src={ColdWater} alt="Agua Fria" />
      )}

      {type === "pressure-washing" && (
        <img
          className="w-8 my-auto"
          src={PressureWashing}
          alt="Hidrolavadora"
        />
      )}
    </div>
  );
};
