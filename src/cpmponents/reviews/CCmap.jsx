import React from 'react'
import CompanyCard from './CompanyCard';
import StyledWrapper from './StyleWrapper';

function CCmap() {
    const companies = [
  {
    companyName: "Meta",
    companyDescription: "Social Media Leader",
    companyTagline: "Connecting billions every day.",
    logoUrl: "/logos/meta.png",
  },
  {
    companyName: "Google",
    companyDescription: "Search Engine Giant",
    companyTagline: "Organizing the world’s information.",
    logoUrl: "/logos/google.png",
  },
  {
    companyName: "Apple",
    companyDescription: "Consumer Tech Innovator",
    companyTagline: "Think different.",
    logoUrl: "/logos/apple.png",
  },
  {
    companyName: "Amazon",
    companyDescription: "E-Commerce Pioneer",
    companyTagline: "Everything from A to Z.",
    logoUrl: "/logos/amazon.png",
  },
  {
    companyName: "Microsoft",
    companyDescription: "Enterprise Software Leader",
    companyTagline: "Empowering every person on the planet.",
    logoUrl: "/logos/microsoft.png",
  },
  {
    companyName: "Netflix",
    companyDescription: "Streaming Service",
    companyTagline: "See what’s next.",
    logoUrl: "/logos/netflix.png",
  },
  {
    companyName: "Spotify",
    companyDescription: "Music Streaming Giant",
    companyTagline: "Music for everyone.",
    logoUrl: "/logos/spotify.png",
  },
  {
    companyName: "Tesla",
    companyDescription: "Electric Vehicle Innovator",
    companyTagline: "Accelerating the world's transition to sustainable energy.",
    logoUrl: "/logos/tesla.png",
  },
  {
    companyName: "Adobe",
    companyDescription: "Creative Software Leader",
    companyTagline: "Creativity for all.",
    logoUrl: "/logos/adobe.png",
  },
  {
    companyName: "LinkedIn",
    companyDescription: "Professional Networking",
    companyTagline: "Connect to opportunity.",
    logoUrl: "/logos/linkedin.png",
  },
];




  return (
     <StyledWrapper>
      <div className="content">
        <div className="benefits basic-marquee basic-marquee-1">
        <div className="flex gap-6">
            {companies.map((company, index) => (
                <CompanyCard key={index} {...company}/>
            ))}
                </div>
                </div>
                </div>
                </StyledWrapper>
           
      
      
   
  )
}

export default CCmap
