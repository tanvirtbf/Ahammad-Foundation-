'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  const categories = [
    { id: 'all', name: 'সকল ভিডিও', icon: '🎬' },
    { id: 'programs', name: 'কর্মসূচি', icon: '📋' },
    { id: 'events', name: 'অনুষ্ঠান', icon: '🎉' },
    { id: 'testimonials', name: 'প্রশংসাপত্র', icon: '💬' },
    { id: 'awareness', name: 'সচেতনতা', icon: '📢' }
  ];

  const videos = [
    {
      id: 1,
      title: 'আহাম্মদ ফাউন্ডেশনের পরিচিতি',
      category: 'programs',
      thumbnail: '/assets/desktopHero.png',
      videoId: 'dQw4w9WgXcQ', // YouTube video ID (dummy)
      description: 'আহাম্মদ ফাউন্ডেশনের কার্যক্রম ও উদ্দেশ্য সম্পর্কে বিস্তারিত পরিচিতি',
      duration: '৫:৩০',
      views: '১২,৫০০',
      date: '১৫ জানুয়ারি, ২০২৩'
    },
    {
      id: 2,
      title: 'শিক্ষা বৃত্তি প্রদান অনুষ্ঠান',
      category: 'events',
      thumbnail: '/assets/program1.jpg',
      videoId: 'dQw4w9WgXcQ',
      description: 'মেধাবী শিক্ষার্থীদের মধ্যে বৃত্তি প্রদান অনুষ্ঠানের সম্পূর্ণ ভিডিও',
      duration: '১২:১৫',
      views: '৮,৭০০',
      date: '২২ ফেব্রুয়ারি, ২০২৩'
    },
    {
      id: 3,
      title: 'স্বাস্থ্য ক্যাম্পের সফলতার গল্প',
      category: 'testimonials',
      thumbnail: '/assets/program2.jpg',
      videoId: 'dQw4w9WgXcQ',
      description: 'গ্রামীণ এলাকায় স্বাস্থ্য ক্যাম্পে চিকিৎসা নেওয়া রোগীদের অভিজ্ঞতা',
      duration: '৮:৪৫',
      views: '৬,২০০',
      date: '১০ মার্চ, ২০২৩'
    },
    {
      id: 4,
      title: 'খাদ্য নিরাপত্তার গুরুত্ব',
      category: 'awareness',
      thumbnail: '/assets/program3.jpg',
      videoId: 'dQw4w9WgXcQ',
      description: 'খাদ্য নিরাপত্তা ও পুষ্টি সচেতনতা বিষয়ক শিক্ষামূলক ভিডিও',
      duration: '৬:২০',
      views: '৯,৮০০',
      date: '৫ এপ্রিল, ২০২৩'
    },
    {
      id: 5,
      title: 'বার্ষিক সম্মেলন ২০২ৃ',
      category: 'events',
      thumbnail: '/assets/gallery-4.png',
      videoId: 'dQw4w9WgXcQ',
      description: 'আহাম্মদ ফাউন্ডেশনের বার্ষিক সম্মেলন ও পুরস্কার বিতরণী অনুষ্ঠান',
      duration: '২৫:১০',
      views: '১৫,৩০০',
      date: '১৮ মে, ২০২৩'
    },
    {
      id: 6,
      title: 'স্বেচ্ছাসেবকদের প্রশিক্ষণ',
      category: 'programs',
      thumbnail: '/assets/about.jpg',
      videoId: 'dQw4w9WgXcQ',
      description: 'নতুন স্বেচ্ছাসেবকদের জন্য আয়োজিত প্রশিক্ষণ কর্মসূচির ভিডিও',
      duration: '১৫:৩৫',
      views: '৪,৯০০',
      date: '২৫ জুন, ২০২৩'
    },
    {
      id: 7,
      title: 'উপকারভোগীদের কৃতজ্ঞতা',
      category: 'testimonials',
      thumbnail: '/assets/gallery-1.png',
      videoId: 'dQw4w9WgXcQ',
      description: 'আমাদের সেবা গ্রহণকারী পরিবারগুলোর কৃতজ্ঞতা ও অভিজ্ঞতা',
      duration: '১০:২৫',
      views: '৭,৬০০',
      date: '১২ জুলাই, ২০২৩'
    },
    {
      id: 8,
      title: 'কোভিড-১৯ সহায়তা কর্মসূচি',
      category: 'programs',
      thumbnail: '/assets/unnamed.jpg',
      videoId: 'dQw4w9WgXcQ',
      description: 'কোভিড-১৯ মহামারীর সময় আমাদের জরুরি সহায়তা কর্মসূচির ডকুমেন্টারি',
      duration: '১৮:৫০',
      views: '২০,১০০',
      date: '৮ আগস্ট, ২০২৩'
    },
    {
      id: 9,
      title: 'পরিচ্ছন্নতা সচেতনতা',
      category: 'awareness',
      thumbnail: '/assets/gallery-2.png',
      videoId: 'dQw4w9WgXcQ',
      description: 'স্বাস্থ্য ও পরিচ্ছন্নতা বিষয়ক সচেতনতামূলক ভিডিও',
      duration: '৭:১৫',
      views: '৫,৮০০',
      date: '২০ সেপ্টেম্বর, ২০২৩'
    }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

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

  const openVideoModal = (video) => {
    setSelectedVideo(video);
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-700 flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">ভিডিও গ্যালারী</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              আমাদের কার্যক্রম ও অনুষ্ঠানের ভিডিও সংগ্রহ
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

      {/* Videos Grid */}
      <section 
        ref={setSectionRef('videos')}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={video.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                  isVisible.videos ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onClick={() => openVideoModal(video)}
              >
                <div className="relative h-48 overflow-hidden group">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 rounded-full p-4 transform transition-all duration-300 group-hover:scale-110">
                      <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
                    {video.views} দর্শন
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {video.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      {categories.find(cat => cat.id === video.category)?.name}
                    </span>
                    <span>{video.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <button
              onClick={closeVideoModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="relative aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1`}
                  title={selectedVideo.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {selectedVideo.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {selectedVideo.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
                      {categories.find(cat => cat.id === selectedVideo.category)?.name}
                    </span>
                    <span>⏱️ {selectedVideo.duration}</span>
                    <span>👁️ {selectedVideo.views} দর্শন</span>
                  </div>
                  <span>📅 {selectedVideo.date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideosPage;
