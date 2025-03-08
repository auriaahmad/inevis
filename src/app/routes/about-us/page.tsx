"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const AboutUs = () => {
  const imageSources = [
    "/assets/customer.jpg",
    "/assets/experience.jpg",
    "/assets/operators.jpg",
  ];

  return (
    <section className="relative text-justify bg-gradient-to-r from-[#D7E5F8] to-white min-h-screen flex items-center">
      <motion.div
        className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Content */}
        <div>
          <motion.h2
            className="text-4xl font-bold text-gray-900 pb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our business - your success
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Founded in 2010 and headquartered in Frankfurt, Germany, we are a leading provider of end-to-end hardware and software solutions for telecom networks across Europe and Africa. With a commitment to innovation and excellence, we specialize in seamless hardware installation, site maintenance, and AI-driven software solutions that empower businesses to visualize, analyze, and optimize their data. Our expertise ensures robust, future-ready infrastructure that drives connectivity and digital transformation. Partner with us for intelligent, scalable, and high-performance solutions tailored to your needs.
          </motion.p>

          {/* <motion.p
            className="text-lg text-gray-600 leading-relaxed mb-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            More importantly, however, it is crucial to us that you always feel supported in an optimal way. At our headquarters in Frankfurt and our branch office in Cologne, we constantly develop customized distribution models and promotion campaigns for our partners. Because our goal is your success.
          </motion.p> */}

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Talk to us. Trust <span className="text-teal-500 font-bold text-xl">&ldquo;inevis&rdquo;</span> as a competent partner at your side. It&apos;s worth it!
          </motion.p>

          {/* Contact Us Button */}
          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link
              href="/routes/contact-us"
              className="inline-block rounded-md bg-teal-500 px-6 py-3 text-white text-lg font-semibold shadow-md transition-transform transform hover:scale-105 hover:bg-teal-600"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Right Image Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {imageSources.map((src, index) => (
            <motion.div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${
                index === 0 ? "col-span-2 row-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                height={500}
                width={500}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutUs;