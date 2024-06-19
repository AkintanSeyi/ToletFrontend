import React, { useState } from "react";
import { FaWallet } from "react-icons/fa";

const Steps = () => {
  const [buttonColor, setbuttonColor] = useState("first");
  return (
    <section className="w-full h-fit  mt-20 mb-10 p-8 bg-homebg  sm:p-3">
      <h2 className="text-4xl font-bold text-center  sm:text-lg xl:text-2xl">How it works</h2>
      <h2 className="text-2xl mt-2 font-bold text-center  sm:text-lg">
        User-friendly guide to enrolling with us.
      </h2>
      <section className="w-[100vw] justify-between  xl:justify-center xl:items-center    xl:flex-col flex h-fit mt-10">
        <div className="w-[40%]  xl:w-[70%]  sm:w-[100%]">
          <section className="bg-black  text-white  sm:p-3 xl:p-3 flex items-center sm:h-fit h-32 justify-center rounded-md w-[100%]">
            <div className="text-5xl flex items-center justify-center text-white mr-4">
              <FaWallet />
            </div>
            <div>
              <h2 className="text-2xl  font-bold sm:text-lg">Apply & Explore</h2>
              <p className="text-sm w-[70%]  sm:text-sm">
                Become a member and explore great & amazing listings
              </p>
            </div>
          </section>
          <section className="w-[100%] mt-32 bg-red-800 h-60  xl:hidden rounded-md border-2 relative ">
            <button className="w-fit rounded-[4px] absolute right-4 bottom-4  text-blue-600 bg-white border-2 px-10 h-12">
              Get Started
            </button>
          </section>
        </div>
        <div className="flex flex-col w-[20%]  xl:invisible  xl:hidden  h-full items-center justify-center ">
          <section
            onClick={() => setbuttonColor("first")}
            style={
              buttonColor == "first"
                ? {
                    backgroundColor: "blue",
                    color: "white",
                  }
                : {
                    color: "blue",
                  }
            }
            className="text-3xl    cursor-pointer text-blue-600 w-[80px] h-[80px] rounded-[50%] border-2 border-blue-600 text-white  flex items-center justify-center font-bold"
          >
            1
          </section>
          <div className="w-[3px] h-[130px]  bg-blue-600"></div>
          <section
            onClick={() => setbuttonColor("second")}
            style={
              buttonColor == "second"
                ? {
                    backgroundColor: "blue",
                    color: "white",
                  }
                : {
                    color: "blue",
                  }
            }
            className="text-3xl  cursor-pointer  w-[80px]  text-blue-600  mt-4 mb-4 h-[80px] rounded-[50%]  border-2 border-blue-600  text-white  flex items-center justify-center font-bold"
          >
            2
          </section>
          <div className="w-[3px] h-[120px] bg-blue-600"></div>
          <section
            onClick={() => setbuttonColor("third")}
            style={
              buttonColor == "third"
                ? {
                    backgroundColor: "blue",
                    color: "white",
                  }
                : {
                    color: "blue",
                  }
            }
            className="text-3xl w-[80px]  text-blue-600  cursor-pointer mt-4 h-[80px] rounded-[50%]  border-2 border-blue-600  text-white  flex items-center justify-center font-bold"
          >
            3
          </section>
        </div>
        <div className="w-[40%] xl:w-[70%]   sm:w-[100%]">
          <section className="bg-black hidehomepagesection  xl:hidden text-white flex items-center h-32 justify-center rounded-md w-[100%]">
            <div className="text-5xl flex items-center justify-center text-white mr-4">
              <FaWallet />
            </div>
            <div>
              <h2 className="text-2xl  font-bold ">Apply & Explore</h2>
              <p className="text-sm w-[70%]  ">
                Become a 1member and explore great & amazing listings
              </p>
            </div>
          </section>
          <section className=" mt-10 px-4 text-white flex  bg-blue-600  sm:h-fit sm:w-[100%] py-2  h-32 justify-center rounded-md w-[100%]">
            <div className="text-5xl flex  h-full pt-1 text-white mr-4">
              <FaWallet />
            </div>
            <div>
              <h2 className="text-2xl  font-bold  sm:text-lg ">Confirm Eligibility</h2>
              <p className="text-sm w-[95%]  sm:text-sm">
                Submit your KYC and Work Information, if approved you are
                eligible for monthly property rental on Rentease
              </p>
            </div>
          </section>
          <section className="  px-4  mt-16  xl:mt-10  text-white   sm:h-fit sm:w-[100%]  bg-blue-600 flex py-2 h-36  justify-center rounded-md w-[100%]">
            <div className="text-5xl flex h-full pt-1 text-white mr-4">
              <FaWallet />
            </div>
            <div>
              <h2 className="text-2xl  font-bold  sm:text-lg">Book an appointment</h2>
              <p className="text-sm   w-[95%]">
                Schedule a meeting with an Agent, Inspect property and Request
                for property rental, pay 35% of the property rent excluding
                agency and caution fees and move in to the apartment, then pay
                the balance over a `10 month period.
              </p>
            </div>
          </section>
          <div className="w-[100%] h-fit flex justify-center items-center mt-10">
          <button className="w-fit rounded-[4px]  bg-blue-600 text-white  sm:text-md  border-2 px-10 h-12">
              Get Started
            </button>
          </div>
          
        </div>
      </section>
    </section>
  );
};

export default Steps;
