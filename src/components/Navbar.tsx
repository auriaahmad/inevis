"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavDropdown from "./NavDropdown"; // Import the dropdown component

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute lg:place-content-center top-0 left-0 lg:w-full sm:w-full right-0 bg-transparent z-10 border-t border-b border-gray-400 box-shadow-neon-glow">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        {/* Left Section: Logo */}
        <div className="flex items-center space-x-3">
          <Image
            src="/logo/logo.png"
            width={50}
            height={50}
            alt="Auctos AI Logo"
          />
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Right Section: Tabs & Dropdown */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-full right-0 md:w-auto md:static md:flex md:items-center bg-glass backdrop-blur-lg divide-x divide-gray-400`}
        >
          <Link
            href="/"
            className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-charcoal-gray transition-all duration-300"
          >
            Home
          </Link>

          {/* courses Dropdown */}
          <NavDropdown
            title="Courses"
            options={[
              // { label: "In English", href: "/routes/courses/english" },
              { label: "In Urdu", href: "/routes/courses/urdu" },
            ]}
          />

          <Link
            href="/routes/portfolio"
            className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-charcoal-gray transition-all duration-300"
          >
            Portfolio
          </Link>

          <Link
            href="/routes/about-us"
            className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-charcoal-gray transition-all duration-300"
          >
            About Us
          </Link>

          <Link
            href="/routes/careers"
            className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-charcoal-gray transition-all duration-300"
          >
            Careers
          </Link>

          <Link
            href="/routes/contact-us"
            className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-charcoal-gray transition-all duration-300"
          >
            Contact Us
          </Link>

          <Link
            href="/routes/blog"
            className="block md:inline-block px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-charcoal-gray transition-all duration-300"
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;