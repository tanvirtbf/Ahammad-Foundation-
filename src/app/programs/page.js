'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ProgramsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  const categories = [
    { id: 'all', name: 'সকল কর্মসূচি', icon: '🌟' },
    { id: 'education', name: 'শিক্ষা', icon: '📚' },
    { id: 'health', name: 'স্বাস্থ্য', icon: '🏥' },
    { id: 'food', name: 'খাদ্য সহায়তা', icon: '🍽️' },
    { id: 'emergency', name: 'জরুরি সহায়তা', icon: '🚨' }
  ];

  const programs = [
    {
      id: 1,
      title: 'শিক্ষা বৃত্তি কর্মসূচি',
      category: 'education',
      image: '/assets/program1.jpg',
      description: 'মেধাবী কিন্তু দরিদ্র শিক্ষার্থীদের জন্য বৃত্তি প্রদান কর্মসূচি।',
      details: 'প্রতি বছর ১০০+ শিক্ষার্থীকে বৃত্তি প্রদান করা হয়। এই কর্মসূচির মাধ্যমে শিক্ষার্থীরা তাদের পড়াশোনা চালিয়ে যেতে পারে।',
      beneficiaries: '১২০০+',
      duration: 'সারা বছর',
      budget: '৫ লক্ষ টাকা',
      features: ['মাসিক বৃত্তি', 'বই-খাতা', 'পরীক্ষার ফি', 'কোচিং সহায়তা']
    },
    {
      id: 2,
      title: 'বিনামূল্যে চিকিৎসা সেবা',
      category: 'health',
      image: '/assets/program2.jpg',
      description: 'গরিব মানুষদের জন্য বিনামূল্যে চিকিৎসা সেবা ও ওষুধ বিতরণ।',
      details: 'মাসিক স্বাস্থ্য ক্যাম্পের মাধ্যমে বিনামূল্যে চিকিৎসা সেবা প্রদান করা হয়। অভিজ্ঞ ডাক্তারদের তত্ত্বাবধানে এই সেবা দেওয়া হয়।',
      beneficiaries: '৮০০+',
      duration: 'মাসিক',
      budget: '৩ লক্ষ টাকা',
      features: ['বিনামূল্যে চেকআপ', 'ওষুধ বিতরণ', 'স্বাস্থ্য পরামর্শ', 'রেফারেল সেবা']
    },
    {
      id: 3,
      title: 'খাদ্য বিতরণ কর্মসূচি',
      category: 'food',
      image: '/assets/program3.jpg',
      description: 'দুর্গত এলাকায় খাদ্য বিতরণ ও রমজানে ইফতার কর্মসূচি।',
      details: 'দুর্যোগকালীন সময়ে এবং রমজান মাসে দরিদ্র পরিবারগুলোর মধ্যে খাদ্য সামগ্রী বিতরণ করা হয়।',
      beneficiaries: '২০০০+',
      duration: 'প্রয়োজন অনুযায়ী',
      budget: '৮ লক্ষ টাকা',
      features: ['চাল-ডাল বিতরণ', 'ইফতার প্যাকেট', 'পুষ্টিকর খাবার', 'পানীয় জল']
    },
    {
      id: 4,
      title: 'শীতবস্ত্র বিতরণ',
      category: 'emergency',
      image: '/assets/unnamed.jpg',
      description: 'শীতকালে দরিদ্র মানুষদের মধ্যে কম্বল ও গরম কাপড় বিতরণ।',
      details: 'প্রতি শীতকালে অসহায় মানুষদের মধ্যে কম্বল, চাদর এবং গরম কাপড় বিতরণ করা হয়।',
      beneficiaries: '৫০০+',
      duration: 'শীতকাল',
      budget: '২ লক্ষ টাকা',
      features: ['কম্বল বিতরণ', 'গরম কাপড়', 'শিশুদের জ্যাকেট', 'মোজা-টুপি']
    },
    {
      id: 5,
      title: 'কম্পিউটার প্রশিক্ষণ',
      category: 'education',
      image: '/assets/gallery-1.png',
      description: 'যুবকদের জন্য বিনামূল্যে কম্পিউটার ও ডিজিটাল সাক্ষরতা প্রশিক্ষণ।',
      details: 'আধুনিক যুগের সাথে তাল মিলিয়ে চলার জন্য যুবকদের কম্পিউটার প্রশিক্ষণ দেওয়া হয়।',
      beneficiaries: '৩০০+',
      duration: '৩ মাস',
      budget: '১.৫ লক্ষ টাকা',
      features: ['বেসিক কম্পিউটার', 'ইন্টারনেট ব্যবহার', 'মাইক্রোসফট অফিস', 'সার্টিফিকেট প্রদান']
    },
    {
      id: 6,
      title: 'মাতৃত্বকালীন সেবা',
      category: 'health',
      image: '/assets/gallery-2.png',
      description: 'গর্ভবতী মায়েদের জন্য বিশেষ স্বাস্থ্য সেবা ও পুষ্টি সহায়তা।',
      details: 'গর্ভবতী মায়েদের নিয়মিত চেকআপ, পুষ্টি সহায়তা এবং প্রসবকালীন সেবা প্রদান করা হয়।',
      beneficiaries: '২০০+',
      duration: 'সারা বছর',
      budget: '৪ লক্ষ টাকা',
      features: ['নিয়মিত চেকআপ', 'পুষ্টি সহায়তা', 'প্রসব সহায়তা', 'নবজাতক যত্ন']
    }
  ];

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  useEffect(() => {
    const observers = {};
    
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        observers[key] = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible(prev => ({ ...prev, [key]: true }));
            }
          },
          { threshold: 0.3 }
        );
        observers[key].observe(sectionRefs.current[key]);
      }
    });

    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  const setSectionRef = (key) => (el) => {
    sectionRefs.current[key] = el;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-700 flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">আমাদের কার্যক্রম</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              সমাজের কল্যাণে আমাদের বিভিন্ন সেবামূলক কর্মসূচি
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section 
        ref={setSectionRef('filter')}
        className="py-12 bg-white sticky top-26 z-30 shadow-md"
      >
        <div className="container mx-auto px-4">
          <div
            className={`flex flex-wrap justify-center gap-4 transform transition-all duration-1000 ${
              isVisible.filter ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section 
        ref={setSectionRef('programs')}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredPrograms.map((program, index) => (
              <div
                key={program.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.programs ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === program.category)?.name}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
                    {program.beneficiaries} উপকারভোগী
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {program.details}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-gray-700">সময়কাল:</span>
                      <p className="text-gray-600">{program.duration}</p>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-700">বাজেট:</span>
                      <p className="text-gray-600">{program.budget}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="font-semibold text-gray-700 text-sm">বৈশিষ্ট্যসমূহ:</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {program.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    আরো জানুন
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
