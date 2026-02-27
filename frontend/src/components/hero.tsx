import Carousel from "@/components/carousel";
import React from "react";
import { bannerImages } from "@/constants";

const Hero = () => {
  return (
    <div className=" h-[540px] px-[16px] pt-[34px] pb-[20px]">
      <Carousel images= {bannerImages}/>
    </div>
  );
};

export default Hero;
