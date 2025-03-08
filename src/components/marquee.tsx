// Marquee.tsx
import React from "react";

const logos = [
  "/assets/customers/1.jpg",
  "/assets/customers/2.jpg",
  "/assets/customers/3.jpg",
  "/assets/customers/4.jpg",
  "/assets/customers/5.jpg",
  "/assets/customers/6.jpg",
  "/assets/customers/7.jpg",
];

const Marquee: React.FC = () => {
  return (
    <div className="relative flex overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-12">
      <div className="flex w-full justify-center">
        {/* Wrapper with proper overflow handling */}
        <div className="relative w-full overflow-hidden">
          {/* First marquee container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="mx-10 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Customer ${index + 1}`} 
                  className="h-24 w-auto object-contain transition-all duration-300 hover:scale-110 filter grayscale hover:grayscale-0" 
                />
              </div>
            ))}
          </div>
          
          {/* Second marquee container with delay */}
          <div 
            className="absolute top-0 flex animate-marquee2 whitespace-nowrap" 
            style={{ animationDelay: '-12.5s' }}
          >
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="mx-10 flex items-center justify-center">
                <img 
                  src={logo} 
                  alt={`Customer ${index + 1}`} 
                  className="h-24 w-auto object-contain transition-all duration-300 hover:scale-110 filter grayscale hover:grayscale-0" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marquee;