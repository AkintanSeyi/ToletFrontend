import React, { useState } from "react";
import Header from "../widget/Header";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { FaWallet } from "react-icons/fa";
import Footer from "../widget/Footer";
import Steps from "../widget/Steps";

const Homepage = () => {

  const [slideno, setSlideni] = useState(0);

  const SlideData = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-2zeQu2kOrYH-2m_Wcx3CUWTOhWjl_apj6U_XoS2dEA&s",
    "https://www.propertypro.ng/blog/wp-content/uploads/2018/10/Realestate-19-780x405.jpg",
    "https://9japroperty.com.ng/wp-content/uploads/2016/09/EstateBQ.jpg",
  ];

  console.log(slideno, SlideData[slideno]);
  const handleForward = () => {
    if (slideno >= 2) {
      setSlideni(0);
    } else {
      setSlideni(slideno + 1);
    }
  };
  const handlebackword = () => {
    if (slideno <= 0) {
      setSlideni(2);
    } else {
      setSlideni(slideno - 1);
    }
  };

  return (
    <section>
 
      <div className="flex h-[80vh]   overflow-x-hidden  sm:h-fit  xl:h-fit w-[100vw] xl:mt-20 sm:mt-10 justify-between items-center  xl:flex-col  xl:justify-center  xl:items-center">
        <section className="h-[100%] w-1/2 sm:mr-20 sm:py-4 pl-20 sm:pl-0 items-center justify-center flex-col   xl:text-center  xl:pl-28  xl:w-[100%] py-10 ">
          <p className="text-lg text-blue-400  sm:text-sm ">
            You can rent properties with ease
          </p>
          <h2 className="text-4xl font-bold w-[80%]  xl:w-[100%]  sm:text-lg ">
            Choose your desired property and pay installmentally with{" "}
            <span className="capitalize text-blue-400">Tolet Lagos</span>
          </h2>
          <p className="  mt-4  text-xl text-headertext   ">
            Discover, Explore, Inspect and Rent.
          </p>
          <button className=" mt-4 w-fit rounded-[4px]  sm:text-sm  sm:px-4  sm:py-2  xl:mr-0  text-xl mr-4 text-white bg-blue-500 px-14 h-12">
            Explore
          </button>
        </section>

        <section className="w-1/2 h-fit xl:pl-10  relative xl:w-[80%]">
          <div className="absolute top-[45%] right-20   text-white z-10 text-[50px]">
            <MdKeyboardArrowRight
              className="cursor-pointer"
              onClick={handleForward}
            />
          </div>
          <img
            src={SlideData[slideno]}
            className=" w-[90%]  xl:w-[100%] rounded-lg cover  xl:-[100%]  h-[90%]"
            alt="img"
          />
          <div className="absolute top-[45%] left-0 text-white z-10 text-[50px]">
            <MdKeyboardArrowLeft
              className="cursor-pointer"
              onClick={handlebackword}
            />
          </div>
        </section>
      </div>

      <section className="w-full h-screen  xl:h-fit sm:mb-5  sm:p-0 xl:mb-20 mt-10 p-8 bg-homebg   xl:mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-lg  xl:text-2xl">
          What makes us different from others.
        </h2>
        <div className="mt-16 justify-between flex w-full px-40  sm:px-10  xl:px-10 sm:mt-5  xl:flex-col">
          <section className="w-[25%] flex-col  xl:w-[100%] items-center  sm:p-1 justify-center p-6">
            <div className="text-5xl flex items-center justify-center  xl:text-[120px]  xl:mb-1 text-blue-600">
              <FaWallet />
            </div>

            <h2 className="text-[22px] font-bold xl:text-center">Flexible payments</h2>
            <p className="text-lg text-center text-headertext  sm:w-[100%]">
              Rent with ease and pay monthly
            </p>
          </section>
          <section className="w-[25%] flex-col xl:w-[100%]  items-center justify-center p-6">
            <div className="text-5xl flex items-center justify-center text-blue-600  xl:text-[120px]  xl:mb-1">
              <FaWallet />
            </div>

            <h2 className="text-[22px] font-bold  xl:text-center ">Flexible payments</h2>
            <p className="text-lg text-center text-headertext">
              Rent with ease and pay monthly
            </p>
          </section>
          <section className="w-[25%] flex-col  xl:w-[100%]  items-center justify-center p-6">
            <div className="text-5xl flex items-center justify-center  xl:text-[120px]  xl:mb-1 text-blue-600">
              <FaWallet />
            </div>

            <h2 className="text-[22px] font-bold  xl:text-center">Flexible payments</h2>
            <p className="text-lg text-center text-headertext">
              Rent with ease and pay monthly
            </p>
          </section>
        </div>
        <div className="mt-16 justify-between flex w-full px-60  xl:mt-3  xl:px-10 xl:flex-col">
          <section className="w-[30%] flex-col  xl:w-[100%]  items-center justify-center p-6">
            <div className="text-5xl flex items-center   xl:text-[120px]  xl:mb-1 justify-center text-blue-600">
              <FaWallet />
            </div>

            <h2 className="text-[22px] font-bold  xl:text-center ">Flexible payments</h2>
            <p className="text-lg text-center   text-headertext">
              Rent with ease and pay monthly
            </p>
          </section>
          <section className="w-[30%] flex-col  xl:w-[100%]  items-center justify-center p-6">
            <div className="text-5xl flex items-center  xl:text-[120px]  xl:mb-1 justify-center text-blue-600">
              <FaWallet />
            </div>

            <h2 className="text-[22px] font-bold xl:text-center">Flexible payments</h2>
            <p className="text-lg text-center   text-headertext">
              Rent with ease and pay monthly
            </p>
          </section>
        </div>
        <div className="flex items-center justify-center mt-10">
          <button className="w-fit rounded-[4px] mr-4 text-white bg-blue-500 px-14 h-12">
            Explore
          </button>
        </div>
      </section>
    
    <Steps />
      <Footer />
 
  </section>
  );
};

export default Homepage;
