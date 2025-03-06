"use client";

import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function ContactForm() {
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="isolate bg-gradient-to-br from-[#D7E5F8] to-white px-4 sm:px-6 lg:px-8 py-24 sm:py-32 flex justify-center">
      <div className="w-full max-w-4xl lg:w-3/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="bg-gradient-to-tl from-[#D7E5F8] to-white p-8 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Get in touch
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Do you have any questions? Talk to us!

            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-600">📍 Hohenstaufenring 62, 50674 Köln, Germany</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600">📞 +1 (555) 234-5678</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-600">✉ hello@example.com</span>
              </div>
              <iframe
                className="w-full h-64 rounded-lg shadow-lg"
                src="https://www.google.com/maps?q=Hohenstaufenring+62,+50674+K%C3%B6ln,+Germany&output=embed"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className="border-l border-gray-300 pl-10 flex items-center">
            <form onSubmit={handleSubmit} className="space-y-6 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-gray-900">
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-gray-900">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-900">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-2 w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                />
              </div>
              <div className="flex items-center gap-x-4">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={`${agreed ? "bg-teal-400" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
                >
                  <span className="sr-only">Agree to terms</span>
                  <span
                    className={`${agreed ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </Switch>
                <span className="text-sm text-gray-600">
                  By selecting this, you agree to our
                  <a href="/routes/data-protection" className="font-semibold text-indigo-600">&nbsp;privacy policy.</a>
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-teal-400 px-3.5 py-2.5 text-white rounded-md shadow hover:bg-teal-500 focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}