"use client";
import { motion } from "framer-motion";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | Inevis</title>
        <meta name="description" content="Privacy Policy of Inevis - Learn how we collect, use, and protect your personal data." />
      </Head>

      <section className="min-h-screen pt-44 bg-gradient-to-b from-sky-50 to-white py-20 px-6 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-lg mb-8">Last Updated: <strong>March 2025</strong></p>

          {/* Section 1 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600">We collect different types of data, including personal information, technical details, and third-party data.</p>
          </div>

          {/* Section 2 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600">We use your data to provide services, improve our offerings, communicate with you, and comply with legal requirements.</p>
          </div>

          {/* Section 3 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Data Security</h2>
            <p className="text-gray-600">We implement industry-standard security measures to protect your personal data from unauthorized access.</p>
          </div>

          {/* Section 4 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Cookies & Tracking</h2>
            <p className="text-gray-600">Our website uses cookies to enhance user experience. You can manage cookie settings through your browser.</p>
          </div>

          {/* Section 5 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Your Rights & Choices</h2>
            <p className="text-gray-600">Depending on your location, you have rights regarding your personal data, including access, correction, deletion, and more.</p>
          </div>

          {/* Section 6 */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Changes to this Privacy Policy</h2>
            <p className="text-gray-600">We may update this Privacy Policy from time to time. Please review this page for the latest information.</p>
          </div>

          {/* Contact */}
          <div className="mt-8 border-t pt-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">If you have any questions about this Privacy Policy, contact us at:</p>
            <ul className="mt-4 text-gray-700">
              <li><strong>Email:</strong> info@inevis.com</li>
              {/* <li><strong>Phone:</strong> </li> */}
              <li><strong>Address:</strong> Westendstraße 16-22 <br />
              60325 Frankfurt am Main</li>
            </ul>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default PrivacyPolicy;