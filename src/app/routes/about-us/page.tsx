"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

const AboutUs = () => {
  const imageSources = [
    "/assets/customer.jpg",
    "/assets/experience.jpg",
    "/assets/operators.jpg"
  ];

  return (
    <section className="relative text-justify bg-gradient-to-r from-[#D7E5F8] to-white ">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-screen">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 pb-5">
            Our business - your success
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            Since 2010 <span className='text-teal-400 font-black text-xl'>&apos;inevis&apos;</span> brokers mobile communications services to retailers. As a wholesaler, we can yield a considerable amount of buying power, thus being able to offer excellent conditions to our business partners. Our extensive range of products enables you to supply exactly the kind of hardware your customers desire.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-4">
            More importantly, however, it is crucial to us that you always feel supported in an optimal way. At our headquarters in Frankfurt and our branch office in Cologne, we constantly develop customized distribution models and promotion campaigns for our partners. Because our goal is your success.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Talk to us. Trust <span className='text-teal-500 font-bold text-xl'>&ldquo;inevis&rdquo;</span> as a competent partner at your side. It&quot;s worth it!
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          {imageSources.map((src, index) => (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 ${index === 0 ? "col-span-2 row-span-2" : ""
                }`}
            >
              <Image
                src={src}
                alt={`Image ${index + 1}`}
                height={500}
                width={500}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <section className="bg-gradient-to-l from-[#D7E5F8] to-white min-h-screen flex flex-col justify-center items-center text-center px-6 p-36">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Company Description
        </motion.h2>
        <p className="text-lg text-gray-600 mb-2">Join us!</p>
        <p className="text-lg text-gray-600 max-w-4xl leading-relaxed mb-6">
        <span className='text-teal-500 font-bold text-xl'>&ldquo;inevis&rdquo;</span> is a pioneering telecom software company dedicated to enhancing network performance, automation, and real-time analytics. We develop advanced solutions that enable telecom operators and service providers to optimize their networks, improve service quality, and drive operational efficiency. Our expertise spans across network monitoring, AI-powered analytics, fraud detection, and end-to-end automation, helping businesses stay ahead in the fast-evolving digital landscape.
        </p>
        <a
          href="/routes/contact-us"
          className="bg-teal-400 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-teal-500 transition duration-300"
        >
          Contact Us
        </a>
      </section>
      {/* <div className="container mx-auto px-6 lg:px-20 mt-20 pb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-10 text-center">Our team</h2>
        <p className="text-lg text-gray-600 text-center mb-10">
          We&apos;re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="text-center">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-lg mb-4">
                <Image
                  src={placeholder}
                  alt={`Team member ${index + 1}`}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Member Name</h3>
              <p className="text-sm text-gray-600">Position</p>
            </div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default AboutUs;