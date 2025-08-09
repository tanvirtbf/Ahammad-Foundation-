'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Programs() {
  const [activeCategory, setActiveCategory] = useState('all');

  const programs = [
    {
      id: 1,
      title: "শিক্ষা বৃত্তি প্রোগ্রাম",
      category: "education",
      description: "মেধাবী কিন্তু দরিদ্র শিক্ষার্থীদের জন্য বৃত্তি প্রদান",
      details: "প্রতি বছর ১০০+ শিক্ষার্থীকে বৃত্তি প্রদান করা হয়। এতে রয়েছে টিউশন ফি, বই-খাতা এবং অন্যান্য শিক্ষা উপকরণের খরচ।",
      beneficiaries: "৫০০+ শিক্ষার্থী",
      duration: "চলমান",
      image: "/images/education1.jpg"
    },
    {
      id: 2,
      title: "বিনামূল্যে স্বাস্থ্য ক্যাম্প",
      category: "health",
      description: "গ্রামাঞ্চলে বিনামূল্যে চিকিৎসা সেবা প্রদান",
      details: "অভিজ্ঞ ডাক্তার ও নার্সদের নিয়ে মাসিক স্বাস্থ্য ক্যাম্প আয়োজন। বিনামূল্যে চেকআপ, ওষুধ বিতরণ এবং স্বাস্থ্য পরামর্শ।",
      beneficiaries: "৩০০০+ রোগী",
      duration: "মাসিক",
      image: "/images/health1.jpg"
    },
    {
      id: 3,
      title: "খাদ্য বিতরণ কার্যক্রম",
      category: "food",
      description: "অভাবী পরিবারগুলোর মধ্যে খাদ্য সামগ্রী বিতরণ",
      details: "রমজান মাসে ইফতার বিতরণ, শীতকালে গরম খাবার এবং দুর্যোগের সময় জরুরি খাদ্য সহায়তা প্রদান।",
      beneficiaries: "২০০০+ পরিবার",
      duration: "নিয়মিত",
      image: "/images/food1.jpg"
    },
    {
      id: 4,
      title: "কারিগরি প্রশিক্ষণ কেন্দ্র",
      category: "skill",
      description: "যুবকদের জন্য বিভিন্ন কারিগরি দক্ষতা প্রশিক্ষণ",
      details: "কম্পিউটার, সেলাই, ইলেকট্রিক্যাল, প্লাম্বিং এবং অন্যান্য কারিগরি বিষয়ে প্রশিক্ষণ। প্রশিক্ষণ শেষে চাকরির ব্যবস্থা।",
      beneficiaries: "৮০০+ যুবক",
      duration: "৬ মাস কোর্স",
      image: "/images/skill1.jpg"
    },
    {
      id: 5,
      title: "দুর্যোগ ত্রাণ কার্যক্রম",
      category: "disaster",
      description: "প্রাকৃতিক দুর্যোগের সময় জরুরি সহায়তা",
      details: "বন্যা, ঘূর্ণিঝড়, ভূমিকম্প এবং অন্যান্য দুর্যোগের সময় তাৎক্ষণিক ত্রাণ সামগ্রী বিতরণ এবং পুনর্বাসন সহায়তা।",
      beneficiaries: "১৫০০+ পরিবার",
      duration: "জরুরি ভিত্তিতে",
      image: "/images/disaster1.jpg"
    },
    {
      id: 6,
      title: "মহিলা ক্ষমতায়ন প্রোগ্রাম",
      category: "women",
      description: "মহিলাদের আর্থিক স্বাবলম্বিতার জন্য প্রশিক্ষণ",
      details: "সেলাই, হস্তশিল্প, রান্না এবং ছোট ব্যবসার প্রশিক্ষণ। ক্ষুদ্র ঋণ সুবিধা এবং বাজারজাতকরণে সহায়তা।",
      beneficiaries: "৬০০+ মহিলা",
      duration: "৩ মাস কোর্স",
      image: "/images/women1.jpg"
    }
  ];

  const categories = [
    { id: 'all', name: 'সব কার্যক্রম', icon: '🌟' },
    { id: 'education', name: 'শিক্ষা', icon: '📚' },
    { id: 'health', name: 'স্বাস্থ্য', icon: '🏥' },
    { id: 'food', name: 'খাদ্য', icon: '🍽️' },
    { id: 'skill', name: 'দক্ষতা', icon: '🛠️' },
    { id: 'disaster', name: 'দুর্যোগ', icon: '🆘' },
    { id: 'women', name: 'মহিলা', icon: '👩' }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            আমাদের কার্যক্রম
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমরা বিভিন্ন ক্ষেত্রে কাজ করে সমাজের উন্নয়নে অবদান রাখছি। 
            আমাদের প্রতিটি কার্যক্রম মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে ডিজাইন করা।
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div 
                key={program.id} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Program Image */}
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-t-xl flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">
                    {categories.find(cat => cat.id === program.category)?.icon}
                  </span>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  
                  {/* Program Stats */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">উপকারভোগী:</span>
                      <span className="font-semibold text-green-600">{program.beneficiaries}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">সময়কাল:</span>
                      <span className="font-semibold text-blue-600">{program.duration}</span>
                    </div>
                  </div>

                  {/* Program Details */}
                  <p className="text-sm text-gray-600 mb-4">
                    {program.details}
                  </p>

                  {/* Action Button */}
                  <Link
                    href="/volunteer"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors duration-300 text-center block"
                  >
                    এই কার্যক্রমে যুক্ত হন
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">আমাদের প্রভাব</h2>
            <p className="text-xl opacity-90">
              আমাদের কার্যক্রমের মাধ্যমে অর্জিত সাফল্য
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "৮০০০+", label: "মানুষ সাহায্য পেয়েছে" },
              { number: "৫০+", label: "সফল প্রকল্প" },
              { number: "১৫+", label: "এলাকায় কাজ" },
              { number: "৯৫%", label: "সন্তুষ্ট উপকারভোগী" }
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

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            আমাদের সাথে যুক্ত হন
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            আপনিও আমাদের কার্যক্রমে অংশগ্রহণ করে সমাজের কল্যাণে অবদান রাখুন। 
            একসাথে আমরা আরও বেশি মানুষের জীবনে পরিবর্তন আনতে পারি।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              স্বেচ্ছাসেবক হন
            </Link>
            <Link
              href="/contact"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
