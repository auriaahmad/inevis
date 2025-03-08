"use client";

import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already accepted cookies
    const consentGiven = localStorage.getItem("cookieConsent");
    if (!consentGiven) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true"); // Save acceptance in localStorage
    setIsVisible(false);
  };

  return (
    isVisible && (
      <div className="fixed bottom-5 left-5 right-5 md:left-auto md:right-10 bg-white shadow-lg p-4 rounded-xl flex flex-col md:flex-row items-center justify-between max-w-xl border border-gray-300">
        <p className="text-sm text-gray-700">
          We use cookies to enhance your experience. By continuing, you agree to our{" "}
          <a href="/routes/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </a>
          .
        </p>
        <button
          onClick={handleAccept}
          className="mt-3 md:mt-0 bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md text-sm font-semibold transition"
        >
          Accept
        </button>
      </div>
    )
  );
}
