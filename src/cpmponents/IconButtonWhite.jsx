import React from 'react'


const IconButtonWhite = ({
    label = "AI Powered",        // The text shown on the button (default: "AI Powered")
    Icon,
    iconUrl,                        // A React component (e.g., an SVG icon like Brain)
    onClick,                     // Function to run when the button is clicked
    className = "",              // Additional classes for styling override
  }) => {
    return (
      <button
        onClick={onClick}
        className={`flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full shadow-sm border border-gray-700 hover:bg-amber-100 transition ${className}`}
      >
        {Icon && <Icon size={18} strokeWidth={2} />} 
        {!Icon && iconUrl && (
          <img src={iconUrl} alt='icon' className='w-4 h-4'/>
        )}  
        <span className="font-medium">{label}</span>   
      </button>
    );
  };

export default IconButtonWhite
