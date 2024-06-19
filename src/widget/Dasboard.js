import React, { useState } from "react";
import { IoIosNotifications } from "react-icons/io";

const Dasboard = ({ toggel, settoggel , toggelSidebar , settoggelSidebar }) => {
  console.log(toggel , toggelSidebar);
  return (
    <div className="h-34  bg-white flex  xl:w-[100vw] xl:pt-10 xl:pb-10 xl:p-5 xl:ml-0  items-center  justify-between  ml-10 w-[80vw]  p-10">
      <h2 className="text-2xl xl:text-lg text-black font-bold cursor-pointer capitlize">
        {toggel == "dashboard" && <p className="text-black"> Dashboard</p>}
        {toggel == "profile" && "Profile"}
        {toggel == "rentnow" && "Rent Now"}
        {toggel == "history" && "Rent History"}
        {toggel == "setting" && "Setting"}
      </h2>
      <div className="flex items-center justify-center">
        <div className="w-10 text-2xl h-10 rounded-lg bg-[lightgrey] flex items-center justify-center ">
          <IoIosNotifications />
        </div>
        <div className="flex items-center w-fit ml-10 xl:ml-4 ">
          <div className="mr-4  xl:hidden">
            <h2 className="font-bold capitalize text-lg ">dfghj</h2>
            <p className=" capitalize text-sm ">bgnjhjbb</p>
          </div>
          <div className="w-10 h-11 flex items-center justify-center rounded-[50%] border-2">
            A
          </div>
        </div>
        <section  className="ml-3  hidden  xl:block "  onClick={() => settoggelSidebar(true)}>
          <div  className="w-8 mb-[5px] h-[2px] bg-black">

          </div>
          <div  className="w-8 mb-[5px] h-[2px] bg-black">

</div>
<div  className="w-8 h-[2px] mt-[5px]  bg-black">

</div>
        </section>
      </div>
    </div>
  );
};

export default Dasboard;
