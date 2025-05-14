import React from 'react'
import { Paperclip, Send } from 'lucide-react';

const LowerDivFC1 = () => {
  return (
    <div className="w-80 h-[500px] bg-gradient-to-b from-gray-800 to-blue-900 rounded-[30px] p-3 text-white flex flex-col justify-between">
      
      {/* Header */}
      <div className="flex justify-between items-center px-3">
        <div className="w-4 h-4 bg-pink-600 rounded-full flex items-center justify-center">
          <span className="text-xs">📷</span>
        </div>
        <div className="w-1/2 h-2 bg-gray-600 rounded-full"></div>
        <div className="text-white">💬</div>
      </div>

      {/* Chat Bubbles */}
      <div className="flex flex-col gap-3 px-3 mt-10">
        {/* Incoming bubble */}
        <div className="self-end bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl px-4 py-2 text-sm max-w-[70%]">
          <p className="text-white font-medium">When comment<br />includes Tool</p>
        </div>

        {/* Outgoing bubble */}
        <div className="self-start bg-gray-700 rounded-xl px-4 py-2 text-sm max-w-[70%] flex items-center gap-2">
          <Paperclip size={16} />
          <span>Send DM with Link</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 p-3">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 bg-gray-800 text-gray-300 px-3 py-2 rounded-full text-sm placeholder-gray-500 focus:outline-none"
        />
        <button className="bg-cyan-500 p-2 rounded-full hover:bg-cyan-600 transition duration-300">
          <Send size={18} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default LowerDivFC1;