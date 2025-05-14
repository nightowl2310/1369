import React from 'react'

const StyledDivFC1 = ({ 
    label = "AI Powered", 
    label2 = "#358c92",       // The text shown on the button (default: "AI Powered")
    Icon,
    iconUrl,
    className = ''
                // Additional classes for styling override
 }) => {
    return (
        <div className='flex items-center gap-4 p-3'>
            <div>
                {Icon && <Icon size={36} strokeWidth={3} />}
                {!Icon && iconUrl && (
                    <img src={iconUrl} alt='icon' className='w-10 h-10'/>
                )}
            </div>
            <div className='flex flex-col'>
                <div className={`text-lg font-bold tracking-wide ${className}`}>{label}</div>
                <div className="text-sm text-gray-300 font-medium">{label2}</div>
            </div>
        </div>
    )
 };

export default StyledDivFC1
