// Marquee.tsx
import React from "react";
import Image from "next/image";

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
    <div className="relative flex overflow-hidden bg-gradient-to-r from-gray-50 to-gray-100 py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="flex w-full justify-center">
        {/* Wrapper with responsive height and proper overflow handling */}
        <div className="relative w-full overflow-hidden h-16 sm:h-20 md:h-24 lg:h-28">
          {/* First marquee container */}
          <div className="flex animate-marquee whitespace-nowrap">
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="mx-3 sm:mx-5 md:mx-8 lg:mx-10 flex items-center justify-center">
                <Image 
                  src={logo}
                  height={200}
                  width={200} 
                  alt={`Customer ${index + 1}`} 
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300 hover:scale-110 filter grayscale hover:grayscale-0" 
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
              <div key={`logo-2-${index}`} className="mx-3 sm:mx-5 md:mx-8 lg:mx-10 flex items-center justify-center">
                <Image 
                  src={logo} 
                  width={200}
                  height={200}
                  alt={`Customer ${index + 1}`} 
                  className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto object-contain transition-all duration-300 hover:scale-110 filter grayscale hover:grayscale-0" 
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