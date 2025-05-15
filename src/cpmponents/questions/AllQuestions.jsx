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
    question: "How does Fluence AI reply to comments?",
    answer: "It learns your tone by analyzing your past comments and generates personalized replies automatically.",
  },
  {
    question: "Which social platforms does Fluence AI support?",
    answer: "Currently supports YouTube and Instagram, with plans to expand.",
  },
  {
    question: "Is my account login secure?",
    answer: "Yes, login is via official YouTube OAuth with full security compliance.",
  },
  {
    question: "Do you offer free trials?",
    answer: "Yes, a limited demo version is available before subscription.",
  } 
];

    
      return (
        <div className="flex flex-col items-center gap-4 py-8">
          <h3 className="text-gray-400 text-sm font-semibold">FAQs</h3>
          <h2 className="text-white text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
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
