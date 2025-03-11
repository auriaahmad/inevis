import Link from "next/link";
import { BiWorld } from "react-icons/bi";
import { PiHandshakeLight } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

export default function WhyChooseInevis() {
  return (
    <section className="bg-transparent text-gray-900 py-16 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-teal-400 py-10 text-sm font-semibold">High Performance Solutions</h2>
          <h1 className="text-5xl font-bold mt-2">Why Choose Inevis as an IT Partner?</h1>
          <p className="text-lg mt-4 py-10 text-gray-700">
            Are you looking for the right tech talents to turn your IT projects into reality? Discover 
            the game-changing solution – High Performance Solutions.
          </p>
          <Link href="/routes/contact-us">
            <button className="mt-6 bg-teal-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-500">
              Talk to us
            </button>
          </Link>
        </div>
        <div className="space-y-6">
          <div className="flex items-start p-6 border border-gray-300 rounded-lg">
            <div className="bg-transparent p-3 rounded-lg">
              <BiWorld className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Innovation at the Core</h3>
              <p className="text-gray-700">We don’t follow trends; we set them. Inevis drives innovation as a standard.</p>
            </div>
          </div>
          <div className="flex items-start p-6 border border-gray-300 rounded-lg">
            <div className="bg-transparent p-3 rounded-lg">
              <PiHandshakeLight className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Partnership Focus</h3>
              <p className="text-gray-700">Your success is our success. We build long-term partnerships, not just business relationships.</p>
            </div>
          </div>
          <div className="flex items-start p-6 border border-gray-300 rounded-lg">
            <div className="bg-transparent p-3 rounded-lg">
              <MdOutlineSecurity className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Security First</h3>
              <p className="text-gray-700">Trust is key to any partnership. We prioritize security, so you can focus on growth.</p>
            </div>
          </div>
          <div className="flex items-start p-6 border border-gray-300 rounded-lg">
            <div className="bg-transparent p-3 rounded-lg">
              <TbWorldWww className="text-teal-400 text-6xl" />
            </div>
            <div className="ml-4">
              <h3 className="text-xl font-semibold">Global Reach, Local Touch</h3>
              <p className="text-gray-700">With nearshore services, we bring global expertise right to your doorstep.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}