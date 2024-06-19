import React , {useState} from 'react'
import { CiBarcode } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { GiGreenhouse } from "react-icons/gi";
import { BsHouseAdd } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";

const Navbar = ({toggel , settoggel}) => {

  
console.log(toggel);
  return (
    <div  className='w-72 h-screen relative p-8 bg-navbgcolor'>
     <ul  className='list-none  '>
<li  onClick={() => settoggel("dashboard")} className = {`${toggel === "dashboard" ?  "bg-navbgmaincolor p-3 rounded-lg text-white font-bold list-none flex items-start text-lg  mb-4  justify-start cursor-pointer" : "cursor-pointer list-none p-3 flex items-start text-lg  mb-4  justify-start"}`}>
    <span  className=' text-lg mr-5'>
    <CiBarcode  className='text-[30px]' />
    </span>
     <div  className='captalize'>
Dashboard
     </div>
   </li>
   <li onClick={() => settoggel("profile")} className = {`${toggel === "profile" ?  "bg-navbgmaincolor p-3 rounded-lg text-white font-bold list-none flex items-start text-lg  mb-4  justify-start cursor-pointer" : " cursor-pointer list-none p-3 flex items-start text-lg  mb-4  justify-start"}`}>
    <span  className=' text-lg  mr-5'>
    <BsPerson className='text-[30px]' />
    </span>
     <div  className='capitalize  '>
profile
     </div>
   </li>
   <li  onClick={() => settoggel("rentnow")} className = {`${toggel === "rentnow" ?  "bg-navbgmaincolor  p-3 rounded-lg text-white font-bold list-none flex items-start text-lg  mb-4  justify-start cursor-pointer" : " cursor-pointer  list-none p-3 flex items-start text-lg  mb-4  justify-start"}`}>
    <span  className=' text-lg  mr-5'>
    <GiGreenhouse  className='text-[30px]' />
    </span>
     <div  className='capitalize  '>
rent now
     </div>
   </li>
   <li onClick={() => settoggel("history")} className = {`${toggel === "history" ?  "bg-navbgmaincolor p-3 rounded-lg text-white font-bold list-none flex items-start text-lg  mb-4  justify-start cursor-pointer" : "cursor-pointer list-none p-3 flex items-start text-lg  mb-4  justify-start"}`}>
    <span  className=' text-lg  mr-5'>
    <BsHouseAdd  className='text-[30px]' />
    </span>
     <div  className='capitalize  '>
rent history
     </div>
   </li>
   <li onClick={() => settoggel("setting")} className = {`${toggel === "setting" ?  "bg-navbgmaincolor p-3 rounded-lg text-white font-bold list-none flex items-start text-lg  mb-4  justify-start cursor-pointer" : "cursor-pointer list-none p-3 flex items-start text-lg  mb-4  justify-start"}`}>
    <span  className=' text-lg  mr-5'>
    <CiSettings  className='text-[30px]' />
    </span>
     <div  className='capitalize  '>
setting
     </div>
   </li>

   <li  className='absolute  bottom-10 '>
 <button className='mt-4  w-fit rounded-[4px] flex text-lg  items-center justify-center text-xl mr-4 bg-white  border-[2px] px-5 h-12'>
 <IoExitOutline className='mr-3 text-[25px] text-red-800' />
      Log Out  </button>
   </li>
 
     </ul>
    </div>
  )
}

export default Navbar