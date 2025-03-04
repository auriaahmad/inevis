import Link from "next/link";
import { FaFacebookF, FaInstagram, FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:flex lg:items-center lg:justify-between">
        {/* Left Section: Branding & Social Media */}
        <div className="lg:w-1/3">
          <div className="flex items-center space-x-2">
            <span className="text-indigo-400 text-3xl font-bold">⚡</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Making the world a better place through constructing elegant hierarchies.
          </p>

          {/* Social Icons */}
          <div className="mt-4 flex space-x-4">
            <Link href="/routes/" className="hover:text-white">
              <FaFacebookF size={20} />
            </Link>
            <Link href="/routes/" className="hover:text-white">
              <FaInstagram size={20} />
            </Link>
            <Link href="/routes/" className="hover:text-white">
              <FaXTwitter size={20} />
            </Link>
            <Link href="/routes/" className="hover:text-white">
              <FaGithub size={20} />
            </Link>
            <Link href="/routes/" className="hover:text-white">
              <FaYoutube size={20} />
            </Link>
          </div>
        </div>

        {/* Right Section: Navigation */}
        <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:mt-0 lg:w-2/3">
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/routes/about-us" className="hover:text-white">About Us</Link></li>
              <li><Link href="/routes/become-partner" className="hover:text-white">Become a Partner</Link></li>
              <li><Link href="/routes/contact-us" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/routes/terms-of-use" className="hover:text-white">Terms of Use</Link></li>
              <li><Link href="/routes/general-terms" className="hover:text-white">General Terms & Conditions</Link></li>
              <li><Link href="/routes/cancellation-policy" className="hover:text-white">Cancellation Policy</Link></li>
              <li><Link href="/routes/data-protection" className="hover:text-white">Data Protection</Link></li>
              <li><Link href="/routes/imprint" className="hover:text-white">Imprint</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/routes/help-center" className="hover:text-white">Help Center</Link></li>
              <li><Link href="/routes/faqs" className="hover:text-white">FAQs</Link></li>
              <li><Link href="/routes/contact-us" className="hover:text-white">Contact Support</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-700 py-6 text-center text-xs">
        <p>&copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}