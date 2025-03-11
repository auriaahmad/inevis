"use client";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 border-t py-8 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center text-center md:text-left">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/logo/logoNav.png"
            alt="inevis Logo"
            width={150}
            height={50}
          />
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold text-gray-900">inevis GmbH</h4>
          <p className="text-gray-600 text-sm">Westendstraße 16-22</p>
          <p className="text-gray-600 text-sm">60325 Frankfurt am Main</p>
        </div>

        {/* Contact Info */}
        <div>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <Mail className="text-blue-600 w-5 h-5" />
            <Link href="mailto:info@inevis.de" className="text-blue-600 text-sm hover:underline">
              info@inevis.de
            </Link>
          </div>
        </div>

        {/* Contact Us Button */}
        <div className="text-center md:text-left">
          <Link href="/routes/contact-us">
            <button className="mt-2 px-6 py-2 bg-teal-500 text-white font-semibold rounded-full shadow-md hover:bg-teal-600 transition">
              Contact Us
            </button>
          </Link>
        </div>

      </div>

      {/* Bottom Section: Responsive Layout */}
      <div className="border-t mt-6 pt-4 text-sm text-gray-600">
        {/* Center content on small screens */}
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-center md:text-left">&copy; Copyright inevis 2025</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2 md:mt-0">
            <Link href="/routes/about-us" className="hover:underline">ABOUT US</Link>
            <Link href="/routes/services" className="hover:underline">SERVICES</Link>
            <Link href="/routes/contact-us" className="hover:underline">CONTACT US</Link>
            <Link href="/routes/impressum" className="hover:underline">IMPRINT</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;