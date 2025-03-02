import Link from "next/link";

export default function Hero() {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-start text-left bg-cover bg-center px-10 lg:px-20"
      style={{ backgroundImage: "url('/assets/telecom.jpg')" }}
    >
      {/* White Tint Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-30"></div>

      {/* Content (Aligned Left) */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-7xl">
          Data to enrich your online business
        </h1>
        <p className="mt-8 text-lg text-gray-700 sm:text-xl">
          Anim aute id magna aliqua ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. 
          Elit sunt amet fugiat veniam occaecat.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex items-center justify-start gap-x-6">
          <Link
            href="#"
            className="rounded-md bg-teal-500 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500"
          >
            Get started
          </Link>
          <Link href="#" className="text-sm font-semibold text-gray-900 hover:text-indigo-600">
            Learn more <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
