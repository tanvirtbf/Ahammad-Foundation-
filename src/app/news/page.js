'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});
  const articlesPerPage = 6;

  const categories = [
    { id: 'all', name: 'সকল সংবাদ', icon: '📰' },
    { id: 'programs', name: 'কর্মসূচি', icon: '📋' },
    { id: 'events', name: 'অনুষ্ঠান', icon: '🎉' },
    { id: 'achievements', name: 'অর্জন', icon: '🏆' },
    { id: 'announcements', name: 'ঘোষণা', icon: '📢' }
  ];

  const newsArticles = [
    {
      id: 1,
      title: 'আহাম্মদ ফাউন্ডেশন সেরা এনজিও পুরস্কার পেয়েছে',
      category: 'achievements',
      image: '/assets/gallery-4.png',
      excerpt: 'জাতীয় এনজিও পুরস্কার ২০২৩ এ আহাম্মদ ফাউন্ডেশন সেরা সেবামূলক সংস্থার পুরস্কার অর্জন করেছে।',
      content: 'গত ১৫ ডিসেম্বর ২০২৩ তারিখে অনুষ্ঠিত জাতীয় এনজিও পুরস্কার অনুষ্ঠানে আহাম্মদ ফাউন্ডেশন সেরা সেবামূলক সংস্থার পুরস্কার অর্জন করেছে। এই পুরস্কার প্রদান করা হয়েছে ফাউন্ডেশনের গত পাঁচ বছরের অসাধারণ সেবার স্বীকৃতিস্বরূপ।',
      author: 'প্রশাসন বিভাগ',
      date: '১৫ ডিসেম্বর, ২০২৩',
      readTime: '৩ মিনিট',
      tags: ['পুরস্কার', 'স্বীকৃতি', 'এনজিও']
    },
    {
      id: 2,
      title: 'নতুন শিক্ষা বৃত্তি কর্মসূচি চালু',
      category: 'programs',
      image: '/assets/program1.jpg',
      excerpt: '২০২৪ সালের জন্য ৫০০ মেধাবী শিক্ষার্থীর জন্য নতুন বৃত্তি কর্মসূচি ঘোষণা করা হয়েছে।',
      content: 'আহাম্মদ ফাউন্ডেশন ২০২৪ সালের জন্য একটি বিশেষ শিক্ষা বৃত্তি কর্মসূচি চালু করেছে। এই কর্মসূচির আওতায় ৫০০ মেধাবী কিন্তু দরিদ্র শিক্ষার্থীকে বৃত্তি প্রদান করা হবে।',
      author: 'শিক্ষা বিভাগ',
      date: '১০ জানুয়ারি, ২০২৪',
      readTime: '৫ মিনিট',
      tags: ['শিক্ষা', 'বৃত্তি', 'কর্মসূচি']
    },
    {
      id: 3,
      title: 'বার্ষিক স্বাস্থ্য ক্যাম্প সফলভাবে সম্পন্ন',
      category: 'events',
      image: '/assets/program2.jpg',
      excerpt: 'তিন দিনব্যাপী বার্ষিক স্বাস্থ্য ক্যাম্পে ২০০০+ রোগী বিনামূল্যে চিকিৎসা সেবা পেয়েছেন।',
      content: 'গত ২৫-২৭ নভেম্বর অনুষ্ঠিত তিন দিনব্যাপী বার্ষিক স্বাস্থ্য ক্যাম্পে ২০০০+ রোগী বিনামূল্যে চিকিৎসা সেবা পেয়েছেন। এই ক্যাম্পে ২০ জন অভিজ্ঞ ডাক্তার সেবা প্রদান করেছেন।',
      author: 'স্বাস্থ্য বিভাগ',
      date: '২৮ নভেম্বর, ২০২৩',
      readTime: '৪ মিনিট',
      tags: ['স্বাস্থ্য', 'ক্যাম্প', 'চিকিৎসা']
    },
    {
      id: 4,
      title: 'শীতবস্ত্র বিতরণ কর্মসূচি শুরু',
      category: 'announcements',
      image: '/assets/unnamed.jpg',
      excerpt: 'আসন্ন শীতে অসহায় মানুষদের জন্য শীতবস্ত্র বিতরণ কর্মসূচি শুরু হয়েছে।',
      content: 'শীতকাল আসার সাথে সাথে আহাম্মদ ফাউন্ডেশন অসহায় মানুষদের জন্য শীতবস্ত্র বিতরণ কর্মসূচি শুরু করেছে। এই কর্মসূচির আওতায় ১০০০ পরিবারে কম্বল ও গরম কাপড় বিতরণ করা হবে।',
      author: 'সেবা বিভাগ',
      date: '২০ ডিসেম্বর, ২০২৩',
      readTime: '৩ মিনিট',
      tags: ['শীতবস্ত্র', 'বিতরণ', 'সহায়তা']
    },
    {
      id: 5,
      title: 'নতুন স্বেচ্ছাসেবক প্রশিক্ষণ কর্মসূচি',
      category: 'programs',
      image: '/assets/about.jpg',
      excerpt: 'নতুন স্বেচ্ছাসেবকদের জন্য বিশেষ প্রশিক্ষণ কর্মসূচির আয়োজন করা হয়েছে।',
      content: 'আহাম্মদ ফাউন্ডেশনে যোগদানকারী নতুন স্বেচ্ছাসেবকদের জন্য একটি বিশেষ প্রশিক্ষণ কর্মসূচির আয়োজন করা হয়েছে। এই প্রশিক্ষণে সেবার মানসিকতা ও কৌশল শেখানো হবে।',
      author: 'প্রশিক্ষণ বিভাগ',
      date: '৫ জানুয়ারি, ২০২৪',
      readTime: '৪ মিনিট',
      tags: ['প্রশিক্ষণ', 'স্বেচ্ছাসেবক', 'দক্ষতা']
    },
    {
      id: 6,
      title: 'রমজান খাদ্য সহায়তা কর্মসূচি ঘোষণা',
      category: 'announcements',
      image: '/assets/program3.jpg',
      excerpt: 'আসন্ন রমজান মাসে দরিদ্র পরিবারগুলোর জন্য বিশেষ খাদ্য সহায়তা কর্মসূচি ঘোষণা।',
      content: 'আসন্ন রমজান মাসে দরিদ্র পরিবারগুলোর জন্য আহাম্মদ ফাউন্ডেশন বিশেষ খাদ্য সহায়তা কর্মসূচি ঘোষণা করেছে। এই কর্মসূচির আওতায় ৩০০০ পরিবারে খাদ্য সামগ্রী বিতরণ করা হবে।',
      author: 'খাদ্য বিভাগ',
      date: '১ ফেব্রুয়ারি, ২০২৪',
      readTime: '৩ মিনিট',
      tags: ['রমজান', 'খাদ্য', 'সহায়তা']
    },
    {
      id: 7,
      title: 'কম্পিউটার প্রশিক্ষণ কেন্দ্র উদ্বোধন',
      category: 'events',
      image: '/assets/gallery-1.png',
      excerpt: 'যুবকদের জন্য নতুন কম্পিউটার প্রশিক্ষণ কেন্দ্র উদ্বোধন করা হয়েছে।',
      content: 'আহাম্মদ ফাউন্ডেশনের নতুন কম্পিউটার প্রশিক্ষণ কেন্দ্র উদ্বোধন করা হয়েছে। এই কেন্দ্রে যুবকরা বিনামূল্যে কম্পিউটার ও ডিজিটাল সাক্ষরতার প্রশিক্ষণ নিতে পারবেন।',
      author: 'প্রযুক্তি বিভাগ',
      date: '১৮ নভেম্বর, ২০২৩',
      readTime: '৫ মিনিট',
      tags: ['কম্পিউটার', 'প্রশিক্ষণ', 'যুব']
    },
    {
      id: 8,
      title: 'আন্তর্জাতিক দাতা সংস্থার সাথে চুক্তি',
      category: 'achievements',
      image: '/assets/gallery-2.png',
      excerpt: 'একটি আন্তর্জাতিক দাতা সংস্থার সাথে নতুন প্রকল্পের জন্য চুক্তি স্বাক্ষরিত হয়েছে।',
      content: 'আহাম্মদ ফাউন্ডেশন একটি আন্তর্জাতিক দাতা সংস্থার সাথে শিক্ষা ও স্বাস্থ্য খাতে নতুন প্রকল্পের জন্য চুক্তি স্বাক্ষর করেছে। এই চুক্তির মাধ্যমে আরো বেশি মানুষের কাছে সেবা পৌঁছানো সম্ভব হবে।',
      author: 'পরিচালনা বোর্ড',
      date: '৩ ডিসেম্বর, ২০২৩',
      readTime: '৬ মিনিট',
      tags: ['চুক্তি', 'আন্তর্জাতিক', 'প্রকল্প']
    },
    {
      id: 9,
      title: 'মাতৃত্বকালীন সেবা কর্মসূচি সম্প্রসারণ',
      category: 'programs',
      image: '/assets/gallery-3.png',
      excerpt: 'গর্ভবতী মায়েদের জন্য মাতৃত্বকালীন সেবা কর্মসূচি আরো এলাকায় সম্প্রসারণ করা হয়েছে।',
      content: 'আহাম্মদ ফাউন্ডেশনের মাতৃত্বকালীন সেবা কর্মসূচি আরো ১০টি এলাকায় সম্প্রসারণ করা হয়েছে। এই কর্মসূচির মাধ্যমে গর্ভবতী মায়েরা বিনামূল্যে চিকিৎসা সেবা ও পুষ্টি সহায়তা পাবেন।',
      author: 'মাতৃ ও শিশু বিভাগ',
      date: '২৫ জানুয়ারি, ২০২৪',
      readTime: '৪ মিনিট',
      tags: ['মাতৃত্ব', 'স্বাস্থ্য', 'সম্প্রসারণ']
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === activeCategory);

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, startIndex + articlesPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory]);

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
            <h1 className="text-5xl font-bold mb-4">সংবাদ ও ঘটনা</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              আমাদের সর্বশেষ কার্যক্রম ও অর্জনের খবর
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

      {/* News Articles */}
      <section 
        ref={setSectionRef('news')}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {currentArticles.map((article, index) => (
              <article
                key={article.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                  isVisible.news ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {categories.find(cat => cat.id === article.category)?.name}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm">
                    {article.readTime} পড়তে
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span>লেখক: {article.author}</span>
                    <span>{article.date}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    বিস্তারিত পড়ুন
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div
              className={`flex justify-center mt-12 transform transition-all duration-1000 delay-600 ${
                isVisible.news ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  পূর্ববর্তী
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      currentPage === index + 1
                        ? 'bg-green-600 text-white'
                        : 'bg-white border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  পরবর্তী
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
