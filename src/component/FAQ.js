import React, { useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import FAQComponent from "./FAQComponent";
import Steps from "../widget/Steps";
import Footer from "../widget/Footer";
import Header from "../widget/Header";

const FAQ = () => {
  const faqData = [
    {
      question: "what is your name",
      answer: "my name is seyi",
      open: false,
    },
    {
      question: "How old are you",
      answer: "i'm 23 years old",
      open: false,
    },
    {
      question: "what up ",
      answer: "Not good ",
      open: false,
    },
  ];
  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = index => {
    setFaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }

  console.log(faqs);

  return (
    <>

    <div className="w-screen h-fit  ">
         <h2 className="text-3xl mt-16 font-bold sm:text-lg text-center">Frequently Asked Questions</h2>
    <h2 className="text-2xl mt-2  sm:text-sm text-center">
    Here are some frequently asked questions
    </h2>
      <section className=" mb-20 p-16  sm:p-10">
        {faqs.map((item, index) => (
         <FAQComponent  item={item} index={index} toggleFAQ={toggleFAQ}  />
        ))}
      </section>
      <Steps />
      <Footer />
    </div>
    </>
  );
};

export default FAQ;
