"use client";
import Carousel from "@/components/carousel";
import React, { useState } from "react";
import { bannerImages } from "@/constants";
import SelectAddressModal from "@/components/select-address.modal";
import NewAddressModal from "@/components/new-address.modal";

const Hero = () => {
  // const [selectAddressModal, setSelectAddressModal] = useState(false);
  // const [newAddressModal, setNewAddressModal] = useState(false);
  return (
    <>
      <div className=" h-[540px] px-[16px] pt-[34px] pb-[20px]">
        <Carousel images={bannerImages} />
        {/* <button
          className="text-gray-500 flex items-center gap-1 text-sm font-medium cursor-pointer"
          onClick={() => setSelectAddressModal(true)}
        >
          Change
        </button> */}
      </div>

      {/* <SelectAddressModal
        showModal={selectAddressModal}
        setShowModal={setSelectAddressModal}
        setNewAddressModal={setNewAddressModal}
      />

      <NewAddressModal
        showModal={newAddressModal}
        setShowModal={setNewAddressModal}
      /> */}
    </>
  );
};

export default Hero;
