import React from 'react'
import { useNavigate } from 'react-router-dom'
//import {Logo} from "../../public/logo3.png"

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=' flex items-center w-[100vw]  font-bold justify-between  text-headertext h-[13vh] px-8 '>
   <img src = "/logo2.png"
   alt = "img" className='object-contain  w-[15%] h-[90%]'  />

   <h2 className='text-lg hover:text-blue-400 cursor-pointer capitalize' >
    Home
   </h2>
   <h2 className='text-lg hover:text-blue-400  cursor-pointer capitalize' >
   Become an Agent
   </h2>
   <h2 className='text-lg  hover:text-blue-400 cursor-pointer capitalize' >
   Properties
   </h2>
   <h2   onClick={() => navigate("/faq") }  className='text-lg  hover:text-blue-400 cursor-pointer capitalize' >
   FAQ
   </h2>
   <div>

   <button  onClick={() => navigate("/auth") }  className='w-fit rounded-[4px] mr-4 text-white bg-blue-500 px-14 h-12'>
Login
   </button>
   <button  onClick={() => navigate("/auth") }  className='w-fit rounded-[4px]  bg-white border-2 px-10 h-12'>
Apply now
   </button>
   </div>
    </div>
  )
}

export default Header 