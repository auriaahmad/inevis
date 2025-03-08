"use client";

import { motion } from "framer-motion";
import { Line, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, ComposedChart, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", valueA: 30, valueB: 10 },
  { name: "Feb", valueA: 50, valueB: 60 },
  { name: "Mar", valueA: 80, valueB: 90 },
  { name: "Apr", valueA: 60, valueB: 30 },
  { name: "May", valueA: 90, valueB: 140 },
  { name: "Jun", valueA: 120, valueB: 50 },
];

const TransformData = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto px-6 py-16 max-w-6xl"
    >
      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#0B2A42] text-center mb-12 font-montserrat">
        Transform Your Data with Cutting-Edge Analytics
      </h2>
       {/* Text Content */}
       <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left max-w-3xl mx-auto mb-12"
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Unlock the full potential of your telecom business with our comprehensive software 
          solutions designed to visualize, analyze, and optimize your data effortlessly. 
          We deliver intelligent, AI-powered software architecture that enables seamless 
          data processing and insightful decision-making.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Whether you&apos;re a telecom giant or a growing enterprise, our end-to-end solutions 
          ensure efficiency, scalability, and a competitive edge—helping you turn data into 
          actionable intelligence for smarter business outcomes.
        </p>
      </motion.div>

      {/* Combined Graph (Bar + Line) */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full bg-gradient-to-br from-blue-50 to-white shadow-md rounded-lg p-6 mb-12"
      >
        <h3 className="text-xl font-semibold text-[#0B2A42] mb-4 text-center">Analytics Overview</h3>

        <ResponsiveContainer width="100%" height={300}>
          <ComposedChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E7FF" />
            <XAxis dataKey="name" tick={{ fill: "#6B7280" }} />
            <YAxis tick={{ fill: "#6B7280" }} />
            <Tooltip />
            <Legend />

            {/* Soft pastel Bar Chart */}
            <Bar dataKey="valueA" fill="#A5D8FF" barSize={40} radius={[8, 8, 0, 0]} />
            <Bar dataKey="valueB" fill="#FFC6A5" barSize={40} radius={[8, 8, 0, 0]} />

            {/* Soft gradient Line Chart */}
            <Line type="monotone" dataKey="valueA" stroke="#4A90E2" strokeWidth={3} dot={{ r: 5, fill: "#4A90E2" }} />
            <Line type="monotone" dataKey="valueB" stroke="#FF6B6B" strokeWidth={3} dot={{ r: 5, fill: "#FF6B6B" }} />
          </ComposedChart>
        </ResponsiveContainer>
      </motion.div>

     
    </motion.div>
  );
};

export default TransformData;