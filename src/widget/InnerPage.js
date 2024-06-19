import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import Footer from "./Footer";
import { FaTrashCan } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";

const InnerPage = () => {
  const [showPopup, setshowPopup] = useState(false)
  return (
    <div className="p-2 w-screen h-fit ">
      <div className="w-[100%]  pt-5 sm:px-4 px-20 h-[450px] ">
        <div className="w-[100%] h-[100%] border-2  relative">
          <MdKeyboardArrowLeft className="cursor-pointer  text-[55px]  absolute  left-0 top-[45%]" />
          <img
            src="https://www.resolutionlawng.com/wp-content/uploads/2020/09/house-in-Nigeria-image.jpeg"
            className="w-[100%] object-contain h-[100%] "
            alt="img"
          />

          <MdKeyboardArrowRight className="cursor-pointer  text-[55px]  absolute right-0 top-[45%]" />
        </div>
      </div>

      <div className="mt-14 h-fit w-screen p-2">
        <section className="mx-20 grid grid-cols-2 gap-5 xl:mx-4 xl:flex  xl:flex-col">
          <p className="text-md capitalize ">Name : Seyi</p>
          <p className="text-md capitalize ">Name : Seyi</p>
          <p className="text-md capitalize ">Name : Seyi</p>
          <p className="text-md capitalize ">Name : Seyi</p>
          <p className="text-md capitalize ">Name : Seyi</p>
          <p className="text-md capitalize ">Name : Seyi</p>
          <p className="text-md capitalize ">Name : Seyi</p>
          <p className="text-md capitalize ">Name : Seyi</p>
          <p className="text-md capitalize ">Name : Seyi</p>
        </section>

        <div className="mx-14 mt-14  sm:mx-4 w-[100%] flex ">
          <div className="w-[45%] flex flex-col ">
        
          <p className="text-md capitalize mb-5">Seller Number : 08071434751</p>
          <p className="text-md capitalize mb-10">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is availableIn
            publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is available
          </p>
          </div>
          <div  className="w-[50%] p-2  mb-3  mr-10 flex items-center flex-col ">
        <button className="h-12 w-[90%] p-3 mt-4 font-bold  headerPosition2  capitalize  text-white  border-none bg-blue-600 rounded-lg">
          Edit
        </button>
        <button  onClick={() => setshowPopup(true)} className="h-12 w-[90%] p-3 mt-4 font-bold  headerPosition2  capitalize  text-white  border-none bg-red-600 rounded-lg">
        Delete 
        </button>
     
        </div>
        </div>

{
  showPopup == true && <div  className="w-[100vw]  flex  items-center bg-white justify-center z-20 h-[100vh] fixed top-0 left-0">


  <section    className="w-[30%]    relative  items-center p-2  justify-center  flex flex-col h-[60%] rounded-lg border-2 ">
  <span   onClick={() => setshowPopup(false)}  className="absolute top-0  text-[45px]  cursor-pointer right-4">
  &times;
  </span>
  <IoTrashBin className="text-[50px] text-red-800 " />
  <p className="text-md capitalize w-[70%] text-center font-bold mt-5"> Are you sure you want to delete this items</p>
  <div className="w-[90%] flex justify-between items-center mt-5">
  <button   onClick={() => setshowPopup(false)} className="h-13 w-[45%] p-3  capitalize  font-bold  border-2 text-black rounded-lg">
            Cancel
          </button>
          <button className="h-13 w-[45%] p-3  capitalize  font-bold  text-white border-none bg-blue-600 rounded-lg">
            Delete
          </button>
  </div>
  </section>
  
    </div>
       
}

     
      </div>
 
    </div>
  );
};

export default InnerPage;
