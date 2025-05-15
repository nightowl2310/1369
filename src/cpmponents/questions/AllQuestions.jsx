import React from 'react'
import IconButtonSquareLarge from './IconButtonSquareLarge'
import  arrowCircle  from './arrowCircle.svg'
import  arrowDownCircle  from './arrowDownCircle.svg'



function AllQuestions() {
const faqs = [
  {
    question: "What is Fluence AI?",
    answer: "Fluence AI is a smart assistant that automatically replies to your social media comments, using your personal style to boost engagement and save you time.",
  },
  {
    question: "What does MyApp AI include?",
    answer: "MyApp AI includes tools like smart scheduling, intelligent reminders, automated customer support, and real-time insights generation"
  },
  {
    question: "Is MyApp Approved by Meta/Facebook?",
    answer: "No, MyApp is an independent tool and is not affiliated with or approved by Meta or Facebook"
  },
  {
    question: "Is MyApp accessible from mobile?",
    answer: "Yes, MyApp is fully accessible via mobile browsers and has native apps for both Android and iOS platforms"
  },
  {
    question: "How does MyApp ensure the security of my data?",
    answer: "MyApp uses end-to-end encryption, secure authentication protocols, and follows industry-standard compliance to keep your data safe"
  }
];

    
      return (
        <div className="flex flex-col items-center gap-4 py-8">
          <h3 className="text-gray-400 text-sm font-semibold">FAQs</h3>
         <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-[#4C3FFE] to-[#8DA7FF] text-transparent bg-clip-text">
          Frequently Asked Questions
        </h2>


          <div className="w-full min-w-[50vw] flex flex-col gap-4">
            {faqs.map((question, index) => (
              <IconButtonSquareLarge key={index} label={question.question} label2={question.answer} iconUrl={arrowCircle} iconUrl2={arrowDownCircle} className='transition-transform duration-300 hover: scale-110 '/>
            ))}
          </div>
        </div>
      );
    };
// The AllQuestions component renders a list of frequently asked questions (FAQs) with a consistent design.
// Each question is displayed as a button with an arrow icon, and the component is styled to be centered and visually appealing.

export default AllQuestions
