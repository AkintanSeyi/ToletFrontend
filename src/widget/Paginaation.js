import React, { useState } from "react";
import houseData from "../widget/houses.json";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const Paginaation = () => {
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [houseFile, setHouseFile] = useState(houseData);
  const selectData = ["apple", "glass", "will"];

  const handlePreviouse = () => {
    setPage((p) => {
      if (page == 1) return p;
      return p - 1;
    });
  };

  const handleNext = () => {
    if (page == pageCount) return page;
    setPage((p) => {
      return p + 1;
    });
  };
  const handleNextbutton = (item, index) => {
    const newArrHouse = [...houseFile];
  
    if (newArrHouse[index].imageNum + 1 == newArrHouse[index].imageShow.length) {
      newArrHouse[index].imageNum = 0;
      setHouseFile(newArrHouse);
     
   
    } else {
      newArrHouse[index].imageNum = newArrHouse[index].imageNum + 1;
    }
    console.log(newArrHouse[index].imageNum , newArrHouse[index].imageShow.length);
    setHouseFile(newArrHouse);
  };

  const handlePreviouseButton = (index) => {
    const newArrHouse = [...houseFile];
    if (newArrHouse[index].imageNum <= 0) {
      newArrHouse[index].imageNum = newArrHouse[index].imageShow.length - 1;
      setHouseFile(newArrHouse);
    }
    else {
      newArrHouse[index].imageNum = newArrHouse[index].imageNum - 1
    }
    setHouseFile(newArrHouse);
  }

  return (
    <div className="p-2  h-fit w-[100vw] flex items-center  flex-col justify-center">
      <div  className="w-[95%] h-fit grid grid-cols-4 p-2 mb-10   justify-items-center">
      <select className="w-52 p-3 h-fit  capitalize  mt-4 rounded-lg outline-none   text-sm  border-[1px] border-[lightgrey] ">
          <option
            disabled="disabled"
            selected="true"
            className="w-[100%] h-[100%] "
          >
            Select Data
          </option>
          {selectData.map((item, index) => {
            return <option className="w-[100%] h-[100%] mb-2">{item}</option>;
          })}
        </select>
        <select className="w-52 p-3 h-fit  capitalize  mt-4 rounded-lg outline-none   text-sm  border-[1px] border-[lightgrey] ">
          <option
            disabled="disabled"
            selected="true"
            className="w-[100%] h-[100%] "
          >
            Select Data
          </option>
          {selectData.map((item, index) => {
            return <option className="w-[100%] h-[100%] mb-2">{item}</option>;
          })}
        </select>
        <select className="w-52 p-3 h-fit  capitalize  mt-4 rounded-lg outline-none   text-sm  border-[1px] border-[lightgrey] ">
          <option
            disabled="disabled"
            selected="true"
            className="w-[100%] h-[100%] "
          >
            Select Data
          </option>
          {selectData.map((item, index) => {
            return <option className="w-[100%] h-[100%] mb-2">{item}</option>;
          })}
        </select>
        <select className="w-52 p-3 h-fit  capitalize  mt-4 rounded-lg outline-none   text-sm  border-[1px] border-[lightgrey] ">
          <option
            disabled="disabled"
            selected="true"
            className="w-[100%] h-[100%] "
          >
            Select Data
          </option>
          {selectData.map((item, index) => {
            return <option className="w-[100%] h-[100%] mb-2">{item}</option>;
          })}
        </select>
        <select className="w-52   p-3 h-fit  capitalize  mt-4 rounded-lg outline-none   text-sm  border-[1px] border-[lightgrey] ">
          <option
            disabled="disabled"
            selected="true"
            className="w-[100%] h-[100%] "
          >
            Select Data
          </option>
          {selectData.map((item, index) => {
            return <option className="w-[100%] h-[100%] mb-2">{item}</option>;
          })}
        </select>
        <select className="w-52   p-3 h-fit  headerPosition  capitalize  mt-4 rounded-lg outline-none   text-sm  border-[1px] border-[lightgrey] ">
          <option
            disabled="disabled"
            selected="true"
            className="w-[100%] h-[100%] "
          >
            Select Data
          </option>
          {selectData.map((item, index) => {
            return <option className="w-[100%] h-[100%] mb-2">{item}</option>;
          })}
        </select>
        <button className="h-12 w-32 p-3 mt-4 font-bold  headerPosition2  capitalize  text-white  border-none bg-blue-600 rounded-lg">
          search
        </button>
      </div>
      <section className="w-[85%] grid  grid-cols-4   mb-10  gap-5 justify-items-center  ">
        {houseFile.map((item, index) => {
          return (
            <div
              key={index}
              className="w-[100%] h-fit p-2 border-2  cursor-pointer rounded-lg"
            >
              <div className="h-[60%] w-[100%]  mb-2 relative">
                <FaHeart className="top-[3%] right-2  text-white absolute text-[20px] z-10" />
                <MdOutlineKeyboardArrowLeft  onClick={() => handlePreviouseButton(index)} className="text-[25px]  cursor-pointer text-white  absolute top-[48%]" />
                <img src={item.imageShow[item.imageNum]} alt="img" />
                <MdOutlineKeyboardArrowRight
                  onClick={() => handleNextbutton(item, index)}
                  className="text-[25px]  cursor-pointer  text-white right-2 absolute top-[48%]"
                />
              </div>
              <p className="text-[12px]  mb-2 font-bold capitalize ">
                House : House
              </p>
              <p className="text-[12px]   mb-2 font-bold capitalize ">
                House : House
              </p>
              <p className="text-[12px]  mb-2 font-bold capitalize ">
                House : House
              </p>
              <p className="text-[12px]  mb-2 font-bold capitalize ">
                House : House
              </p>
            </div>
          );
        })}
      </section>
      <div className="flex items-center justify-between w-[80%] ">
        <button className="h-12 w-24 p-3  text-white capitalize border-none bg-blue-600 rounded-lg">
          previose
        </button>
        <button className="h-12 w-20 p-3  capitalize  text-white  border-none bg-blue-600 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default Paginaation;
