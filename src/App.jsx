import React from "react";
import "./App.css";
import Navbar from "./cpmponents/Navbar";
import H1Text from "./cpmponents/H1Text";
import IconButton from "./cpmponents/IconButton";
import arrow from "./assets/arrow.svg";
import user from "./assets/user.svg";
import activity from "./assets/activity.svg";
import IconButtonSquare from "./cpmponents/IconButtonSquare";
import Video from "./cpmponents/Video";
import Container from "./cpmponents/FlashCard1/Container";
import cpu from "./assets/cpu.svg";
import IconButtonWhite from "./cpmponents/iconButtonWhite";
import AllQuestions from "./cpmponents/questions/AllQuestions";
import DRmap from "./cpmponents/reviews/DRmap";
import CCmap from "./cpmponents/reviews/CCmap";
import Tooltip from "./cpmponents/UIDesign/Tooltip";
import MovingButton from "./cpmponents/UIDesign/MovingButtons";
import Footer from "./cpmponents/Footer";

function App() {
  return (
    <>
      <br></br> <br></br>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black-900 to-black-800">
        <Navbar />
        <H1Text />
        <div className="buttons flex justify-center items-center gap-4 pt-10">
          <IconButton label="AI Powered" iconUrl={cpu} className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-4 py-2"/>
          <IconButton label="Real Time" iconUrl={activity} className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-4 py-2"/>
          <IconButton label="User Friendly" iconUrl={user} className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-4 py-2"/>
          <br></br> 
        </div>
        <br></br>
        <br></br>


        <IconButtonWhite label="Get Started" iconUrl={arrow} className="text-2xl px-9 py-4" />
        <div className="flex justify-center items-center mt-10 py-9">
          <Tooltip />
        </div>
        
        <div className="w-full max-w-4xl mx-auto px-4">
          
          <hr className="border-t-2 border-white opacity-50 mt-2" />
        </div>

        <h2 className="mt-10 text-white text-5xl md:text-5xl font-semibold mb-10">
          Features
        </h2>
        <div className="features flex flex-wrap gap-3 justify-center items-start">
          <IconButtonSquare label="AI-Powered Replies" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="Keyword Replies" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="Multi-Account Management" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="Trigger-Based Replies" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="DM Automation" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="User-Friendly Dashboard" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="Real-Time Engagement" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="Story Replies" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="AI-Powered Analytics" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="Seamless Integration" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="Reel Automation" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />
<IconButtonSquare label="Customizable Templates" className="hover:shadow-[0_2px_5px_rgba(255,255,255,0.2)] hover:scale-105 transition-transform duration-200 text-lg px-6 py-3" />


        </div>
        
        <Video />
        <hr className="border-t-2 border-white opacity-50 mt-2" />
        <div className="flex justify-center items-center mt-10 flex-col">
        <br></br> <br></br>
        <h1 class="text-5xl md:text-5xl font-bold bg-gradient-to-r    from-[#87c9ff] via-[#92c0f5] to-[#bfdef7]   text-transparent bg-clip-text animate-gradient    lg:block mb-1">Connect Your Social Media Account</h1>
        
        <h1 className="text-white text-3xl font-semibold mb-2 text-center w-full opacity-100">And SuperBoost your Success</h1>
        <br></br><br></br>
 <Container />
      <DRmap />
      <CCmap />
        
        </div>
        <AllQuestions />

                
      </div>
      <Footer />
    </>
  );
}

export default App;
