import React from 'react'
import TestimonialCard from './TestimonialCard';
import StyledWrapper from './StyleWrapper';



function DRmap() {
    const testimonials = [
  {
    name: "John Doe",
    role: "Social Media Expert",
    quote: "ZyloChat has transformed my engagement!",
    avatarUrl: "/john-avatar.png",
  },
  {
    name: "Jane Smith",
    role: "Marketing Manager",
    quote: "Best tool I've used all year!",
    avatarUrl: "/jane-avatar.png",
  },
  {
    name: "David Brown",
    role: "Influencer",
    quote: "Helped me connect better with my audience.",
    avatarUrl: "/david-avatar.png",
  },
];

  return (
    
    <div className='px-6 py-11 flex flex-wrap items-center justify-center gap-11'>
        <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />

            ))}
        </div>
      
    </div>
  )
}

export default DRmap
