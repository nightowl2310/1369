import React from 'react'
const IconButtonWhite = ({
  label = "AI Powered",
  Icon,
  iconUrl,
  onClick,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 
        bg-gradient-to-r from-[#3F31CB] via-[#4C3FFE] to-[#685FFF] 
        text-white rounded-full shadow-sm border border-gray-700 
        hover:opacity-90 transition ${className}`}
    >
      {Icon && <Icon size={18} strokeWidth={2} />}
      {!Icon && iconUrl && (
        <img src={iconUrl} alt='icon' className='w-4 h-4'/>
      )}
      <span className="font-medium">{label}</span>
    </button>
  );
};

export default IconButtonWhite;
