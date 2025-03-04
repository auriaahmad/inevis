import { FaClock, FaCog, FaThumbsUp, FaChartLine } from "react-icons/fa";

const features = [
  {
    icon: <FaClock className="text-white text-4xl" />,
    title: "FAST",
    description: "We won't keep you waiting and will pay you on time.",
  },
  {
    icon: <FaCog className="text-white text-4xl" />,
    title: "FLEXIBLE",
    description: "What you need, when you need it.",
  },
  {
    icon: <FaThumbsUp className="text-white text-4xl" />,
    title: "FAIR",
    description: "Communication is our business. Trust is our driving force.",
  },
  {
    icon: <FaChartLine className="text-white text-4xl" />,
    title: "COMPETENT",
    description: "All networks, all providers. And always optimally supported.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#D7E5F8] to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose Us?
        </h2>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <div className="bg-teal-500 flex items-center justify-center p-6">
                {feature.icon}
              </div>
              <div className="p-6 bg-white text-center">
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}