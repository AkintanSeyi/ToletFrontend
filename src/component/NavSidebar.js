import React from 'react'
import { useNavigate } from 'react-router-dom';

const NavSidebar = ({toggelSidebar , settoggelSidebar , toggel , settoggel}) => {
    const navigate = useNavigate();

    const handleChangeButton = (itemData) => {
        settoggelSidebar(false)
    settoggel(itemData)
   
    }
  return (
    <div  className='w-[40vw] p-7 text-white  h-[100vh] bg-navbarcolor'>

<div  className='flex justify-end text-[50px]'  onClick={() => settoggelSidebar(false)}>
   &times;
</div>
 <p   onClick={() => handleChangeButton("dashboard")} className='text-2xl font-bold mt-24 mb-10 capitalize ' >
 Dashboard
 </p>
 <p  onClick={() =>  handleChangeButton("profile") } className='text-2xl font-bold  mb-10 capitalize '>
 Profile
 </p>
 <p  onClick={() =>  handleChangeButton("rentnow") } className='text-2xl font-bold  mb-10 capitalize '>
 Rent Now
 </p>

 <p  onClick={() =>  handleChangeButton("history") } className='text-2xl font-bold  mb-10 capitalize '>
 Rent History
 </p>
 <p  onClick={() => handleChangeButton("setting")} className='text-2xl font-bold  mb-10 capitalize '>
 Setting
 </p>
    </div>
  )
}

export default NavSidebar