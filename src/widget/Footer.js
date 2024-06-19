import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
      }}
      classname="w-screen h-fit  p-10  footercolor "
    >
      <section className="w-full h-3/4  xl:pl-10  sm:pl-2 xl:flex-col  flex justify-between items-start sm:px-2 px-7">
        <div className="w-[30%]  xl:w-[70%]  sm:w-[100%]  xl:p-0  mt-16 p-6 flex  flex-col justify-start items-start">
          <img
            src="logo2.png"
            alt="img"
            className="cover  w-[70%]   sm:w-[60%]"
          />
          <p className="text-sm text-headertext mt-5 w-[100%]  ">
            Rentease offers a reliable solution for stress-free and affordable
            housing options of your preference We offer Flexible installment
            payments and diverse selections of properties from locations accross
            Nigeria
          </p>
        </div>

      
        <div className="text-white    mt-20">
          <h3 className="text-[20px]  sm:text-md font-bold  ">Company</h3>
          <p className="text-[16px] mt-2  sm:text-sm cursor-pointer  hover:text-blue-600">
            About Us
          </p>
          <p className="text-[16px] mt-2  sm:text-sm cursor-pointer hover:text-blue-600">
            FAQ
          </p>
        </div>
        <div className="text-white  mt-20">
          <h3 className="text-[20px] font-bold  sm:text-md ">Support</h3>
          <p className="text-[16px] mt-2  sm:text-sm  cursor-pointer hover:text-blue-600">
            Help Center
          </p>
        </div>
        <div className="text-white  mt-20">
          <h3 className="text-[20px]  mt-2 font-bold  sm:text-md ">Legal</h3>
          <p className="text-[16px]  sm:text-sm  mt-2  cursor-pointer hover:text-blue-600">
            Cookies Policy
          </p>
          <p className="text-[16px]  sm:text-sm mt-2  cursor-pointer hover:text-blue-600">
            Privacy Policy
          </p>
          <p className="text-[16px]  sm:text-sm  mt-2 cursor-pointer  hover:text-blue-600">
            Terms of Service
          </p>
        </div>
        <div className="text-white  w-[15%]  xl:w-[40%]  mt-20">
          <h3 className="text-[20px]  mt-2 font-bold  sm:text-md ">Socials</h3>
          <div className="flex justify-between  text-2xl items-center mt-2">
            <FaFacebook className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaInstagram className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
          
        </div>
      </section>
      <div  className="w-screen h-[2px] bg-white mt-10 ">


        </div>

        <p className="p-10 flex items-center text-white justify-center ">
   @2024 production 
        </p>
    </div>
  );
};

export default Footer;
