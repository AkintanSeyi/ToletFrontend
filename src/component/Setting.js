import React from "react";

const Setting = () => {
  return (
    <div className="w-[76vw]  xl:w-[100vw]  flex justify-center items-center h-fit  p-4 rounded-lg">
      <section className="w-3/4   xl:w-full  h-[560px]  p-4 bg-white rounded-lg">
        <h2 className="text-2xl uppercase font-bold text-center mt-4 text-blue-600 ">
          RESET PASSWORD
        </h2>
        <div className="flex justify-center items-center mt-8">
          <label className="text-sm  text-[grey] font-bold  mr-7">
            Old Password :
          </label>

          <input
            placeholder="Old Password"
            className="w-[50%] h-14 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <label className="text-sm  text-[grey] font-bold  mr-7">
            New Password :
          </label>

          <input
            placeholder="New Password"
            className="w-[50%] h-14 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <label className="text-sm  text-[grey] font-bold  mr-7">
            Confirm Password :
          </label>

          <input
            placeholder="Confirm Password"
            className="w-[50%] h-14 rounded-lg outline-none pl-6  text-sm  border-[1px] border-[lightgrey] "
          />
        </div>
        <div className="flex justify-center items-center mt-8">
          <button className="w-fit  text-white  justify-center pr-10 pl-10 items-center p-4 font-bold h-14 bg-blue-600 rounded-lg ">
            Save
          </button>
        </div>
      </section>
    </div>
  );
};

export default Setting;
