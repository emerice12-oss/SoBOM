"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/images/hero/service.jpg",
    title: "Welcome to Showers of Blessing Outreach Ministry",
    subtitle: "Join us every Sunday for a life-changing encounter",
    cta: "Join Us This Sunday",
    link: "/contact",
  },
  {
    image: "/images/hero/conference.png",
    title: "Experience the Power of the Word",
    subtitle: "Watch sermons and grow in faith",
    cta: "Watch Sermons",
    link: "/sermons",
  },
  {
    image: "/images/hero/prayer.png",
    title: "A Place of Prayer and Transformation",
    subtitle: "Submit your prayer requests",
    cta: "Request Prayer",
    link: "/contact",
  },
];

export default function HeroSlider() {
  return (
    <section className="relative shadow-lg shadow-black/70">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop
        className="h-[70vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[70vh] w-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/15" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-4xl px-6 md:px-16 text-white">
                  <h1 className="text-3xl md:text-5xl font-bold text-gold">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-lg md:text-xl">
                    {slide.subtitle}
                  </p>

                  <Link
                    href={slide.link}
                    className="inline-block mt-6 bg-gold text-deep-blue px-6 py-3 font-semibold rounded hover:text-white shadow-lg shadow-black/70 transition"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
