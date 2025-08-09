"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

const ProgramsPreview = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProgram, setActiveProgram] = useState(0);
  const sectionRef = useRef(null);

  const programs = [
    {
      id: 1,
      title: "শিক্ষা সহায়তা কর্মসূচি",
      description:
        "দরিদ্র ও মেধাবী শিক্ষার্থীদের বৃত্তি প্রদান, বই-খাতা বিতরণ এবং শিক্ষা উপকরণ সহায়তা।",
      image: "/assets/program1.jpg",
      icon: "📚",
      beneficiaries: "১২০০+",
      duration: "সারা বছর",
      features: [
        "বৃত্তি প্রদান",
        "বই-খাতা বিতরণ",
        "শিক্ষা উপকরণ",
        "কোচিং সহায়তা",
      ],
    },
    {
      id: 2,
      title: "স্বাস্থ্য সেবা কর্মসূচি",
      description:
        "বিনামূল্যে চিকিৎসা সেবা, ওষুধ বিতরণ এবং স্বাস্থ্য সচেতনতা কর্মসূচি।",
      image: "/assets/program2.jpg",
      icon: "🏥",
      beneficiaries: "৮০০+",
      duration: "মাসিক",
      features: [
        "বিনামূল্যে চিকিৎসা",
        "ওষুধ বিতরণ",
        "স্বাস্থ্য ক্যাম্প",
        "সচেতনতা কর্মসূচি",
      ],
    },
    {
      id: 3,
      title: "খাদ্য সহায়তা কর্মসূচি",
      description:
        "দুর্গত এলাকায় খাদ্য বিতরণ, রমজানে ইফতার বিতরণ এবং দুর্যোগকালীন সহায়তা।",
      image: "/assets/program3.jpg",
      icon: "🍽️",
      beneficiaries: "২০০০+",
      duration: "প্রয়োজন অনুযায়ী",
      features: [
        "খাদ্য বিতরণ",
        "ইফতার কর্মসূচি",
        "দুর্যোগকালীন সহায়তা",
        "পুষ্টি সহায়তা",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProgram((prev) => (prev + 1) % programs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [programs.length]);

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container">
        {/* Section Header */}
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <span className="text-green-600 font-semibold text-base sm:text-lg mb-2 block uppercase tracking-wide">
            আমাদের কার্যক্রম
          </span>
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
            সমাজ সেবায় আমাদের অবদান
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-green-600 to-green-500 rounded-full mx-auto mb-6 sm:mb-8"></div>
          <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto px-4 sm:px-0">
            আমরা বিভিন্ন ক্ষেত্রে কাজ করে যাচ্ছি মানুষের জীবনযাত্রার মান
            উন্নয়নের জন্য। আমাদের প্রতিটি কর্মসূচি পরিকল্পিত এবং স্বচ্ছতার সাথে
            বাস্তবায়িত হয়।
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
          {programs.map((program, index) => (
            <div
              key={program.id}
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`card cursor-pointer group ${
                  activeProgram === index
                    ? "ring-4 ring-green-200 scale-105 shadow-2xl"
                    : ""
                }`}
                onClick={() => setActiveProgram(index)}
              >
                <div className="relative h-48 sm:h-52 lg:h-56 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-white/95 backdrop-blur-sm p-2 sm:p-2.5 rounded-full shadow-lg">
                    <span className="text-xl sm:text-2xl">{program.icon}</span>
                  </div>
                  <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 bg-green-600 text-white px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    {program.beneficiaries} উপকারভোগী
                  </div>
                </div>

                <div className="p-5 sm:p-6 lg:p-8">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-3">
                      <span className="font-medium">
                        সময়কাল: {program.duration}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {program.features.slice(0, 2).map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                      {program.features.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full text-xs font-medium">
                          +{program.features.length - 2} আরো
                        </span>
                      )}
                    </div>
                  </div>

                  <Link
                    href="/programs"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-all duration-300 group"
                  >
                    বিস্তারিত দেখুন
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div
          className={`text-center transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-green-600 via-green-600 to-green-700 rounded-2xl lg:rounded-3xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-20 translate-y-20"></div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-center leading-tight">
                আমাদের সাথে যুক্ত হয়ে সমাজ সেবায় অংশগ্রহণ করুন
              </h3>
              <p className="text-green-100 mb-6 sm:mb-8 max-w-3xl mx-auto text-center leading-relaxed text-base sm:text-lg lg:text-xl px-4 sm:px-0">
                আপনার ছোট অবদানও কারো জীবনে বড় পরিবর্তন আনতে পারে। আমাদের সাথে
                যুক্ত হয়ে একটি সুন্দর সমাজ গড়তে সাহায্য করুন।
              </p>
              <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 justify-center px-4 sm:px-0">
                <Link
                  href="/volunteer"
                  className="bg-white text-green-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-center shadow-lg min-w-[180px]"
                >
                  স্বেচ্ছাসেবক হন
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 text-center min-w-[180px]"
                >
                  যোগাযোগ করুন
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
