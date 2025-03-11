import React from 'react';
import Hero from '@/components/landing-page/Hero';
// import Features from '@/components/landing-page/Features';
// import WhoWeAre from '@/components/landing-page/WhoWeAre';
import BuildingFuture from '@/components/landing-page/BuildingFuture';
import TransformData from '@/components/landing-page/TransformData';
// import Marquee from '@/components/marquee';
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
  
      {/* Smooth Gradient Transition */}
      {/* <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-32"></div>
      </div> */}
  
      <div className="bg-gradient-to-b from-[#D7E5F8] to-white">
        <BuildingFuture />
        <TransformData />
      </div>
      
      {/* <WhoWeAre/> */}
      {/* <Features /> */}
    </div>
  );
  
  
};

export default HomePage;