"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    projects: 0,
    beneficiaries: 0,
    volunteers: 0,
    years: 0,
  });
  const sectionRef = useRef(null);

  const stats = [
    { key: "projects", label: "সম্পন্ন প্রকল্প", target: 150, suffix: "+" },
    { key: "beneficiaries", label: "উপকারভোগী", target: 5000, suffix: "+" },
    { key: "volunteers", label: "স্বেচ্ছাসেবক", target: 200, suffix: "+" },
    { key: "years", label: "বছরের অভিজ্ঞতা", target: 5, suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          startCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const startCounters = () => {
    stats.forEach((stat) => {
      let current = 0;
      const increment = stat.target / 100;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.target) {
          current = stat.target;
          clearInterval(timer);
        }
        setCounters((prev) => ({
          ...prev,
          [stat.key]: Math.floor(current),
        }));
      }, 20);
    });
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Content */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="mb-6 sm:mb-8">
              <span className="text-green-600 font-semibold text-base sm:text-lg mb-2 block uppercase tracking-wide">
                আমাদের সম্পর্কে
              </span>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
                মানবতার সেবায় নিবেদিত
              </h2>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full"></div>
            </div>

            <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8">
              আহাম্মদ ফাউন্ডেশন একটি অলাভজনক সেবামূলক সংস্থা যা ২০১৮ সাল থেকে
              সমাজের অসহায় ও দুস্থ মানুষদের পাশে দাঁড়িয়ে আসছে। আমাদের লক্ষ্য
              হলো শিক্ষা, স্বাস্থ্য, খাদ্য নিরাপত্তা এবং দুর্যোগকালীন সহায়তার
              মাধ্যমে একটি সুন্দর ও কল্যাণকর সমাজ গড়ে তোলা।
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10">
              {stats.map((stat, index) => (
                <div key={stat.key} className="stats-card group">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {counters[stat.key]}
                    {stat.suffix}
                  </div>
                  <div className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col xs:flex-row gap-4 sm:gap-6">
              <Link href="/about" className="btn-primary text-center">
                আরো জানুন
              </Link>
              <Link href="/volunteer" className="btn-secondary text-center">
                স্বেচ্ছাসেবক হন
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative mt-8 lg:mt-0">
              <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl shadow-2xl group">
                <Image
                  src="/assets/about.jpg"
                  alt="আহাম্মদ ফাউন্ডেশনের কার্যক্রম"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 bg-white p-4 sm:p-6 rounded-xl lg:rounded-2xl shadow-xl border-l-4 border-green-600 max-w-[200px] sm:max-w-none">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full flex-shrink-0">
                    <svg
                      className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-800">
                      ১০০%
                    </div>
                    <div className="text-gray-600 font-medium text-sm sm:text-base">
                      স্বচ্ছতা
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
