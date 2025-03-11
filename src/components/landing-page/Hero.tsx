"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      className="pt-28 relative min-h-screen flex items-center justify-start text-left bg-cover bg-center px-10 lg:px-20"
      style={{
        backgroundImage: "url('/assets/telecom.jpg')",
      }}
    >
      {/* White Tint Overlay */}
      <motion.div
        className="absolute inset-0 bg-white bg-opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      ></motion.div>

      {/* Content (Aligned Left) */}
      <motion.div
        className="relative z-10 max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Intelligent Analytic Solutions for Telecom Networks
        </motion.h1>
        <motion.p
          className="mt-8 text-lg text-gray-700 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Empowering telecom networks with end-to-end infrastructure and AI-driven software solutions. Seamlessly install, maintain, and optimize network components for peak performance. Transform data into actionable insights for smarter, more efficient operations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 flex items-center justify-start gap-x-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <Link
            href="/routes/about-us"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}