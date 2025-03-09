"use client"
import { useState } from "react";
import { JobType } from "@/type";

interface JobCardProps {
  job: JobType;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-blue-700">{job.title}</h3>
        <div className="flex items-center mb-2 text-gray-600">
          📍 <span className="ml-2">{job.location}</span>
        </div>
        <div className="flex items-center mb-4 text-gray-600">
          ⏳ <span className="ml-2">{job.type}</span>
        </div>

        {/* Expand/Collapse Button */}
        <div className="flex items-center">
          <button
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
          >
            {expanded ? "Show less" : "Show more"}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ml-1 transition-transform duration-300 ${
                expanded ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Expandable Section */}
        <div
          className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
            expanded ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="font-bold text-gray-800 mb-2">Responsibilities:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.responsibilities.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">Requirements:</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {job.requirements.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Apply Now Link */}
            <p>
              Apply for this position at:{" "}
              <a
                className="text-blue-600 underline"
                href="mailto:careers@inevis.com"
              >
                careers@inevis.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};