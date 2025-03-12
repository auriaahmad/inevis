"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const content = [
  {
    title: "Building the Future of Telecom: Robust, Reliable, and Ready",
    text: "Stay ahead in the telecom industry with cutting-edge, end-to-end hardware solutions designed to power your network's growth. From seamless hardware installation and site maintenance to specialized mobile radio solutions, we ensure your infrastructure is built to perform.",
    image: "/assets/landingPage/1.jpg",
  },
  {
    title: "Expert Mobile Radio Solutions",
    text: "Our expertise includes installation of mobile radio towers, mobile radio containers, and expert consulting to optimize your network.",
    image: "/assets/landingPage/2.jpg",
  },
  {
    title: "Seamless Connectivity, Future-Ready",
    text: "Whether expanding your coverage or upgrading existing sites, we provide future-ready, high-performance solutions, so you can focus on delivering seamless, uninterrupted connectivity to your customers.",
    image: "/assets/landingPage/4.jpg",
  },
];

const BuildingFuture = () => {
  return (
    <div className="container mx-auto px-6 py-16">
      {content.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src={item.image}
              alt={item.title}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-[2px] bg-gray-300 h-60 mx-6"></div> {/* Vertical line */}
          <div className="block md:hidden w-full border-t-2 border-gray-300 my-6"></div> {/* Horizontal line */}

          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#0B2A42] mb-4 font-montserrat">
              {item.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">{item.text}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BuildingFuture;