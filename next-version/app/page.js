"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Home() {
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
    <div className="min-h-screen">
      {/* Hero Section */}
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
            >
              স্বেচ্ছাসেবক হন
            </Link>
            <Link
              href="/about"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
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
            />
          ))}
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                আমাদের সম্পর্কে
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                আহাম্মদ ফাউন্ডেশন একটি অলাভজনক সংস্থা যা ২০১৫ সাল থেকে অসহায়
                মানুষদের পাশে দাঁড়িয়ে আসছে। আমাদের লক্ষ্য হলো সমাজের পিছিয়ে
                পড়া মানুষদের জীবনযাত্রার মান উন্নয়ন করা এবং তাদের স্বাবলম্বী
                করে তোলা।
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                আমরা শিক্ষা, স্বাস্থ্যসেবা, দক্ষতা উন্নয়ন এবং দুর্যোগ ত্রাণের
                মাধ্যমে সমাজের কল্যাণে কাজ করে যাচ্ছি।
              </p>
              <Link
                href="/about"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                বিস্তারিত পড়ুন
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold">১০০০+</div>
                    <div className="text-sm opacity-90">
                      সাহায্যপ্রাপ্ত পরিবার
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">৫০+</div>
                    <div className="text-sm opacity-90">সফল প্রকল্প</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">২০০+</div>
                    <div className="text-sm opacity-90">স্বেচ্ছাসেবক</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">৮+</div>
                    <div className="text-sm opacity-90">বছরের অভিজ্ঞতা</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              আমাদের কার্যক্রম
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              আমরা বিভিন্ন ক্ষেত্রে কাজ করে সমাজের উন্নয়নে অবদান রাখছি
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "📚",
                title: "শিক্ষা সহায়তা",
                description:
                  "দরিদ্র শিশুদের শিক্ষার জন্য বৃত্তি ও শিক্ষা উপকরণ প্রদান",
              },
              {
                icon: "🏥",
                title: "স্বাস্থ্যসেবা",
                description: "বিনামূল্যে চিকিৎসা সেবা ও ওষুধ বিতরণ",
              },
              {
                icon: "🍽️",
                title: "খাদ্য বিতরণ",
                description: "অভাবী পরিবারগুলোর মধ্যে খাদ্য সামগ্রী বিতরণ",
              },
              {
                icon: "🛠️",
                title: "দক্ষতা উন্নয়ন",
                description: "কারিগরি প্রশিক্ষণের মাধ্যমে কর্মসংস্থান সৃষ্টি",
              },
            ].map((program, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              সব কার্যক্রম দেখুন
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              আমাদের কাজের ছবি
            </h2>
            <p className="text-xl text-gray-600">
              আমাদের বিভিন্ন কার্যক্রমের স্মৃতি
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div
                key={item}
                className="relative group overflow-hidden rounded-lg aspect-square"
              >
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    ছবি {item}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    দেখুন
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/gallery"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              সব ছবি দেখুন
            </Link>
          </div>
        </div>
      </section>

      {/* News Preview Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              সাম্প্রতিক সংবাদ
            </h2>
            <p className="text-xl text-gray-600">
              আমাদের সাম্প্রতিক কার্যক্রম ও আপডেট
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "শীতকালীন কম্বল বিতরণ কার্যক্রম",
                date: "১৫ জানুয়ারি, ২০২৫",
                excerpt:
                  "এই শীতে আমরা ৫০০টি পরিবারের মধ্যে কম্বল বিতরণ করেছি...",
              },
              {
                title: "নতুন স্কুল প্রতিষ্ঠা",
                date: "১০ জানুয়ারি, ২০২৫",
                excerpt:
                  "গ্রামাঞ্চলে একটি নতুন প্রাথমিক বিদ্যালয় প্রতিষ্ঠা করা হয়েছে...",
              },
              {
                title: "বিনামূল্যে স্বাস্থ্য ক্যাম্প",
                date: "৫ জানুয়ারি, ২০২৫",
                excerpt:
                  "আমাদের মেডিকেল টিম ৩০০+ রোগীর চিকিৎসা সেবা প্রদান করেছে...",
              },
            ].map((news, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    সংবাদ ছবি
                  </span>
                </div>
                <div className="text-sm text-green-600 font-medium mb-2">
                  {news.date}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{news.excerpt}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/news"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300"
            >
              সব সংবাদ দেখুন
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">আমাদের সাথে যুক্ত হন</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            আপনিও আমাদের সাথে যুক্ত হয়ে সমাজের কল্যাণে অবদান রাখুন। একসাথে আমরা
            একটি সুন্দর ভবিষ্যৎ গড়তে পারি।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              স্বেচ্ছাসেবক হন
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
