"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "অসহায়দের পাশে দাঁড়ান",
      subtitle: "আমরা একসাথে একটি সুন্দর ভবিষ্যৎ গড়তে পারি",
      image: "/images/hero1.jpg",
    },
    {
      title: "শিক্ষার আলো ছড়িয়ে দিন",
      subtitle: "প্রতিটি শিশুর শিক্ষার অধিকার নিশ্চিত করুন",
      image: "/images/hero2.jpg",
    },
    {
      title: "স্বাস্থ্যসেবা সবার জন্য",
      subtitle: "গুণগত চিকিৎসা সেবা পৌঁছে দিন প্রত্যন্ত অঞ্চলে",
      image: "/images/hero3.jpg",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-blue-900/80"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect fill="%23059669" width="1200" height="800"/><circle fill="%23047857" cx="200" cy="200" r="100"/><circle fill="%23065f46" cx="800" cy="300" r="150"/><circle fill="%23064e3b" cx="1000" cy="600" r="80"/></svg>')`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {heroSlides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          {heroSlides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/volunteer"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            aria-label="স্বেচ্ছাসেবক হিসেবে যোগ দিন"
          >
            স্বেচ্ছাসেবক হন
          </Link>
          <Link
            href="/about"
            className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            aria-label="আহাম্মদ ফাউন্ডেশন সম্পর্কে জানুন"
          >
            আমাদের সম্পর্কে জানুন
          </Link>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`স্লাইড ${index + 1} এ যান`}
          />
        ))}
      </div>
    </section>
  );
}
