import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";

const DashboadMain = () => {
  
  return (
    <>
      <div className="p-2 w-[76vw] xl:w-[100vw] h-fit   ">
        <section className="w-full h-60  md:flex-col-reverse     bg-navbgcolor rounded-lg p-7  flex">
          <div className="w-1/2  md:w-full h-full  md:h-fit">
            <h2 className="text-3xl  text-blue-600 mt-1 font-bold capitalize  ">
              Welcome Customer 
            </h2>
            <div className="mt-3 w-32 h-[2px] bg-blue-600"></div>
            <p className="text-lg mt-3 w-3/4  text-blue-500">
              Your KYC Verification is incomplete, click to continue
            </p>

            <button className="w-fit p-3 h-10 bg-blue-600  text-white rounded-lg flex  mt-6 capitalize items-center justify-between">
              <span>view renting process</span>
              <FaArrowRight className="mt-1  ml-2 text-white" />
            </button>
          </div>

          <div className="flex items-center  md:w-full  md:hidden justify-center w-1/2">
          <img  className="w-[80%] h-3/4 object-contain mt-3"  alt="img" src = "https://account.myrentease.co/static/media/newExplore.7571c7fee294351437de.png" />
        
          </div>
        </section>
      </div>
      <section className="flex mt-4 md:items-center  md:flex-col p-2 justify-between w-full">
        <div className="w-[30%]  md:w-[80%]  md:mb-10 cursor-pointer h-[375px] pt-8 pb-5 border-2 rounded-lg p-3 bg-white">
          <h2 className="text-[grey] font-bold capitalize text-lg">
            Rent Details
          </h2>
          <div className="mt-3 w-full h-[1px] bg-[lightgrey]"></div>
          <section className="flex  flex-col items-center justify-center">
            <FaArrowRight className="text-5xl mt-7 text-blue-600" />
            <p className="text-lg font-bold mt-3 w-3/4  md:text-center  text-blue-500">
              Need Rent Financing ?
            </p>
            <div className="mt-3 w-32 h-[2px] bg-blue-500"></div>
            <p className="text-lg mt-3 text-center  text-blue-500">
              Please complete your KYC to use Rentease to finance your Rent
            </p>
          </section>
          <button className="w-full p-3 h-10 bg-buttoncolorgold  text-white rounded-lg flex  mt-8 capitalize items-center justify-center">
            <span>view renting process</span>
            <FaArrowRight className="mt-1  ml-2 text-white" />
          </button>
        </div>
        <div  className="w-[30%]   md:w-[80%]  md:mb-10 cursor-pointer h-[375px] pt-5 pb-5 flex flex-col justify-center items-center border-2 rounded-lg p-3 bg-blue-600">
        <BsHeadset  className="text-6xl text-white mt-8" />
        <p className="text-lg font-bold mt-3 w-3/4  md:text-center text-white ">
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
        <div className=" w-[30%]  md:h-fit md:w-[80%] md:mb-5  cursor-pointer h-[375px] pt-8 pb-5 border-2 rounded-lg p-3 bg-white" >
        <h2 className="text-[grey] font-bold capitalize text-lg">
            Rent Details
          </h2>
          <div className="mt-2 w-full h-[1px] bg-[lightgrey]"></div>
          <div  className="flex flex-col justify-center items-center">
          <img  className="w-[80%] h-3/4 object-cover mt-3"  alt="img" src = "https://account.myrentease.co/static/media/newExplore.7571c7fee294351437de.png" />
          <button className="w-full p-3 h-10 bg-blue-600  text-white rounded-lg flex  mt-8 capitalize items-center justify-center">
            <span>continue support</span>
            <FaArrowRight className="mt-1  ml-2 text-white" />
          </button>
          </div>
           </div>
      </section>
    </>
  );
};

export default DashboadMain;
