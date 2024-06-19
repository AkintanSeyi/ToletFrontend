import React , {useState} from 'react'

const Verificaion = () => {
  return (
    <div  className='h-[100vh] w-[100vw] flex items-center justify-center   flex-col '>
       <section  className='w-60 h-[25%]   rounded-[50%]'>
       <img className=' border-2  contain  w-[100%]  h-[100%]  rounded-[50%]   p-7'  alt='img'  src='https://cdn.pixabay.com/photo/2016/03/31/14/37/check-mark-1292787_1280.png' />

 </section>
   <p  className='text-center capitalize text-lg font-bold mt-16 '>
   please verify your email 
   </p>
   <button className="w-fit p-3 h-10 bg-blue-700 text-g font-bold   text-white rounded-lg flex  mt-8 capitalize items-center justify-center">
           
            Verify Email
          </button>

    </div>

  )
}

export default Verificaion