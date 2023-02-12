import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Banner1 from "../../assets/banners-1.png";
import Banner2 from "../../assets/banners-2.png";
import Banner3 from "../../assets/banners-3.png";

export const MainCarousel = () => {
  return (
    <div className="w-full text-center bg-gray-200">
      <Carousel>
        <div className="cursor-pointer">
          <img src={Banner1} />
        </div>
        <div>
          <img src={Banner2} />
        </div>
        <div>
          <img src={Banner3} />
        </div>
      </Carousel>
    </div>
  );
};
