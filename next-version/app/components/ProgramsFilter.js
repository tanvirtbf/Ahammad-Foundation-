"use client";
import { useState } from 'react';

export default function ProgramsFilter({ programs, onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'সব কার্যক্রম', icon: '🌟' },
    { id: 'education', label: 'শিক্ষা', icon: '📚' },
    { id: 'health', label: 'স্বাস্থ্য', icon: '🏥' },
    { id: 'food', label: 'খাদ্য', icon: '🍽️' },
    { id: 'skill', label: 'দক্ষতা', icon: '🛠️' },
    { id: 'disaster', label: 'দুর্যোগ', icon: '🆘' }
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    onFilterChange(categoryId);
  };

  const getFilteredCount = (categoryId) => {
    if (categoryId === 'all') return programs.length;
    return programs.filter(program => program.category === categoryId).length;
  };

  return (
    <section className="py-8 bg-white" aria-labelledby="filter-heading">
      <div className="container mx-auto px-4">
        <h2 id="filter-heading" className="sr-only">কার্যক্রম ফিল্টার</h2>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => {
            const count = getFilteredCount(category.id);
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-700'
                }`}
                aria-pressed={activeCategory === category.id}
                aria-label={`${category.label} কার্যক্রম দেখুন (${count}টি)`}
              >
                <span className="text-lg" aria-hidden="true">{category.icon}</span>
                <span>{category.label}</span>
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

        {/* Active Filter Info */}
        <div className="text-center text-gray-600">
          <p>
            {activeCategory === 'all' 
              ? `মোট ${programs.length}টি কার্যক্রম দেখানো হচ্ছে`
              : `${categories.find(c => c.id === activeCategory)?.label} বিভাগে ${getFilteredCount(activeCategory)}টি কার্যক্রম`
            }
          </p>
        </div>
      </div>
    </section>
  );
}
