"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function GalleryGrid({ images }) {
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

  const filteredImages = activeCategory === 'all' 
    ? images 
    : images.filter(image => image.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const getImageUrl = (imageId) => {
    // Placeholder image generator for demo
    return `https://picsum.photos/800/600?random=${imageId}`;
  };

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-white" aria-labelledby="gallery-filter-heading">
        <div className="container mx-auto px-4">
          <h2 id="gallery-filter-heading" className="sr-only">ছবি ফিল্টার</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => {
              const count = category.id === 'all' 
                ? images.length 
                : images.filter(img => img.category === category.id).length;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-green-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                  }`}
                  aria-pressed={activeCategory === category.id}
                  aria-label={`${category.name} ছবি দেখুন (${count}টি)`}
                >
                  <span className="text-lg" aria-hidden="true">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeCategory === category.id 
                      ? 'bg-white/20 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50" aria-labelledby="gallery-heading">
        <div className="container mx-auto px-4">
          <h2 id="gallery-heading" className="sr-only">ছবির গ্যালারি</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <article
                key={image.id}
                className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
                itemScope
                itemType="https://schema.org/ImageObject"
              >
                <div className="aspect-square relative overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center cursor-pointer"
                    onClick={() => openModal(image)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openModal(image);
                      }
                    }}
                    aria-label={`${image.title} ছবি বড় করে দেখুন`}
                  >
                    <span className="text-white text-4xl" aria-hidden="true">
                      {categories.find(cat => cat.id === image.category)?.icon || '📷'}
                    </span>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-semibold">
                      দেখুন
                    </span>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2" itemProp="name">
                    {image.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-2" itemProp="description">
                    {image.description}
                  </p>
                  <time 
                    className="text-xs text-green-600 font-medium"
                    dateTime={image.date}
                    itemProp="dateCreated"
                  >
                    {image.date}
                  </time>
                  
                  {/* Hidden structured data */}
                  <meta itemProp="creator" content="আহাম্মদ ফাউন্ডেশন" />
                  <meta itemProp="copyrightHolder" content="আহাম্মদ ফাউন্ডেশন" />
                  <meta itemProp="contentUrl" content={getImageUrl(image.id)} />
                </div>
              </article>
            ))}
          </div>

          {/* No results message */}
          {filteredImages.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                এই বিভাগে কোনো ছবি পাওয়া যায়নি।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="max-w-4xl max-h-full bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
                aria-label="ছবি বন্ধ করুন"
              >
                ✕
              </button>
              
              <div className="aspect-video bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-8xl" aria-hidden="true">
                  {categories.find(cat => cat.id === selectedImage.category)?.icon || '📷'}
                </span>
              </div>
              
              <div className="p-6">
                <h3 id="modal-title" className="text-2xl font-bold text-gray-800 mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {selectedImage.description}
                </p>
                <time className="text-green-600 font-medium">
                  {selectedImage.date}
                </time>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
