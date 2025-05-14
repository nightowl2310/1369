import React, { useState } from 'react';

const IconButtonSquareLarge = ({
  label = "AI Powered",
  label2 = "yes",
  Icon,
  iconUrl,
  iconUrl2,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={`min-w-[100vh] max-w-[100vh] py-2 text-white text-sm md:text-base font-medium bg-gray-700/30 backdrop-blur-md rounded-md shadow-md border border-gray-500/30 transition-all duration-700 ease-in-out ${className}`}
      >
        <div className='px-5 flex items-center justify-between gap-2'>
          <span className="font-medium flex justify-center items-center ">{label}</span>
          {Icon && <Icon size={18} strokeWidth={2} />}
          {!Icon && iconUrl && !isOpen && <img src={iconUrl} alt='icon' className='w-4 h-4' />}
          {!Icon && iconUrl && isOpen && <img src={iconUrl2} alt='icon' className='w-4 h-4' />}

        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className='my-4 text-sm text-slate-400 font-thin text-center'>{label2}</div>
        </div>
      </button>
    </div>
  );
};

export default IconButtonSquareLarge;
