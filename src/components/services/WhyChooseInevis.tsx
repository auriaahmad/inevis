import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { PiHandshakeLight } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";

export default function WhyChooseInevis() {
  return (
    <section className="bg-transparent text-gray-900 py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="mr-38 flex flex-col justify-center">
          <h1 className="text-5xl font-bold mb-10">Why Choose Us?</h1>
          <p className="text-lg mt-4 text-gray-700 mb-10">
            Struggling to enhance your telecom network? Our High-Performance Squads deliver seamless
            infrastructure deployment, network optimization, analytic solutions, and expert maintenance,
            ensuring efficiency, scalability, and reliability.
          </p>
          <Link href="/contact">
            <button className="mt-6 bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-500">
              Talk to us
            </button>
          </Link>
        </div>
        <div className="space-y-6 flex flex-col justify-center">
          <div className="flex items-center p-6 border border-gray-300 rounded-lg">
            <div className="p-3">
              <BiWorld className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Innovation-Driven</h3>
              <p className="text-gray-700">We design cutting-edge telecom infrastructure and network solutions to keep you ahead.</p>
            </div>
          </div>
          <div className="flex items-center p-6 border border-gray-300 rounded-lg">
            <div className="p-3">
              <FaNetworkWired className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Seamless Deployment</h3>
              <p className="text-gray-700">From hardware installation to data visualization, we ensure efficiency at every step.</p>
            </div>
          </div>
          <div className="flex items-center p-6 border border-gray-300 rounded-lg">
            <div className="p-3">
              <PiHandshakeLight className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Trusted Partnerships</h3>
              <p className="text-gray-700">We don&apos;t just provide solutions; we build long-term partnerships for lasting success.</p>
            </div>
          </div>
          <div className="flex items-center p-6 border border-gray-300 rounded-lg">
            <div className="p-3">
              <MdOutlineSecurity className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Security & Reliability</h3>
              <p className="text-gray-700">Ensuring secure, stable, and compliant telecom operations for uninterrupted connectivity.</p>
            </div>
          </div>
          <div className="flex items-center p-6 border border-gray-300 rounded-lg">
            <div className="p-3">
              <TbWorldWww className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Global Reach, Local Expertise</h3>
              <p className="text-gray-700">Fast, efficient nearshore services across Europe & Africa, tailored to your needs.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}