"use client";
import React from "react";
import { motion } from "framer-motion";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GrMapLocation } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

const services = [
  {
    icon: <GrMapLocation className="text-teal-400 text-5xl md:text-8xl" />,
    title: "Nearshore Excellence",
    description:
      "Optimize your telecom and IT operations with Inevis' Nearshore Services, where proximity meets performance. We bridge the gap between cost-efficiency and high-quality expertise, delivering seamless collaboration and tailored solutions to drive your business forward across Europe and Africa."
  },
  {
    icon: <LiaLaptopCodeSolid className="text-teal-400 text-5xl md:text-8xl" />,
    title: "IT Consulting",
    description:
      "Unlock your company's full potential with Inevis' IT Consulting Services—where expert guidance meets strategic execution. Our specialists help transform insights into scalable solutions, ensuring your telecom and data-driven operations stay ahead in an evolving digital landscape.",
  },
  {
    icon: <VscGraph className="text-teal-400 text-5xl md:text-8xl" />,
    title: "Crowd Testing",
    description:
      "Ensure flawless network and software performance with Inevis' Crowd Testing Services. By leveraging a diverse network of testers, we provide real-world feedback and insights to guarantee your applications, telecom systems, and digital platforms operate seamlessly under any conditions.",
  },
  {
    icon: <MdSecurity className="text-teal-400 text-5xl md:text-8xl" />,
    title: "Cybersecurity",
    description:
      "Protect your critical telecom infrastructure and data with Inevis' advanced cybersecurity solutions. Our expertise in network security, data protection, and risk mitigation ensures your business stays resilient against cyber threats, safeguarding your operations across Europe and Africa.",
  },
];

export default function ServiceSection() {
  return (
    <section className="lg:pt-10 px-6">
      <h2 className="text-5xl pb-20 text-center font-bold text-[#0B2A42] mb-4 font-montserrat">
        Our IT Services
      </h2>
      <div className="max-w-8xl mx-auto">
        {/* Horizontal line at the top */}
        <div className="w-full h-0.5 bg-gray-300 mb-12"></div>

        {/* All screen sizes */}
        <div className="flex flex-col space-y-12 gap">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <motion.div
                className="flex flex-col md:flex-row items-start md:items-center gap-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  {service.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold md:w-1/5 lg:w-1/6">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-sm md:text-base lg:text-lg text-gray-600 md:ml-4 md:w-3/5 lg:w-2/3">
                  {service.description}
                </p>
              </motion.div>
              
              {/* Horizontal line after each service except the last one */}
              <div className="w-full h-0.5 bg-gray-300"></div>
            </React.Fragment>
          ))}
        </div>
        
        {/* Horizontal line at the bottom */}
        {/* <div className="w-full h-0.5 bg-gray-300 mt-12"></div> */}
      </div>
    </section>
  );
}