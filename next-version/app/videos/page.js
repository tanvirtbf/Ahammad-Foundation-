'use client';
import { useState } from 'react';

export default function Videos() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const categories = [
    { id: 'all', name: 'সব ভিডিও', icon: '🎬' },
    { id: 'documentary', name: 'ডকুমেন্টারি', icon: '📹' },
    { id: 'events', name: 'অনুষ্ঠান', icon: '🎉' },
    { id: 'testimonial', name: 'সাক্ষাৎকার', icon: '🎤' },
    { id: 'training', name: 'প্রশিক্ষণ', icon: '🎓' },
    { id: 'awareness', name: 'সচেতনতা', icon: '📢' }
  ];

  const videos = [
    {
      id: 1,
      title: "আহাম্মদ ফাউন্ডেশনের যাত্রা",
      category: "documentary",
      description: "আমাদের ৮ বছরের সেবার ইতিহাস এবং অর্জনের গল্প",
      duration: "১৫:৩০",
      views: "১২,৫০০",
      date: "১৫ জানুয়ারি, ২০২৫",
      thumbnail: "/videos/thumb1.jpg"
    },
    {
      id: 2,
      title: "শিক্ষা বৃত্তি প্রদান অনুষ্ঠান ২০২৫",
      category: "events",
      description: "মেধাবী শিক্ষার্থীদের মধ্যে বৃত্তি প্রদান অনুষ্ঠানের সম্পূর্ণ ভিডিও",
      duration: "২৫:১৫",
      views: "৮,৭৫০",
      date: "১০ জানুয়ারি, ২০২৫",
      thumbnail: "/videos/thumb2.jpg"
    },
    {
      id: 3,
      title: "উপকারভোগীদের সাক্ষাৎকার",
      category: "testimonial",
      description: "আমাদের সাহায্য পাওয়া পরিবারগুলোর অভিজ্ঞতা ও মতামত",
      duration: "১২:৪৫",
      views: "৬,২০০",
      date: "৫ জানুয়ারি, ২০২৫",
      thumbnail: "/videos/thumb3.jpg"
    },
    {
      id: 4,
      title: "কারিগরি প্রশিক্ষণ কর্মশালা",
      category: "training",
      description: "যুবকদের জন্য কম্পিউটার ও কারিগরি প্রশিক্ষণের ভিডিও",
      duration: "৩০:২০",
      views: "৪,৮৯০",
      date: "২৮ ডিসেম্বর, ২০২৪",
      thumbnail: "/videos/thumb4.jpg"
    },
    {
      id: 5,
      title: "স্বাস্থ্য সচেতনতা ক্যাম্পেইন",
      category: "awareness",
      description: "কমিউনিটি স্বাস্থ্য সচেতনতা বৃদ্ধির জন্য প্রচারণা ভিডিও",
      duration: "৮:১০",
      views: "৯,৩৫০",
      date: "২০ ডিসেম্বর, ২০২৪",
      thumbnail: "/videos/thumb5.jpg"
    },
    {
      id: 6,
      title: "বার্ষিক সম্মেলন ২০২৪",
      category: "events",
      description: "স্বেচ্ছাসেবকদের বার্ষিক সম্মেলনের হাইলাইটস",
      duration: "৪৫:৩০",
      views: "১৫,৬৭০",
      date: "১৫ ডিসেম্বর, ২০২৪",
      thumbnail: "/videos/thumb6.jpg"
    },
    {
      id: 7,
      title: "মহিলা ক্ষমতায়ন প্রোগ্রাম",
      category: "training",
      description: "মহিলাদের আর্থিক স্বাবলম্বিতার জন্য প্রশিক্ষণ কর্মসূচি",
      duration: "২০:৪৫",
      views: "৭,২৩০",
      date: "১০ ডিসেম্বর, ২০২৪",
      thumbnail: "/videos/thumb7.jpg"
    },
    {
      id: 8,
      title: "দুর্যোগ ত্রাণ কার্যক্রম",
      category: "documentary",
      description: "বন্যা আক্রান্ত এলাকায় আমাদের ত্রাণ কার্যক্রমের ডকুমেন্টারি",
      duration: "১৮:২৫",
      views: "১১,৪৮০",
      date: "৫ ডিসেম্বর, ২০২৪",
      thumbnail: "/videos/thumb8.jpg"
    }
  ];

  const filteredVideos = activeCategory === 'all' 
    ? videos 
    : videos.filter(video => video.category === activeCategory);

  const openModal = (video) => {
    setSelectedVideo(video);
  };

  const closeModal = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            আমাদের ভিডিও গ্যালারী
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমাদের কার্যক্রম, অনুষ্ঠান এবং সেবার গল্প ভিডিওর মাধ্যমে দেখুন। 
            প্রতিটি ভিডিও আমাদের মিশনের একটি অংশ।
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

      {/* Featured Video */}
      {filteredVideos.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              ফিচার্ড ভিডিও
            </h2>
            <div className="max-w-4xl mx-auto">
              <div 
                className="relative aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openModal(filteredVideos[0])}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {filteredVideos[0].title}
                  </h3>
                  <p className="text-white opacity-90 mb-2">
                    {filteredVideos[0].description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-white opacity-75">
                    <span>⏱️ {filteredVideos[0].duration}</span>
                    <span>👁️ {filteredVideos[0].views} দর্শক</span>
                    <span>📅 {filteredVideos[0].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Videos Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.slice(1).map((video, index) => (
              <div 
                key={video.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-green-400 to-blue-500 rounded-t-xl overflow-hidden group">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all duration-300">
                      <div className="w-0 h-0 border-l-6 border-l-white border-t-4 border-t-transparent border-b-4 border-b-transparent ml-1"></div>
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {video.description}
                  </p>
                  
                  {/* Video Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <span className="flex items-center space-x-1">
                      <span>👁️</span>
                      <span>{video.views} দর্শক</span>
                    </span>
                    <span>{video.date}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center justify-between">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find(cat => cat.id === video.category)?.name}
                    </span>
                    <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                      দেখুন →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredVideos.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                কোনো ভিডিও পাওয়া যায়নি
              </h3>
              <p className="text-gray-500">
                এই ক্যাটেগরিতে এখনো কোনো ভিডিও আপলোড করা হয়নি।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>

            {/* Video Player */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-0 h-0 border-l-8 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-lg opacity-90">ভিডিও প্লেয়ার</p>
                  <p className="text-sm opacity-75">({selectedVideo.duration})</p>
                </div>
              </div>
              
              {/* Video Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedVideo.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>👁️ {selectedVideo.views} দর্শক</span>
                    <span>📅 {selectedVideo.date}</span>
                  </div>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === selectedVideo.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">ভিডিও পরিসংখ্যান</h2>
            <p className="text-xl opacity-90">
              আমাদের ভিডিও কন্টেন্টের প্রভাব
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "১০০+", label: "ভিডিও প্রকাশিত" },
              { number: "৫০,০০০+", label: "মোট দর্শক" },
              { number: "২৫+", label: "ঘন্টা কন্টেন্ট" },
              { number: "৯৫%", label: "পজিটিভ ফিডব্যাক" }
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
    </div>
  );
}
