"use client";

interface Course {
  id: string;
  name: string;
  playlistId: string;
}

const courses: Course[] = [
  { id: "1", name: "Urdu Course", playlistId: "PL89tvecXAeKWeu_AvxslQ8XDCV8f9X66G" },
  { id: "2", name: "English Course", playlistId: "YOUR_ENGLISH_PLAYLIST_ID" },
  { id: "3", name: "Math Course", playlistId: "YOUR_MATH_PLAYLIST_ID" },
];

const Sidebar = ({ onSelect }: { onSelect: (playlistId: string) => void }) => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-4">
      <h2 className="text-xl font-bold mb-4">Courses</h2>
      <ul className="space-y-2">
        {courses.map((course) => (
          <li
            key={course.id}
            onClick={() => onSelect(course.playlistId)}
            className="cursor-pointer p-2 hover:bg-gray-700 rounded-md transition"
          >
            {course.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
