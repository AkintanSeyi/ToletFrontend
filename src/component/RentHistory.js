
import React , {useState} from 'react'

const RentHistory = () => {
    const [toggle, settoggle] = useState("house")
  return (
    <div  className="w-[76vw] xl:mt-4  xl:w-[100vw] xl:p-1  h-fit  p-4 rounded-lg">
             <div  className='w-[100%] flex justify-around items-center'>
     <p onClick={() => settoggle("house")}  className= { toggle == "house" ?  'border-b-2  pb-2  w-1/2  xl:text-lg font-bold text-center capitalize text-2xl border-blue-600 cursor-pointer' :  'w-1/2 pb-2 font-bold  xl:text-lg text-center capitalize text-2xl border-b-2 cursor-pointer'  }>House</p>
     <p onClick={() => settoggle("saved")} className=  { toggle == "saved" ? 'border-b-2  pb-2  w-1/2  font-bold xl:text-lg  pb-2  text-center  border-blue-600 capitalize text-2xl cursor-pointer' : 'w-1/2  pb-2  xl:text-lg font-bold text-center capitalize text-2xl  cursor-pointer border-b-2'  }>Saved</p>
             </div>
    </div>
  )
}

export default RentHistory