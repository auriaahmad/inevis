"use client";

import { useState } from "react";
import Link from "next/link";

interface NavDropdownProps {
  title: string;
  options: { label: string; href: string }[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ title, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Button */}
      <button className="px-4 py-2 text-gray-300 hover:text-white hover:bg-primary-charcoal-gray transition">
        {title}
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-48 bg-white border rounded-lg shadow-lg z-50">
          {options.map((option, index) => (
            <Link
              key={index}
              href={option.href}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition"
            >
              {option.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavDropdown;