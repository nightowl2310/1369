import React from 'react'

function Video() {
  return (
    <div className="video">
    <div className="mt-6 relative w-[90%] max-w-3xl border rounded-lg overflow-hidden bg-gray-900/50 backdrop-blur-lg shadow-lg border-gray-700"><video src="/videos/demo.mp4" controls="" className="w-full h-auto border border-gray-700 rounded-lg">Your browser does not support the video tag.</video></div>
    </div>
  )
}

export default Video
