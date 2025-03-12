import React from 'react';
import Hero from '@/components/landing-page/Hero';
import BuildingFuture from '@/components/landing-page/BuildingFuture';
import TransformData from '@/components/landing-page/TransformData';
import ServiceSection from '@/components/services/ServicesSection';
import WhyChooseInevis from '@/components/services/WhyChooseInevis';
import Marquee from '@/components/marquee';
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className="bg-gradient-to-b from-[#D7E5F8] to-white">
        <BuildingFuture />
        <div className='lg:px-24'>
        <ServiceSection />
        </div>
        <h2 className="text-5xl py-20 text-center font-bold text-[#0B2A42] mb-4 font-montserrat">
          Trusted by Industry Leaders
        </h2>
        <Marquee />
        <WhyChooseInevis />

        <TransformData />
      </div>
    </div>
  );


};

export default HomePage;