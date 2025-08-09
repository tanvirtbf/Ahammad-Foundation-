"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  const teamMembers = [
    {
      name: "মোহাম্মদ আহাম্মদ",
      position: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
      image: "/assets/user-1.png",
      description:
        "সমাজসেবায় ২০ বছরের অভিজ্ঞতা সম্পন্ন একজন নিবেদিতপ্রাণ ব্যক্তিত্ব।",
    },
    {
      name: "ফাতেমা খাতুন",
      position: "নির্বাহী পরিচালক",
      image: "/assets/user-2.png",
      description: "শিক্ষা ও স্বাস্থ্য সেবায় বিশেষ অভিজ্ঞতা সম্পন্ন।",
    },
    {
      name: "আব্দুল করিম",
      position: "প্রোগ্রাম ম্যানেজার",
      image: "/assets/user-3.png",
      description: "কমিউনিটি ডেভেলপমেন্ট এবং প্রকল্প বাস্তবায়নে দক্ষ।",
    },
    {
      name: "রাশিদা বেগম",
      position: "অর্থ পরিচালক",
      image: "/assets/user-4.png",
      description: "আর্থিক ব্যবস্থাপনা ও স্বচ্ছতা নিশ্চিতকরণে অভিজ্ঞ।",
    },
  ];

  const achievements = [
    {
      year: "২০১৮",
      title: "ফাউন্ডেশন প্রতিষ্ঠা",
      description: "আহাম্মদ ফাউন্ডেশনের যাত্রা শুরু",
    },
    {
      year: "২০১৯",
      title: "প্রথম শিক্ষা কর্মসূচি",
      description: "১০০ জন শিক্ষার্থীকে বৃত্তি প্রদান",
    },
    {
      year: "২০২০",
      title: "কোভিড-১৯ সহায়তা",
      description: "৫০০০ পরিবারে খাদ্য সহায়তা",
    },
    {
      year: "২০২১",
      title: "স্বাস্থ্য ক্যাম্প চালু",
      description: "মাসিক বিনামূল্যে চিকিৎসা সেবা",
    },
    {
      year: "২০২২",
      title: "স্বেচ্ছাসেবক নেটওয়ার্ক",
      description: "২০০+ স্বেচ্ছাসেবক নিয়োগ",
    },
    {
      year: "২০২৩",
      title: "আন্তর্জাতিক স্বীকৃতি",
      description: "সেরা এনজিও পুরস্কার প্রাপ্তি",
    },
  ];

  useEffect(() => {
    const observers = {};

    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.3 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach((observer) => observer.disconnect());
    };
  }, []);

  const setSectionRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 lg:h-[500px] bg-gradient-to-r from-green-600 to-green-700 flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-shadow-lg">
              আমাদের সম্পর্কে
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed text-shadow">
              মানবতার সেবায় নিবেদিত একটি অলাভজনক সংস্থা
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section
        ref={setSectionRef("mission")}
        className="section-padding bg-white"
      >
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.mission
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="relative">
                <Image
                  src="/assets/about.jpg"
                  alt="আমাদের মিশন"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-green-600 text-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">৫+</div>
                    <div className="text-sm">বছরের সেবা</div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible.mission
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="mb-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                  আমাদের মিশন
                </h2>
                <div className="w-20 h-1 bg-green-600 rounded mb-8"></div>
                <p className="text-gray-600 text-lg lg:text-xl leading-relaxed mb-8">
                  আহাম্মদ ফাউন্ডেশনের মূল লক্ষ্য হলো সমাজের সবচেয়ে অসহায় ও
                  দুস্থ মানুষদের পাশে দাঁড়ানো। আমরা বিশ্বাস করি যে প্রতিটি
                  মানুষের মৌলিক অধিকার রয়েছে শিক্ষা, স্বাস্থ্যসেবা এবং একটি
                  মর্যাদাপূর্ণ জীবনযাত্রার।
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  আমাদের ভিশন
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  একটি ন্যায়বিচারপূর্ণ ও কল্যাণকর সমাজ গড়ে তোলা যেখানে কেউ
                  অসহায় থাকবে না। আমাদের স্বপ্ন হলো এমন একটি বাংলাদেশ যেখানে
                  প্রতিটি শিশু শিক্ষার সুযোগ পাবে, প্রতিটি পরিবার স্বাস্থ্যসেবা
                  পাবে এবং কেউ খাদ্যাভাবে থাকবে না।
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    ১৫০+
                  </div>
                  <div className="text-gray-600 font-medium">
                    সম্পন্ন প্রকল্প
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    ৫০০০+
                  </div>
                  <div className="text-gray-600 font-medium">উপকারভোগী</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={setSectionRef("values")} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.values
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              আমাদের মূল্যবোধ
            </h2>
            <div className="w-20 h-1 bg-green-600 rounded mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              আমাদের কাজের ভিত্তি হলো কিছু মূল নীতি যা আমাদের প্রতিটি কার্যক্রমে
              প্রতিফলিত হয়
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤝",
                title: "স্বচ্ছতা",
                desc: "আমাদের সকল কার্যক্রম সম্পূর্ণ স্বচ্ছ ও জবাবদিহিমূলক",
              },
              {
                icon: "❤️",
                title: "সেবা",
                desc: "নিঃস্বার্থ সেবার মানসিকতা নিয়ে কাজ করি",
              },
              {
                icon: "🎯",
                title: "দক্ষতা",
                desc: "সর্বোচ্চ দক্ষতার সাথে সম্পদের সদ্ব্যবহার",
              },
              {
                icon: "🌟",
                title: "উৎকর্ষতা",
                desc: "প্রতিটি কাজে উৎকর্ষতার জন্য প্রচেষ্টা",
              },
            ].map((value, index) => (
              <div
                key={index}
                className={`text-center bg-white p-6 rounded-xl shadow-lg transform transition-all duration-1000 hover:scale-105 ${
                  isVisible.values
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={setSectionRef("team")} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.team
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              আমাদের টিম
            </h2>
            <div className="w-20 h-1 bg-green-600 rounded mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              অভিজ্ঞ ও নিবেদিতপ্রাণ ব্যক্তিদের নিয়ে গঠিত আমাদের টিম
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`text-center bg-gray-50 p-6 rounded-xl shadow-lg transform transition-all duration-1000 hover:scale-105 ${
                  isVisible.team
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-semibold mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={setSectionRef("timeline")} className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.timeline
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              আমাদের যাত্রা
            </h2>
            <div className="w-20 h-1 bg-green-600 rounded mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              ২০১৮ সাল থেকে আজ পর্যন্ত আমাদের অর্জনসমূহ
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>

            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8" : "pl-8"
                  } transform transition-all duration-1000 ${
                    isVisible.timeline
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`bg-white p-6 rounded-xl shadow-lg ${
                      index % 2 === 0 ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="text-2xl font-bold text-green-600 mb-2">
                      {achievement.year}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600">{achievement.description}</p>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
