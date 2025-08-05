'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  const categories = [
    { id: 'all', name: 'সকল ছবি', icon: '🖼️' },
    { id: 'education', name: 'শিক্ষা কর্মসূচি', icon: '📚' },
    { id: 'health', name: 'স্বাস্থ্য সেবা', icon: '🏥' },
    { id: 'food', name: 'খাদ্য বিতরণ', icon: '🍽️' },
    { id: 'events', name: 'অনুষ্ঠান', icon: '🎉' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: '/assets/gallery-1.png',
      title: 'কম্পিউটার প্রশিক্ষণ কর্মসূচি',
      category: 'education',
      description: 'যুবকদের জন্য বিনামূল্যে কম্পিউটার প্রশিক্ষণ কর্মসূচির একটি দৃশ্য',
      date: '১৫ জানুয়ারি, ২০২৩'
    },
    {
      id: 2,
      src: '/assets/gallery-2.png',
      title: 'স্বাস্থ্য ক্যাম্প',
      category: 'health',
      description: 'গ্রামীণ এলাকায় আয়োজিত বিনামূল্যে স্বাস্থ্য ক্যাম্প',
      date: '২২ ফেব্রুয়ারি, ২০২৩'
    },
    {
      id: 3,
      src: '/assets/gallery-3.png',
      title: 'খাদ্য বিতরণ কর্মসূচি',
      category: 'food',
      description: 'দুর্গত এলাকায় খাদ্য সামগ্রী বিতরণ কর্মসূচি',
      date: '১০ মার্চ, ২০২৩'
    },
    {
      id: 4,
      src: '/assets/gallery-4.png',
      title: 'বার্ষিক সম্মেলন',
      category: 'events',
      description: 'আহাম্মদ ফাউন্ডেশনের বার্ষিক সম্মেলন ও পুরস্কার বিতরণী',
      date: '৫ এপ্রিল, ২০২৩'
    },
    {
      id: 5,
      src: '/assets/program1.jpg',
      title: 'শিক্ষা বৃত্তি প্রদান',
      category: 'education',
      description: 'মেধাবী শিক্ষার্থীদের মধ্যে বৃত্তি প্রদান অনুষ্ঠান',
      date: '১৮ মে, ২০২৩'
    },
    {
      id: 6,
      src: '/assets/program2.jpg',
      title: 'চিকিৎসা সেবা',
      category: 'health',
      description: 'বিনামূল্যে চিকিৎসা সেবা ও ওষুধ বিতরণ কর্মসূচি',
      date: '২৫ জুন, ২০২৩'
    },
    {
      id: 7,
      src: '/assets/program3.jpg',
      title: 'ইফতার বিতরণ',
      category: 'food',
      description: 'রমজান মাসে দরিদ্র পরিবারগুলোর মধ্যে ইফতার বিতরণ',
      date: '১২ জুলাই, ২০২৩'
    },
    {
      id: 8,
      src: '/assets/about.jpg',
      title: 'স্বেচ্ছাসেবক প্রশিক্ষণ',
      category: 'events',
      description: 'নতুন স্বেচ্ছাসেবকদের জন্য প্রশিক্ষণ কর্মসূচি',
      date: '৮ আগস্ট, ২০২৩'
    },
    {
      id: 9,
      src: '/assets/unnamed.jpg',
      title: 'শীতবস্ত্র বিতরণ',
      category: 'food',
      description: 'শীতকালে অসহায় মানুষদের মধ্যে কম্বল ও গরম কাপড় বিতরণ',
      date: '২০ ডিসেম্বর, ২০২৩'
    }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === activeCategory);

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

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
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
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-700 flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">ছবির গ্যালারী</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              আমাদের কার্যক্রমের স্মৃতিময় মুহূর্তগুলো
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

      {/* Gallery Grid */}
      <section 
        ref={setSectionRef('gallery')}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => openLightbox(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg bg-white">
                  <div className="relative h-64">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-2 line-clamp-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {image.description}
                    </p>
                    <p className="text-green-600 text-xs font-semibold">
                      {image.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            <div className="relative">
              <Image
                src={selectedImage.src}
                alt={selectedImage.title}
                width={800}
                height={600}
                className="object-contain max-h-[80vh] w-auto"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white p-4">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <p className="text-green-400 text-sm">{selectedImage.date}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
