"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      image: "/assets/desktopHero.png",
      mobileImage: "/assets/Mobilehero.png",
      title: "আহাম্মদ ফাউন্ডেশনে স্বাগতম",
      subtitle: "অসহায় দুস্থদের সেবায় নিবেদিত",
      description:
        "আমরা সমাজের অসহায় ও দুস্থ মানুষদের পাশে দাঁড়িয়ে তাদের জীবনযাত্রার মান উন্নয়নে কাজ করে যাচ্ছি।",
      buttonText: "আমাদের সম্পর্কে জানুন",
      buttonLink: "/about",
    },
    {
      image: "/assets/program1.jpg",
      mobileImage: "/assets/program1.jpg",
      title: "শিক্ষা সহায়তা কর্মসূচি",
      subtitle: "শিক্ষার আলো ছড়িয়ে দিন",
      description:
        "দরিদ্র ও মেধাবী শিক্ষার্থীদের শিক্ষা সহায়তা প্রদানের মাধ্যমে একটি শিক্ষিত সমাজ গড়ে তুলুন।",
      buttonText: "কর্মসূচি দেখুন",
      buttonLink: "/programs",
    },
    {
      image: "/assets/program2.jpg",
      mobileImage: "/assets/program2.jpg",
      title: "স্বাস্থ্য সেবা কর্মসূচি",
      subtitle: "সুস্বাস্থ্য সবার অধিকার",
      description:
        "বিনামূল্যে চিকিৎসা সেবা ও ওষুধ বিতরণের মাধ্যমে গরিব মানুষদের স্বাস্থ্য সেবা নিশ্চিত করুন।",
      buttonText: "স্বেচ্ছাসেবক হন",
      buttonLink: "/volunteer",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen h-screen overflow-hidden">
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Desktop Image */}
          <div className="hidden md:block relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </div>

          {/* Mobile Image */}
          <div className="md:hidden relative w-full h-full">
            <Image
              src={slide.mobileImage}
              alt={slide.title}
              fill
              className="object-cover object-center"
              priority={index === 0}
              sizes="100vw"
            />
          </div>

          {/* Improved Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container">
          <div className="max-w-6xl mx-auto text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-shadow-lg">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-300 mb-4 sm:mb-6 font-medium text-shadow">
                {slides[currentSlide].subtitle}
              </h2>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-4xl mx-auto lg:mx-0 leading-relaxed text-shadow px-4 sm:px-0">
                {slides[currentSlide].description}
              </p>
              <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center lg:justify-start px-4 sm:px-0">
                <Link
                  href={slides[currentSlide].buttonLink}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl text-center inline-block min-w-[200px]"
                >
                  {slides[currentSlide].buttonText}
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform hover:scale-105 text-center inline-block min-w-[200px]"
                >
                  যোগাযোগ করুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-8 z-20 animate-bounce-slow hidden sm:block">
        <div className="text-white text-center">
          <p className="text-xs sm:text-sm mb-2 font-medium">আরো জানুন</p>
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
