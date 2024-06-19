import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";

const Rentnow = () => {
  return (
    <div className="w-[76vw]   xl:w-[100vw]  xl:flex-col  flex justify-between items-center h-fit  p-4 rounded-lg">
      <div className="w-[30%]   xl:h-fit xl:w-[70%]  xl:mb-10 flex flex-col  bg-blue-600 items-center cursor-pointer h-[375px] pt-8 pb-5 border-2 rounded-lg p-3 ">
        <p className="text-lg font-bold mt-16 w-3/4  xl:text-center text-white">
          Need Rent Financing ?
        </p>
        <div className="mt-3 w-32 h-[2px] bg-white"></div>
        <p className="text-lg mt-3 text-center  text-white">
          Please complete your KYC to use Rentease to finance your Rent
        </p>
      </div>
      <div className="w-[30%]  xl:h-fit xl:w-[70%]  xl:mb-10  cursor-pointer h-[375px] pt-8 pb-5 border-2 rounded-lg p-3 bg-white">
        <h2 className="text-[grey] font-bold capitalize text-lg">
          Rent Details
        </h2>
        <div className="mt-3 w-full h-[1px] bg-[lightgrey]"></div>
        <section className="flex  flex-col items-center justify-center">
          <FaArrowRight className="text-5xl mt-12 text-blue-600" />
          <button className="w-fit p-3 h-10 bg-blue-600  text-white rounded-lg flex  mt-3 capitalize items-center justify-center">
            <span>view renting process</span>
            <FaArrowRight className="mt-1  ml-2 text-white" />
          </button>
        </section>
      </div>

      <div className="w-[30%]  xl:h-fit xl:w-[70%]  xl:mb-10 cursor-pointer h-[375px] pt-5 pb-5 flex flex-col justify-center items-center border-2 rounded-lg p-3 bg-blue-600">
        <p className="text-lg font-bold mt-0  xl:text-center w-3/4 text-white ">
          Need Rent Financing ?
        </p>
        <div className="mt-3 w-32 h-[2px] bg-white"></div>
        <p className="text-lg mt-3 text-center  text-white">
          Please complete your KYC to use Rentease to finance your Rent
        </p>
        <button className="w-full p-3 h-10 bg-white  text-blue-600 rounded-lg flex  mt-8 capitalize items-center justify-center">
          <span>continue support</span>
          <FaArrowRight className="mt-1  ml-2 text-blue-600" />
        </button>
      </div>
    </div>
  );
};

export default Rentnow;
