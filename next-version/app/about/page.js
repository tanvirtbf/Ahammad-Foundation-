'use client';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mission');

  const teamMembers = [
    {
      name: "মোহাম্মদ আহাম্মদ",
      position: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
      description: "২০ বছরের সামাজিক কাজের অভিজ্ঞতা",
      image: "/images/team1.jpg"
    },
    {
      name: "ফাতেমা খাতুন",
      position: "নির্বাহী পরিচালক",
      description: "শিক্ষা ও স্বাস্থ্য বিভাগের প্রধান",
      image: "/images/team2.jpg"
    },
    {
      name: "ডা. রহিম উদ্দিন",
      position: "মেডিকেল অ্যাডভাইজার",
      description: "১৫ বছরের চিকিৎসা সেবার অভিজ্ঞতা",
      image: "/images/team3.jpg"
    },
    {
      name: "প্রফেসর করিম",
      position: "শিক্ষা উপদেষ্টা",
      description: "শিক্ষা ক্ষেত্রে ২৫ বছরের অভিজ্ঞতা",
      image: "/images/team4.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আহাম্মদ ফাউন্ডেশন একটি অলাভজনক সংস্থা যা ২০১৫ সাল থেকে 
            অসহায় মানুষদের পাশে দাঁড়িয়ে সমাজের উন্নয়নে কাজ করে আসছে।
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values Tabs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center mb-12 border-b">
              {[
                { id: 'mission', label: 'আমাদের মিশন' },
                { id: 'vision', label: 'আমাদের ভিশন' },
                { id: 'values', label: 'আমাদের মূল্যবোধ' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-semibold text-lg transition-colors duration-300 border-b-2 ${
                    activeTab === tab.id
                      ? 'text-green-600 border-green-600'
                      : 'text-gray-600 border-transparent hover:text-green-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-center">
              {activeTab === 'mission' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">আমাদের মিশন</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    আমাদের মিশন হলো সমাজের অসহায় ও পিছিয়ে পড়া মানুষদের পাশে দাঁড়িয়ে 
                    তাদের জীবনযাত্রার মান উন্নয়ন করা। আমরা শিক্ষা, স্বাস্থ্যসেবা, দক্ষতা উন্নয়ন 
                    এবং দুর্যোগ ত্রাণের মাধ্যমে একটি সুন্দর ও সমৃদ্ধ সমাজ গড়ে তুলতে প্রতিশ্রুতিবদ্ধ।
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    আমাদের লক্ষ্য হলো প্রতিটি মানুষের মৌলিক অধিকার নিশ্চিত করা এবং 
                    তাদের স্বাবলম্বী করে তোলা যাতে তারা সমাজের উন্নয়নে অবদান রাখতে পারে।
                  </p>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">আমাদের ভিশন</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    আমাদের ভিশন হলো একটি ন্যায়বিচার ভিত্তিক সমাজ গড়ে তোলা যেখানে 
                    প্রতিটি মানুষ সম্মানের সাথে বাঁচতে পারবে এবং তাদের স্বপ্ন পূরণের সুযোগ পাবে।
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    আমরা এমন একটি বাংলাদেশ দেখতে চাই যেখানে দারিদ্র্য, অশিক্ষা এবং 
                    অসমতা থাকবে না। সবাই মিলে একসাথে একটি উন্নত ও সমৃদ্ধ জাতি গড়ে তুলব।
                  </p>
                </div>
              )}

              {activeTab === 'values' && (
                <div className="animate-fade-in">
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">আমাদের মূল্যবোধ</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-600 mb-3">স্বচ্ছতা</h3>
                      <p className="text-gray-600">
                        আমাদের সকল কার্যক্রম ও আর্থিক লেনদেন সম্পূর্ণ স্বচ্ছ এবং জবাবদিহিমূলক।
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-600 mb-3">সততা</h3>
                      <p className="text-gray-600">
                        আমরা সকল কাজে সততা ও নৈতিকতার সর্বোচ্চ মান বজায় রাখি।
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-600 mb-3">সেবা</h3>
                      <p className="text-gray-600">
                        মানুষের সেবা করাই আমাদের প্রধান লক্ষ্য, কোনো ব্যক্তিগত স্বার্থ নয়।
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-green-600 mb-3">একতা</h3>
                      <p className="text-gray-600">
                        আমরা সবাই মিলে একসাথে কাজ করি এবং একে অপরকে সাহায্য করি।
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">আমাদের অর্জন</h2>
            <p className="text-xl opacity-90">
              গত ৮ বছরে আমাদের কিছু উল্লেখযোগ্য অর্জন
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "১০০০+", label: "সাহায্যপ্রাপ্ত পরিবার" },
              { number: "৫০+", label: "সফল প্রকল্প" },
              { number: "২০০+", label: "স্বেচ্ছাসেবক" },
              { number: "৮+", label: "বছরের অভিজ্ঞতা" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">আমাদের টিম</h2>
            <p className="text-xl text-gray-600">
              অভিজ্ঞ ও দক্ষ ব্যক্তিদের নিয়ে গঠিত আমাদের টিম
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium mb-3">
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">আমাদের ইতিহাস</h2>
              <p className="text-xl text-gray-600">
                আহাম্মদ ফাউন্ডেশনের যাত্রা শুরু থেকে আজ পর্যন্ত
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  year: "২০১৫",
                  title: "ফাউন্ডেশন প্রতিষ্ঠা",
                  description: "মোহাম্মদ আহাম্মদের নেতৃত্বে আহাম্মদ ফাউন্ডেশনের যাত্রা শুরু।"
                },
                {
                  year: "২০১৭",
                  title: "প্রথম বড় প্রকল্প",
                  description: "গ্রামাঞ্চলে প্রথম স্কুল প্রতিষ্ঠা এবং ১০০ শিশুর শিক্ষার ব্যবস্থা।"
                },
                {
                  year: "২০১৯",
                  title: "স্বাস্থ্য সেবা শুরু",
                  description: "বিনামূল্যে মেডিকেল ক্যাম্প এবং ওষুধ বিতরণ কার্যক্রম শুরু।"
                },
                {
                  year: "২০২১",
                  title: "কোভিড-১৯ সহায়তা",
                  description: "মহামারীর সময় ১০০০+ পরিবারকে খাদ্য ও চিকিৎসা সহায়তা প্রদান।"
                },
                {
                  year: "২০২৩",
                  title: "দক্ষতা উন্নয়ন কেন্দ্র",
                  description: "যুবকদের জন্য কারিগরি প্রশিক্ষণ কেন্দ্র স্থাপন।"
                },
                {
                  year: "২০২৫",
                  title: "ডিজিটাল উপস্থিতি",
                  description: "অনলাইন প্ল্যাটফর্মের মাধ্যমে আরও বেশি মানুষের কাছে পৌঁছানো।"
                }
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
