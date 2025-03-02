import React from 'react';
import Hero from '@/components/Hero';
// import Navbar from '@/components/Navbar';
// import Header from "../components/layout/Header"
// import Footer from '@/components/layout/Footer';
import Features from '@/components/Features';
import WhoWeAre from '@/components/WhoWeAre';
const HomePage: React.FC = () => {
  return (
    <div>
      {/* <Header /> */}
      <Hero />
      <WhoWeAre/>
      {/* <Features /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;