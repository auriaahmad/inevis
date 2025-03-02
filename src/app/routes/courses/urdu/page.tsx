"use client";

import { useState } from "react";
const courses = [
  {
    id: "python-generative-ai",
    title: "Python for Generative AI - Beginner to Advance (Urdu/Hindi)",
    playlistId: "PL89tvecXAeKWeu_AvxslQ8XDCV8f9X66G",
  },
];

const Urdu = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter courses based on search input
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar (Collapsible on Mobile) */}
      <div
        className={`absolute md:relative bg-gray-900 text-white w-64 md:w-1/4 p-6 transition-all duration-300 ${
          isSidebarOpen ? "left-0" : "-left-64"
        } md:left-0 z-50`}
      >
        <button
          className="absolute top-4 right-4 md:hidden bg-gray-700 text-white px-3 py-1 rounded"
          onClick={() => setIsSidebarOpen(false)}
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Courses 📚</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Find a Course🔍 "
          className="w-full px-3 py-2 text-gray-900 rounded-md mb-4"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Course List */}
        <ul className="max-h-64 overflow-y-auto">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <li
                key={course.id}
                className={`cursor-pointer p-3 rounded-md mb-2 text-center ${
                  selectedPlaylist === course.playlistId ? "bg-gray-700" : "hover:bg-gray-800"
                }`}
                onClick={() => setSelectedPlaylist(course.playlistId)}
              >
                👉 {course.title}
              </li>
            ))
          ) : (
            <p className="text-center text-gray-400">No Course Found 😔</p>
          )}
        </ul>
      </div>

      {/* Sidebar Toggle Button (Visible on Mobile) */}
      <button
        className="md:hidden fixed top-4 left-4 bg-gray-900 text-white px-4 py-2 rounded shadow-md z-50"
        onClick={() => setIsSidebarOpen(true)}
      >
        ☰ Courses
      </button>

      {/* Main Content - Display Playlist or Message */}
      <div className="flex-grow p-6 flex justify-center items-center w-full md:w-3/4">
        {selectedPlaylist ? (
          <iframe
            width="100%"
            height="450"
            src={`https://www.youtube.com/embed/videoseries?list=${selectedPlaylist}`}
            title="YouTube Playlist"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-gray-600 text-lg font-semibold">📌 Please Select a course for given courses</p>
        )}
      </div>
    </div>
  );
};

export default Urdu;