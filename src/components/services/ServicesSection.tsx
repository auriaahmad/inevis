"use client";
import React from "react";
import { motion } from "framer-motion";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GrMapLocation } from "react-icons/gr";
import { MdSecurity } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

const services = [
  {
    icon: <LiaLaptopCodeSolid className="text-teal-400 text-5xl md:text-8xl" />,
    title: "Seamless IT Consulting",
    description:
      "At Inevis, we provide top-notch IT consulting services to help you navigate through the ever-evolving technology landscape. Our team of experts will analyze your business needs and recommend tailored solutions to drive growth and efficiency.",
  },
  {
    icon: <GrMapLocation className="text-teal-400 text-5xl md:text-8xl" />,
    title: "Nearshore Excellence",
    description:
      "With our nearshore services, you can tap into a pool of highly skilled professionals located in Portugal. Benefit from cost-effective and efficient collaboration while maintaining close communication and cultural alignment with your team.",
  },
  {
    icon: <MdSecurity className="text-teal-400 text-5xl md:text-8xl" />,
    title: "Cutting-Edge Cybersecurity Solutions",
    description:
      "Your data security is our priority. We offer state-of-the-art cybersecurity solutions to protect your organization from potential threats. Our robust cybersecurity measures ensure that your sensitive information remains safe and secure.",
  },
  {
    icon: <VscGraph className="text-teal-400 text-5xl md:text-8xl" />,
    title: "Crowd Testing for Reliable Results",
    description:
      "Ensure the quality and reliability of your software applications with our crowd testing services. By leveraging a diverse pool of testers, we provide comprehensive testing coverage to identify bugs, improve user experience, and deliver flawless applications.",
  },
];

export default function ServiceSection() {
  return (
    <section className="pt-16 p-5 px-6">
      <div className="max-w-8xl mx-auto">

        {/* Desktop */}
        <div className="hidden lg:flex lg:flex-col lg:space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-row items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="w-1/6 flex justify-center">{service.icon}</div>
              <div className="w-5/6 pl-8">
                <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 text-lg mb-8">{service.description}</p>
                {index !== services.length - 1 && (
                  <div className="w-full h-px bg-gray-200 mt-8"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tablet */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12 lg:hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-start mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
              {index !== services.length - 1 && (
                <div className="w-full h-px bg-gray-200 mt-8"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Mobile */}
        <div className="grid grid-cols-1 gap-y-8 md:hidden">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="flex items-start mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold ml-4">{service.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{service.description}</p>
              {index !== services.length - 1 && (
                <div className="w-full h-px bg-gray-200 mt-8"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}