'use client';
import { useState } from 'react';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = [
    { id: 'all', name: 'সব ছবি', icon: '🖼️' },
    { id: 'education', name: 'শিক্ষা', icon: '📚' },
    { id: 'health', name: 'স্বাস্থ্য', icon: '🏥' },
    { id: 'food', name: 'খাদ্য বিতরণ', icon: '🍽️' },
    { id: 'events', name: 'অনুষ্ঠান', icon: '🎉' },
    { id: 'training', name: 'প্রশিক্ষণ', icon: '🛠️' }
  ];

  const images = [
    {
      id: 1,
      title: "শিক্ষা বৃত্তি প্রদান অনুষ্ঠান",
      category: "education",
      description: "মেধাবী শিক্ষার্থীদের মধ্যে বৃত্তি প্রদান",
      date: "১৫ জানুয়ারি, ২০২৫"
    },
    {
      id: 2,
      title: "বিনামূল্যে স্বাস্থ্য ক্যাম্প",
      category: "health",
      description: "গ্রামাঞ্চলে চিকিৎসা সেবা প্রদান",
      date: "১০ জানুয়ারি, ২০২৫"
    },
    {
      id: 3,
      title: "শীতকালীন কম্বল বিতরণ",
      category: "food",
      description: "দরিদ্র পরিবারগুলোর মধ্যে কম্বল বিতরণ",
      date: "৫ জানুয়ারি, ২০২৫"
    },
    {
      id: 4,
      title: "বার্ষিক সম্মেলন ২০২৪",
      category: "events",
      description: "স্বেচ্ছাসেবকদের বার্ষিক সম্মেলন",
      date: "২৫ ডিসেম্বর, ২০২৪"
    },
    {
      id: 5,
      title: "কারিগরি প্রশিক্ষণ কর্মশালা",
      category: "training",
      description: "যুবকদের জন্য কম্পিউটার প্রশিক্ষণ",
      date: "২০ ডিসেম্বর, ২০২৪"
    },
    {
      id: 6,
      title: "নতুন স্কুল উদ্বোধন",
      category: "education",
      description: "গ্রামাঞ্চলে নতুন প্রাথমিক বিদ্যালয় উদ্বোধন",
      date: "১৫ ডিসেম্বর, ২০২৪"
    },
    {
      id: 7,
      title: "ইফতার বিতরণ কার্যক্রম",
      category: "food",
      description: "রমজান মাসে ইফতার বিতরণ",
      date: "১০ এপ্রিল, ২০২৪"
    },
    {
      id: 8,
      title: "চোখের চিকিৎসা ক্যাম্প",
      category: "health",
      description: "বিনামূল্যে চোখের পরীক্ষা ও চশমা বিতরণ",
      date: "৫ মার্চ, ২০২৪"
    },
    {
      id: 9,
      title: "মহিলা ক্ষমতায়ন কর্মশালা",
      category: "training",
      description: "মহিলাদের জন্য সেলাই প্রশিক্ষণ",
      date: "২৮ ফেব্রুয়ারি, ২০২৪"
    },
    {
      id: 10,
      title: "বন্যা ত্রাণ বিতরণ",
      category: "food",
      description: "বন্যা আক্রান্ত এলাকায় ত্রাণ সামগ্রী বিতরণ",
      date: "১৫ আগস্ট, ২০২৩"
    },
    {
      id: 11,
      title: "শিক্ষক প্রশিক্ষণ কর্মসূচি",
      category: "training",
      description: "গ্রামীণ শিক্ষকদের প্রশিক্ষণ কর্মসূচি",
      date: "১০ জুলাই, ২০২৩"
    },
    {
      id: 12,
      title: "স্বাস্থ্য সচেতনতা সেমিনার",
      category: "health",
      description: "কমিউনিটি স্বাস্থ্য সচেতনতা কর্মসূচি",
      date: "৫ জুন, ২০২৩"
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            আমাদের গ্যালারী
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমাদের বিভিন্ন কার্যক্রম ও অনুষ্ঠানের স্মৃতিচারণ। 
            প্রতিটি ছবি আমাদের সেবার গল্প বলে।
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

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(image)}
              >
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-4xl">
                    {categories.find(cat => cat.id === image.category)?.icon}
                  </span>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                    <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90">{image.date}</p>
                    <div className="mt-3">
                      <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-xs">
                        দেখুন
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📷</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                কোনো ছবি পাওয়া যায়নি
              </h3>
              <p className="text-gray-500">
                এই ক্যাটেগরিতে এখনো কোনো ছবি আপলোড করা হয়নি।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ›
            </button>

            {/* Image */}
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-6xl">
                  {categories.find(cat => cat.id === selectedImage.category)?.icon}
                </span>
              </div>
              
              {/* Image Info */}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {selectedImage.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {selectedImage.date}
                  </span>
                  <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                    {categories.find(cat => cat.id === selectedImage.category)?.name}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">আমাদের কার্যক্রমের পরিসংখ্যান</h2>
            <p className="text-xl text-gray-600">
              ছবির মাধ্যমে আমাদের কাজের প্রভাব
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "৫০০+", label: "ছবি সংগ্রহ" },
              { number: "১০০+", label: "কার্যক্রম নথিভুক্ত" },
              { number: "৫০+", label: "স্থান পরিদর্শন" },
              { number: "৮+", label: "বছরের ইতিহাস" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">
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
