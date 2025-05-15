import React, { useState } from "react";
import Navbar from "./Navbar";
import H1Text from "./H1Text";
import IconButton from "./IconButton";
import iconButtonWhite from "./iconButtonWhite";
import arrow from "../assets/arrow.svg";
import user from "../assets/user.svg";
import activity from "../assets/activity.svg";
import cpu from "../assets/cpu.svg";
import Footer from "./Footer";
import "./H1Text.css";

const VideoUpload = () => {
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle video URL submission here
    console.log("Video URL submitted:", videoUrl);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black-900 to-black-800">
        <Navbar />
        <div className="pt-20">
          <H1Text />
        </div>
        
        {/* Video URL Input Section */}
        <div className="w-full max-w-2xl mx-auto px-4 mt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-[#434343] p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">Enter Video URL</h3>
              <div className="flex gap-4">
                <input
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="Paste your video URL here"
                  className="flex-1 px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                >
                  Process
                </button>
              </div>
              <p className="text-gray-400 text-sm mt-2">Supported formats: YouTube, Vimeo, or direct video URLs</p>
            </div>
          </form>
        </div>

        {/* Feature Buttons Section */}
        <div className="buttons flex justify-center items-center gap-4 pt-10">
          <IconButton
            label="AI Powered"
            iconUrl={cpu}
            className="hover:scale-[1.02] transition-transform duration-200 text-lg px-4 py-2"
          />
          <IconButton
            label="Real Time"
            iconUrl={activity}
            className="hover:scale-[1.02] transition-transform duration-200 text-lg px-4 py-2"
          />
          <IconButton
            label="User Friendly"
            iconUrl={user}
            className="hover:scale-[1.02] transition-transform duration-200 text-lg px-4 py-2"
          />
        </div>

        {/* Info Section */}
        <div className="mt-12 text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Analyze Your Video Content
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our AI-powered system will analyze your video content and provide detailed insights,
            engagement metrics, and optimization suggestions to help you improve your content strategy.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12 px-4">
          {[
            {
              title: "1. Upload",
              description: "Paste your video URL from any major platform"
            },
            {
              title: "2. Analyze",
              description: "Our AI processes and analyzes your content"
            },
            {
              title: "3. Optimize",
              description: "Get detailed insights and recommendations"
            }
          ].map((step, index) => (
            <div key={index} className="bg-[#434343] p-6 rounded-lg">
              <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default VideoUpload;
