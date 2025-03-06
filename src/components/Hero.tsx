import Link from "next/link";

export default function Hero() {
  return (
    <div
      className="relative shadow-md min-h-screen flex items-center justify-start text-left bg-cover bg-center px-10 lg:px-20"
      style={{ backgroundImage: "url('/assets/telecom.jpg')" }}
    >
      {/* White Tint Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>

      {/* Content (Aligned Left) */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          Intelligent Software Solutions for Telecom Networks
        </h1>
        <p className="mt-8 text-lg text-gray-700 sm:text-xl">
          <span className='text-teal-500 font-bold text-xl'>&ldquo;inevis&rdquo;</span> is a pioneering telecom software company dedicated to enhancing network performance, automation, and real-time analytics.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <Link
            href="#"
            className="rounded-md bg-teal-400 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-teal-500"
          >
            Contact Us
          </Link>
          <Link href="/routes/about-us" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
