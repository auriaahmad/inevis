"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Marquee from "@/components/marquee";
// import ServiceSection from "@/components/services/ServicesSection";
// import WhyChooseInevis from "@/components/services/WhyChooseInevis";

const Services = () => {
  const [activeTab, setActiveTab] = useState("installation");

  return (
    <section className="min-h-screen pt-44 bg-gradient-to-l from-white to-sky-100">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Title */}
        <motion.h2
          className="text-6xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h2>

        {/* <ServiceSection />
        
        <div className="mb-20 w-full h-px bg-gray-300 mt-8"></div>
        <WhyChooseInevis />
        <div className="mb-20 w-full h-px bg-gray-300 mt-8"></div> */}

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-8">
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === "installation"
                ? "bg-teal-400 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => setActiveTab("installation")}
          >
            Telecom Installation
          </button>
          <button
            className={`px-6 py-2 rounded-full font-semibold transition ${activeTab === "invision"
                ? "bg-teal-400 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            onClick={() => setActiveTab("invision")}
          >
            InVision Monitoring
          </button>
        </div>

        {/* Content */}
        {activeTab === "installation" ? (
          <motion.div
            className="space-y-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section 1: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-5">
                  Seamless Telecom Installation
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Inevis, we specialize in comprehensive telecom infrastructure installation, ensuring seamless and future-ready network deployment. Our expertise spans the entire installation process, from site planning and structural design to the construction and setup of mobile radio towers, containers, and transmission networks. With expertise in multi-vendor network deployment, our fully trained installation field teams operate across Europe, delivering high-quality services tailored to diverse network requirements.
                </p>
              </div>
              <motion.div
                className="overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/assets/services/1.jpg" alt="Telecom Installation" width={600} height={400} className="w-full object-cover" />
              </motion.div>
            </div>

            {/* Section 2: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                className="overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/assets/services/4.jpg" alt="Network Deployment" width={600} height={400} className="w-full object-cover" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-5">
                  Multi-Vendor Network Deployment
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With a skilled field force capable of deploying multi-vendor solutions, we guarantee the highest industry standards in network performance, scalability, and reliability. Partner with Inevis for a robust, expertly deployed, and future-proof telecom infrastructure—built to support the demands of an ever-evolving digital world.
                </p>
              </div>
            </div>

            {/* Section 3: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-5">
                  Cutting-Edge Antenna Installations
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We handle antenna installation, commissioning, and integration of all mobile technologies, along with system rollouts, swaps, and upgrades to keep networks at peak performance. Our team also excels in turnkey WLAN and in-building mobile service installations, ensuring optimal coverage in both outdoor and indoor environments. Additionally, we manage the dismantling, reconstruction, and responsible disposal of mobile sites, facilitating smooth network transitions and modernizations.
                </p>
              </div>
              <motion.div
                className="overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/assets/services/5.jpg" alt="Antenna Installation" width={600} height={400} className="w-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="space-y-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section 1: Image Left, Text Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div
                className="overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/assets/services/2.jpg" alt="InVision Monitoring" width={600} height={400} className="w-full object-cover" />
              </motion.div>
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-5">
                  InVision – Smart Data Monitoring
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  InVision is a cutting-edge software solution developed by Inevis, designed to help telecommunication businesses seamlessly monitor, visualize, and analyze their data through Network probes. Built for telecom companies and enterprises, InVision transforms complex datasets into real-time, actionable insights, ensuring improved network performance, operational efficiency, and resource optimization.
                </p>
              </div>
            </div>

            {/* Section 2: Text Left, Image Right */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-3xl font-semibold text-gray-900 mb-5">
                  Data-Driven Decision Making
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  With advanced automation, intuitive dashboards, and built-in analytical tools, InVision empowers businesses across Europe and Africa to make faster, smarter, and data-driven decisions. Whether it’s monitoring telecom infrastructure, optimizing network resources, or enhancing digital operations, InVision is your trusted end-to-end data intelligence partner for a more connected and efficient future.
                </p>
              </div>
              <motion.div
                className="overflow-hidden rounded-lg shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/assets/services/3.jpg" alt="Network Probes" width={600} height={400} className="w-full object-cover" />
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </section>

  );
};

export default Services;