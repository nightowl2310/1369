import React from 'react'


const IconButtonSquare = ({
    label = "AI Powered",        // The text shown on the button (default: "AI Powered")
    Icon,
    iconUrl,                        // A React component (e.g., an SVG icon like Brain)
    onClick,                     // Function to run when the button is clicked
    className = "",              // Additional classes for styling override
  }) => {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 text-white text-sm md:text-base font-medium bg-gray-700/30 backdrop-blur-md rounded-md border border-gray-500/30  ${className}`}

      >
        {Icon && <Icon size={18} strokeWidth={2} />} 
        {!Icon && iconUrl && (
          <img src={iconUrl} alt='icon' className='w-4 h-4'/>
        )}  
        <span className="font-medium">{label}</span>   
      </button>
    );
  };

export default IconButtonSquare
