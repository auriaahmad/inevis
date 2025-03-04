"use client"

import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const initialFaqs: FAQ[] = [
  {
    question: "What's the best thing about Switzerland?",
    answer: "I’m not entirely sure, but the flag is a big plus!",
  },
  {
    question: "How do you make holy water?",
    answer: "You boil the hell out of it.",
  },
  {
    question: "What do you call someone with no body and no nose?",
    answer: "Nobody knows.",
  },
  {
    question: "Why do you never see elephants hiding in trees?",
    answer: "Because they’re really good at it.",
  },
  {
    question: "Why can't you hear a pterodactyl go to the bathroom?",
    answer: "Because the ‘P’ is silent.",
  },
  {
    question: "Why did the invisible man turn down the job offer?",
    answer: "He just couldn’t see himself doing it.",
  },
];

const FAQsPage: React.FC = () => {
  // Search term from the input
  const [searchTerm, setSearchTerm] = useState("");
  // Track which FAQ is open; false means collapsed
  const [openIndices, setOpenIndices] = useState<boolean[]>(
    Array(initialFaqs.length).fill(false)
  );

  // Filter the FAQs based on the search term
  const filteredFaqs = initialFaqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle FAQ open/closed by index
  const toggleFAQ = (index: number) => {
    setOpenIndices((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 pt-24 text-gray-800">
      <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search FAQs..."
          className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* FAQs List */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            // We need the original index for toggling
            // so find the original in the initialFaqs array
            const originalIndex = initialFaqs.indexOf(faq);

            return (
              <div
                key={faq.question}
                className="border-b border-gray-200 pb-4 cursor-pointer"
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => toggleFAQ(originalIndex)}
                >
                  <h2 className="text-lg font-medium">
                    {faq.question}
                  </h2>
                  <span className="text-2xl font-bold">
                    {openIndices[originalIndex] ? "−" : "+"}
                  </span>
                </div>
                {openIndices[originalIndex] && (
                  <p className="mt-2 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })
        ) : (
          <p>No FAQs found for your search.</p>
        )}
      </div>
    </div>
  );
};

export default FAQsPage;
