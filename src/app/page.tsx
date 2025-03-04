import React from 'react';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import WhoWeAre from '@/components/WhoWeAre';
const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <WhoWeAre/>
      <Features />
    </div>
  );
};

export default HomePage;