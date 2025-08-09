"use client";
import { useState } from 'react';

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = [
    { id: 'mission', label: 'আমাদের মিশন', icon: '🎯' },
    { id: 'vision', label: 'আমাদের ভিশন', icon: '👁️' },
    { id: 'values', label: 'আমাদের মূল্যবোধ', icon: '💎' }
  ];

  const tabContent = {
    mission: {
      title: "আমাদের মিশন",
      content: [
        "অসহায় ও দুস্থ মানুষদের পাশে দাঁড়িয়ে তাদের জীবনযাত্রার মান উন্নয়ন করা।",
        "শিক্ষার মাধ্যমে সমাজের পিছিয়ে পড়া জনগোষ্ঠীকে এগিয়ে নিয়ে যাওয়া।",
        "স্বাস্থ্যসেবা নিশ্চিত করে একটি সুস্থ সমাজ গড়ে তোলা।",
        "দক্ষতা উন্নয়নের মাধ্যমে কর্মসংস্থান সৃষ্টি করা।"
      ]
    },
    vision: {
      title: "আমাদের ভিশন",
      content: [
        "একটি ন্যায়বিচারভিত্তিক ও সমতাভিত্তিক সমাজ গড়ে তোলা।",
        "যেখানে প্রতিটি মানুষ তার মৌলিক অধিকার ভোগ করতে পারবে।",
        "শিক্ষা, স্বাস্থ্য ও কর্মসংস্থানের নিশ্চয়তা থাকবে।",
        "দারিদ্র্যমুক্ত বাংলাদেশ গড়ার স্বপ্ন বাস্তবায়ন।"
      ]
    },
    values: {
      title: "আমাদের মূল্যবোধ",
      content: [
        "স্বচ্ছতা ও জবাবদিহিতা: আমাদের সকল কার্যক্রম স্বচ্ছ ও জবাবদিহিমূলক।",
        "সততা ও নিষ্ঠা: আমরা সততার সাথে আমাদের দায়িত্ব পালন করি।",
        "মানবিকতা: মানুষের প্রতি ভালোবাসা ও সেবার মনোভাব।",
        "সমতা: জাতি, ধর্ম, বর্ণ নির্বিশেষে সবার সাথে সমান আচরণ।"
      ]
    }
  };

  return (
    <section className="py-20 bg-white" aria-labelledby="mission-vision-heading">
      <div className="container mx-auto px-4">
        <header className="text-center mb-16">
          <h2 id="mission-vision-heading" className="text-4xl font-bold text-gray-800 mb-4">
            আমাদের মিশন, ভিশন ও মূল্যবোধ
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            আমাদের সংস্থার মূল নীতি ও আদর্শ যা আমাদের কাজের দিকনির্দেশনা প্রদান করে
          </p>
        </header>

        {/* Tab Navigation */}
        <nav className="flex justify-center mb-12" role="tablist" aria-label="মিশন ভিশন ট্যাব">
          <div className="bg-gray-100 rounded-full p-2 flex space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-green-600'
                }`}
                role="tab"
                aria-selected={activeTab === tab.id}
                aria-controls={`${tab.id}-panel`}
                id={`${tab.id}-tab`}
              >
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Tab Content */}
        <div className="max-w-4xl mx-auto">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`transition-all duration-500 ${
                activeTab === tab.id ? 'opacity-100 block' : 'opacity-0 hidden'
              }`}
              role="tabpanel"
              id={`${tab.id}-panel`}
              aria-labelledby={`${tab.id}-tab`}
            >
              <article className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
                <header>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                    {tabContent[tab.id].title}
                  </h3>
                </header>
                <ul className="space-y-4">
                  {tabContent[tab.id].content.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                        {index + 1}
                      </span>
                      <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
