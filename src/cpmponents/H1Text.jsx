import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import "./H1Text.css"

function H1Text() {
    const sentences = [
        "Automate Comments, Amplify Your Brand",
        "Engage Instantly, Grow Consistently",
        "Scale Replies, Save Your Time",
        "Create Once, Converse Forever",
        "Own Your Comments Section.",
        "Promote Your brand, Effortlessly"
        // Add more sentences here if needed
        // "Your Brand, Your Voice, Our Automation",
        // "Engage, Automate, Elevate",
        // "Transforming Comments into Conversations",
        // "Your Comments, Our Command",
        // "Automate, Engage, Succeed",
      ];
      const colors = [
        '#D32F2F', // Deep Red
        '#388E3C', // Emerald Green
        '#1976D2', // Royal Blue
        '#8E24AA', // Violet
        '#FBC02D', // Gold
        '#C2185B'  // Crimson
      ];
      const [index, setIndex] = useState(0);
      

      useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % sentences.length);
            

            // This will loop through the sentences array
        }, 2000); // Change every 2 seconds
    
        return () => clearInterval(interval); // cleanup
      }, []);

  return (
    <div className='pt-32 flex  flex-col justify-center items-center gap-16'>
      <motion.h2
      className="heading text-5xl font-extrabold text-white tracking-wide"
      style={{color: colors[index]}}
      key={index}   //To re-trigger the animation.
       initial={{y: 25, opacity: 0}}
       animate={{y: 0, opacity: 1}}
       transition={{duration: 1, ease: "easeInOut"}}>
        {sentences[index]}
       </motion.h2>
       <p className='text-white  text-lg tracking-wide'>Help your business grow by social media automation.</p>
    </div>
  )
}

export default H1Text
