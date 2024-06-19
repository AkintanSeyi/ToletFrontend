import React , {useState} from 'react'
import Header from '../widget/Header'

const Auth = () => {
    const [authconfig , setAuthconfig] = useState(false)
  return (
    <>
   
    <div  className='h-screen w-screen overflow-x-hidden flex-col flex items-center mt-10'>
           <img src = "logo3.png"
   alt = "img" className='cover  w-60 h-20 object-contain  xl:w-42'  />
       <h2 className="text-3xl mt-4  xl:text-lg font-bold ">
       {authconfig == true ? "Application"    :   "Login"  }
       </h2>


          <section className='w-[40%]  xl:w-[80%] h-fit pr-10 pb-10 pt-4 pl-10 rounded-lg  flex-col  ml-16 flex  justify-center'>
          {
   
   authconfig == true &&  
   <>
   <label   className='text-sm  sm:textsm text-[grey] xl:text-md font-bold mt-4 mb-1'>
   Fullname
   </label>
 <input  placeholder='Firstname Secondname Lastname' className='w-[90%] text-sm h-14 rounded-lg outline-none  border-[1px] border-[lightgrey] pl-4'      />
 </>
 }
               <label   className='text-sm  xl:text-md text-[grey] font-bold mt-4 mb-1'>
                Email
                </label>
               
                <input className='w-[90%] h-14 rounded-lg outline-none  text-sm mb-4 border-[1px] border-[lightgrey] pl-4'      />
             
             
               
              <label   className='text-sm  xl:text-md text-[grey] font-bold mb-1'>
                Password
                </label>
              <input className='w-[90%] h-14 rounded-lg outline-none  text-sm  border-[1px] border-[lightgrey] pl-4'      />
        
        
          {authconfig == false && <p className='capitalize font-bold mt-2  text-sm text-blue-600 '>forget Password</p>}
          
          {
   
   authconfig == true && 
   <>
   <label   className='text-sm text-[grey] font-bold mt-4 mb-1'>
   Confirm password
   </label>
 <input className='w-[90%] h-14 rounded-lg outline-none  text-sm border-[1px] border-[lightgrey] pl-4'      />
 </>
 }
              {
   
                authconfig == true && 
                <>
                <label   className='text-sm text-[grey] mt-4 font-bold  mb-1'>
                Number
                </label>
              <input  type='number' className='w-[90%] h-14 rounded-lg text-sm  outline-none  border-[1px] border-[lightgrey] pl-4'      />
              </>
              }

              <button className='w-[90%] h-14 capitalize mt-4  text-sm font-bold text-white bg-blue-600 rounded-lg'>
   {authconfig == true ? "Apply"    :   "Sign in"  }

  
              </button>
              <p className='text-sm w-[90%] text-center mt-1 text-[grey]'>
   Don't have an account?  <span  onClick={() => setAuthconfig(!authconfig)} className=' cursor-pointer  text-blue-600 '>
   {authconfig == false ?  "Sign up"   :     "Sign in"   }
   </span>
    </p>
          </section>
    </div>
    </>
  )
}

export default Auth