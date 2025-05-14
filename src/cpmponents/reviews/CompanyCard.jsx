import React from "react";

const CompanyCard = ({
    companyName = "Meta",
    companyDescription = "Social Media Leader",
    companyTagline = "Connecting billions every day.",
    logoUrl = "/meta-logo.png", // Default logo URL
    className = "text-white", // Additional classes for styling override
    // Function to run when the mouse leaves the card

}) => {
  return (
    <div className={`flex items-center gap-4 bg-slate-900 min-w-11 text-white p-4 rounded-lg w-fit ${className}`}>
      {/* Logo */}
      <img
        src={logoUrl} // Replace with the actual path to your logo
        alt="Meta Logo"
        className="w-10 h-10"
      />

      {/* Text content */}
      <div>
        <h3 className="text-white font-bold text-lg">{companyName}</h3>
        <p className="text-blue-500 text-sm">{companyDescription}</p>
        <p className="text-gray-300 text-sm">{companyTagline}</p>
      </div>
    </div>
  );
};

export default CompanyCard;
