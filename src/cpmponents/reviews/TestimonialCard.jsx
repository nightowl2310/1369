import { Star } from 'lucide-react';

const TestimonialCard = ({
    name = "John Doe", // Default name
    role = "Social Media Expert", // Default role
    quote = "ZyloChat has transformed my engagement!", // Default quote
    avatarUrl = "/your-avatar.png", // Default avatar URL
    className = "text-white", // Additional classes for styling override
}) => {
  return (
    <div className={`bg-slate-900 p-4 rounded-lg shadow-lg text-center ${className}`}>
      {/* Avatar */}
      <img
        src={avatarUrl} // Replace this with your image path
        alt="Avatar"
        className="w-24 h-24 mx-auto mb-4"
      />

      {/* Name */}
      <h3 className="text-xl font-bold">{name}</h3>

      {/* Role */}
      <p className="text-blue-400 text-sm mb-2">{role}</p>

      {/* Quote */}
      <p className="italic text-sm text-gray-300 mb-4">
        "{quote}"
      </p>

      {/* Stars */}
      <div className="flex justify-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={20} fill="#facc15" stroke="#facc15" />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
