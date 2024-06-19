import React , {useState}  from 'react'
import Navbar from '../widget/Navbar'
import Dasboard from '../widget/Dasboard'
import DashboadMain from './DashboadMain'
import Rentnow from './Rentnow'
import Setting from './Setting'
import Profile from './Profile'
import RentHistory from './RentHistory'
import NavSidebar from './NavSidebar'

const Main = ({toggel , settoggel}) => {
  console.log(toggel);
  const [toggelSidebar, settoggelSidebar] = useState(false)
  
  return (
    <div  className='relative  h-screen w-screen overflow-x-scroll bg-[lightgrey]'>
    
    
   
      <div  className='z-10   xl:hidden   fixed'>
      <Navbar toggel={toggel} settoggel={settoggel} />
      </div>
      <div  className='absolute z-0 top-0  xl:left-[0%] left-[18%]'> 
        <Dasboard    settoggelSidebar = {settoggelSidebar}  toggelSidebar = {toggelSidebar} toggel={toggel} settoggel={settoggel}   />
        </div>
{
  toggelSidebar == true &&  <div  className='z-20  fixed  right-0'>
          <NavSidebar  toggel={toggel} settoggel={settoggel}   settoggelSidebar = {settoggelSidebar}  toggelSidebar = {toggelSidebar} />
        </div>
}
        
      
        <div className='absolute z-1 top-40  xl:left-[0%]  left-[22%]'>
       
        {toggel == "dashboard" &&  <DashboadMain  /> }
        {toggel == "profile" && <Profile />}
        {toggel == "rentnow"  && <Rentnow />}
        {toggel == "history"  && <RentHistory />}
        {toggel == "setting" && <Setting />}

        </div>
     
       
    </div>
  )
}

export default Main