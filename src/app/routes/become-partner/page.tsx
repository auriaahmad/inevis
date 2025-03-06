"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaCheck, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";


const testimonials = [
  {
    logo: "BBC",
    text: "I love this. The seeker has solitude, but not everyone disturbs it...",
    icon: <FaCheck />, // Example icon
  },
  {
    logo: "CNN",
    text: "Great service, very professional and always on time.",
  },
  {
    logo: "Forbes",
    text: "Exceptional quality and attention to detail. Highly recommended!",
    icon: <FaCheck />, // Example icon
  },
  {
    logo: "Guardian",
    text: "They went above and beyond to deliver an outstanding service.",
  },
];


const BecomePartner = () => {

  
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <section className="bg-gradient-to-br from-[#D7E5F8] to-white min-h-screen flex flex-col justify-center items-center text-center px-6 p-36">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Become a Partner
        </motion.h2>
        <p className="text-lg text-gray-600 mb-2">Join us!</p>
        <p className="text-lg text-gray-600 max-w-4xl leading-relaxed mb-6">
          Whether you are an experienced marketeer or new to the exciting world of mobile communications: it has never been easier. With our professional know-how and our customized solutions, we support you optimally and goal-oriented right from the start. Because nothing is more important to us than your success.
        </p>
        <a
          href="/routes/contact-us"
          className="bg-teal-400 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-teal-500 transition duration-300"
        >
          Contact Us
        </a>
      </section>


      <section className="bg-gradient-to-bl from-[#D7E5F8] min-h-screen to-white py-36">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Hear From Our Partners
          </h2>

          <div className="text-center mb-10">
            <div className="flex justify-center gap-1 mb-2">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} className="text-yellow-500 text-xl" />
                ))}
            </div>
            <h3 className="text-xl font-semibold">Based On 170 reviews</h3>
            <p className="text-gray-500 cursor-pointer underline">
              See all reviews
            </p>
          </div>

          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 4000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onSwiper={(swiper: SwiperClass) => {
              if (typeof swiper.params.navigation === "object") {
                swiper.params.navigation.prevEl = prevRef.current!;
                swiper.params.navigation.nextEl = nextRef.current!;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}            
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="overflow-hidden"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="shadow-lg rounded-xl p-6 border bg-white"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {typeof testimonial.icon !== "undefined" ? (
                      <div className="bg-gray-800 p-2 rounded-full">
                        {testimonial.icon}
                      </div>
                    ) : (
                      <div className="bg-gray-800 text-white font-bold p-2 rounded">
                        {testimonial.logo}
                      </div>
                    )}
                    <span className="font-semibold">{testimonial.logo}</span>
                  </div>
                  <p className="text-gray-600">{testimonial.text}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex justify-center gap-6 mt-8">
            <button
              ref={prevRef}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <FaArrowLeft className="text-xl" />
            </button>
            <button
              ref={nextRef}
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
            >
              <FaArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomePartner;