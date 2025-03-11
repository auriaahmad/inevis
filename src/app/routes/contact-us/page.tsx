"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    workEmail: "",
    helpType: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="bg-gradient-to-br from-[#D7E5F8] to-white pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md"
      >
        {/* Contact Info Section */}
        <div className="mb-8">
          {/* <h2 className="text-3xl font-bold text-gray-900">Get in Touch</h2> */}
          <h6 className="text-3xl font-bold text-gray-900">
            Reach out to us anytime.
          </h6>
          <h6 className="text-3xl font-bold text-gray-900">
            We’d love to hear from you.
          </h6>
        </div>
        {/* Form Section */}
        <h2 className="text-3xl font-bold text-gray-900">Let’s talk</h2>
        <p className="text-gray-600 mt-2">
          Complete the form and an expert will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First name*"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md w-full bg-gray-50"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name*"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md w-full bg-gray-50"
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job title"
              value={formData.jobTitle}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full bg-gray-50"
            />
            <input
              type="text"
              name="companyName"
              placeholder="Company name"
              value={formData.companyName}
              onChange={handleChange}
              className="border border-gray-300 p-3 rounded-md w-full bg-gray-50"
            />
            <input
              type="email"
              name="workEmail"
              placeholder="Work email*"
              value={formData.workEmail}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md w-full bg-gray-50"
            />
            <select
              name="helpType"
              value={formData.helpType}
              onChange={handleChange}
              required
              className="border border-gray-300 p-3 rounded-md w-full bg-gray-50"
            >
              <option value="">— Please choose an option —</option>
              <option value="support">Support</option>
              <option value="sales">Sales Inquiry</option>
              <option value="partnership">Partnership</option>
            </select>
          </div>

          <textarea
            name="message"
            placeholder="Let us know more about what you're looking for*"
            value={formData.message}
            onChange={handleChange}
            required
            className="border border-gray-300 p-3 rounded-md w-full h-32 resize-none bg-gray-50"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-teal-400 text-white px-6 py-3 rounded-md w-full md:w-auto hover:bg-teal-500 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default ContactForm;