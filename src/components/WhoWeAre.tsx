"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const whoWeAre = [
  {
    title: "Closer to the Customer",
    description: "We develop unique campaigns and concepts for you. For a better connection to your customers.",
    image: "/assets/customer.jpg", // Replace with actual image path
  },
  {
    title: "Your Profit",
    description: "Thanks to our online system, you save time and money and can devote yourself entirely to customer business.",
    image: "/assets/profit.jpg", // Replace with actual image path
  },
  {
    title: "Ihr Know-how",
    description: "Become a partner and benefit from our many years of experience in the mobile communications market.",
    image: "/assets/experience.jpg", // Replace with actual image path
  },
  {
    title: "Your Plus",
    description: "We work with all network operators and can provide you with any device you require.",
    image: "/assets/operators.jpg", // Replace with actual image path
  },
];

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-gradient-to-t from-[#D7E5F8] to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-12">Who We Are</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {whoWeAre.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="h-[340px] flex flex-col items-center bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="mt-2 text-gray-600">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}