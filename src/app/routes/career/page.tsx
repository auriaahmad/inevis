"use client";

import { useState, useEffect } from "react";
import { JobType } from "@/app/types";
import { motion, useScroll, useAnimation } from "framer-motion";

const jobs: JobType[] = [
  {
    title: "Software Developer (Data Visualization & Monitoring)",
    location: "Frankfurt, Germany / Remote",
    type: "Full-time",
    responsibilities: [
      "Develop and maintain data monitoring and visualization software for telecom networks.",
      "Work with real-time data processing and analytics to enhance software capabilities.",
      "Build intuitive dashboards and reporting tools for performance tracking.",
      "Collaborate with network engineers and data analysts to optimize software solutions.",
      "Ensure scalability and security in software applications.",
    ],
    requirements: [
      "Bachelor's/master's in computer science, Software Engineering, or related field.",
      "Experience with Python, JavaScript (React), SQL, and cloud platforms.",
      "Knowledge of data visualization tools like Power BI, Grafana, or Tableau.",
      "Strong problem-solving skills and ability to work in an agile environment.",
      "Strong German and English language skills",
    ],
  },
  {
    title: "Network Engineer (Telecom Infrastructure & Monitoring)",
    location: "Frankfurt, Germany / Travel Across Europe & Africa",
    type: "Full-time",
    responsibilities: [
      "Install, maintain, and optimize telecommunication network hardware.",
      "Configure and troubleshoot network performance monitoring systems.",
      "Ensure seamless integration of hardware and software solutions.",
      "Conduct site surveys and technical assessments for new projects.",
      "Work with clients to ensure network reliability and performance.",
    ],
    requirements: [
      "Bachelor's degree in Telecommunications, Electrical Engineering, or IT.",
      "Experience with network configuration, routing, and switching.",
      "Familiarity with 5G, LTE, and fiber-optic network technologies.",
      "Ability to travel for on-site installations and maintenance.",
      "Strong English language skills",
    ],
  },
  {
    title: "Project Manager (Telecom Solutions Deployment)",
    location: "Frankfurt, Germany / Hybrid",
    type: "Full-time",
    responsibilities: [
      "Manage end-to-end telecom infrastructure and software deployment projects.",
      "Coordinate with engineering, software, and operations teams to ensure project success.",
      "Define project scope, timelines, and deliverables.",
      "Monitor progress, identify risks, and ensure compliance with telecom standards.",
      "Act as the primary contact for clients and stakeholders.",
    ],
    requirements: [
      "Bachelor's/master's in engineering, Business, or Project Management.",
      "Experience in telecom project execution.",
      "Strong German and English language skills",
      "Certification in PMP, PRINCE2, or Agile methodologies is a plus.",
    ],
  },
];

export default function CareerPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openJobIndex, setOpenJobIndex] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const controls = useAnimation();
  
  // Filter jobs based on search query
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Toggle job details
  const toggleJob = (index: number) => {
    setOpenJobIndex(openJobIndex === index ? null : index);
  };
  
  // Animate elements as user scrolls
  useEffect(() => {
    const updateScroll = () => {
      if (scrollY.get() > 100) {
        controls.start("visible");
      }
    };
    
    const unsubscribe = scrollY.onChange(updateScroll);
    return () => unsubscribe();
  }, [scrollY, controls]);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      }
    }
  };
  
  const searchVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5, 
        delay: 0.2,
        ease: "easeOut" 
      }
    }
  };
  
  const jobItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        delay: 0.1 * i,
        ease: "easeOut" 
      }
    })
  };
  
  const ctaSectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.7, 
        ease: "easeOut" 
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-200 to-white pt-32 px-4">
      {/* Header Section */}
      <motion.section 
        className="bg-teal-400 text-white py-16 text-center"
        initial="hidden"
        animate="visible"
        variants={headerVariants}
      >
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Career at Inevis
          </h1>
          <p className="text-lg md:text-xl">
            Join our team and build the future of telecommunications.
          </p>
        </div>
      </motion.section>

      {/* Search Bar */}
      <div className="container mx-auto px-4 mt-8">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={searchVariants}
        >
          <input
            type="text"
            placeholder="Search job titles..."
            className="w-full max-w-lg px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </motion.div>
      </div>

      {/* Job Listings */}
      <section className="container mx-auto px-4 py-12">
        <motion.h2 
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We are hiring
        </motion.h2>

        {filteredJobs.length === 0 ? (
          <motion.p 
            className="text-center text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No jobs found.
          </motion.p>
        ) : (
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div 
                key={index} 
                className="border rounded-lg shadow-md p-6 bg-white"
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={jobItemVariants}
              >
                {/* Job Title */}
                <button
                  className="w-full text-left flex justify-between items-center text-lg font-semibold text-teal-700"
                  onClick={() => toggleJob(index)}
                >
                  {job.title}
                  <motion.span
                    animate={{ rotate: openJobIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    ▼
                  </motion.span>
                </button>

                {/* Job Details (Expandable Section) */}
                {openJobIndex === index && (
                  <motion.div 
                    className="mt-4 space-y-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <p className="text-gray-600">
                      <strong>Location:</strong> {job.location}
                    </p>
                    <p className="text-gray-600">
                      <strong>Type:</strong> {job.type}
                    </p>

                    <div>
                      <h3 className="font-semibold text-gray-700">Responsibilities:</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {job.responsibilities.map((resp, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                          >
                            {resp}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-gray-700">Requirements:</h3>
                      <ul className="list-disc list-inside text-gray-600">
                        {job.requirements.map((req, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                          >
                            {req}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <motion.div 
                      className="pt-5"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <a href="mailto:careers@inevis.com">
                        <motion.button 
                          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Apply Now
                        </motion.button>
                      </a>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Apply Section */}
      <motion.section 
        className="bg-gradient-to-r from-sky-200 to-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={ctaSectionVariants}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to join our team?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We&apos;re looking for talented individuals who are passionate about innovation in telecommunications.
          </p>
          <a href="mailto:careers@inevis.com">
            <motion.button 
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
            </motion.button>
          </a>
        </div>
      </motion.section>
    </div>
  );
}