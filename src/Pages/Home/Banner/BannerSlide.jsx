import { SplideSlide } from "@splidejs/react-splide";
import React from "react";

const BannerSlide = ({ service }) => {
  const { image } = service;

  return (
    <SplideSlide className="flex justify-center ">
      <img className="w-full h-[32rem]" src={image} alt="" />
    </SplideSlide>
  );
};

export default BannerSlide;
