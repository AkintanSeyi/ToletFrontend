import React from 'react'

const Profile = () => {
  return (
    <div
    className='w-[76vw]  xl:w-[100vw] h-[70vh] p-4   '
    >
        <h2  className='text-2xl uppercase font-bold text-center mb-15 '>
   PROFILE
        </h2>
   <div className='w-[100]   grid grid-cols-2   justify-items-center   xl:flex xl:flex-col   items-center   grid-row-2  h-[80%]'>
<input className='rounded-lg w-[70%] xl:mb-5 xl:mt-14 h-12 p-2 border-[lightgrey] ' value={"Name"} />
<input className='rounded-lg w-[70%] xl:mb-5 xl:mt-5 h-12 p-2 border-[lightgrey] ' value={"Name"} />
<input className='rounded-lg w-[70%] xl:mb-5 xl:mt-5  h-12 p-2 border-[lightgrey] ' value={"Name"} />
<input className='rounded-lg w-[70%]  xl:mb-5 xl:mt-5  h-12 p-2 border-[lightgrey] ' value={"Name"} />
   </div>
    </div>
  )
}

export default Profile