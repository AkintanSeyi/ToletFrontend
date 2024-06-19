import React from 'react'
import { FaMinus } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";

const FAQComponent = ({item, index, toggleFAQ}) => {
  return (
    <div   className="w-full h-fit flex items-center flex-col  ">
    <div  onClick={() => toggleFAQ(index)} className={  item.open == false ? `w-[60%]  sm:w-[100%] border-[1px] border-[lightgrey] h-20   xl:w-[80%]  justify-center items-center   mb-4 p-4 flex ` : ` faqquestion w-[60%]  xl:w-[80%] h-20  sm:w-[100%]  justify-center items-center    p-4 flex ` }>
      <p className="w-[97%]   text-sm capitalize ">{item.question}</p>
   {item.open == false ? <FaPlus className="text-sm text-blue-500" /> : <FaMinus className="text-sm text-blue-600" /> }   
    </div>
    <div className=  { item.open == true ? `faqAnswershow ` :  ` faqAnswer `}  >
      <p className="w-[97%]    text-sm capitalize ">{item.answer}</p>
    
    </div>
  </div>
  )
}

export default FAQComponent