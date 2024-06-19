import React  , {useState} from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Header from './widget/Header'
import Homepage from './component/Homepage'
import FAQ from './component/FAQ' 
import Auth from './component/Auth'
import Main from './component/Main'
import InnerPage from './widget/InnerPage'
import Verificaion from './component/Verificaion'
import Paginaation from './widget/Paginaation'
import SellerPage from './component/SellerPage'

const App = () => { 
  const [toggel, settoggel] = useState("setting")
  return (
    <div  className=''>
     {/*   */ }
    <Routes>
      <Route path='/' element = {<Homepage />}  />
      <Route path='/faq' element = {<FAQ />}  />
      <Route path='/auth' element = {<Auth />}  />
      <Route path='/main' element = {<Main  toggel={toggel} settoggel={settoggel}  />}  />
      <Route path='/profile/item' element = {<InnerPage />}  />
      <Route path='/verifyemail' element = {<Verificaion />}  />
      <Route path='/pagination' element = {<Paginaation />}  />
      <Route path='/seller' element = {<SellerPage />}  />
    </Routes>
  
    </div>
  )
}

export default App