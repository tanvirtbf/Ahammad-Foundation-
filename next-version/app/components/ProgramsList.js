"use client";
import { useState } from 'react';
import ProgramsFilter from './ProgramsFilter';

export default function ProgramsList({ programs }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPrograms = activeCategory === 'all' 
    ? programs 
    : programs.filter(program => program.category === activeCategory);

  const handleFilterChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  return (
    <>
      {/* Programs Filter */}
      <ProgramsFilter 
        programs={programs} 
        onFilterChange={handleFilterChange} 
      />

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50" aria-labelledby="programs-heading">
        <div className="container mx-auto px-4">
          <h2 id="programs-heading" className="sr-only">কার্যক্রমের তালিকা</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPrograms.map((program) => (
              <article
                key={program.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
                itemScope
                itemType="https://schema.org/Service"
              >
                {/* Program Image */}
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <span className="text-white text-6xl" aria-hidden="true">
                    {program.category === 'education' && '📚'}
                    {program.category === 'health' && '🏥'}
                    {program.category === 'food' && '🍽️'}
                    {program.category === 'skill' && '🛠️'}
                    {program.category === 'disaster' && '🆘'}
                    {program.category === 'women' && '👩'}
                  </span>
                </div>

                {/* Program Content */}
                <div className="p-6">
                  <header>
                    <h3 className="text-xl font-bold text-gray-800 mb-3" itemProp="name">
                      {program.title}
                    </h3>
                  </header>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed" itemProp="description">
                    {program.description}
                  </p>
                  
                  {/* Program Stats */}
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">উপকারভোগী:</span>
                      <span className="font-semibold text-green-600" itemProp="audience">
                        {program.beneficiaries}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">সময়কাল:</span>
                      <span className="font-semibold text-blue-600">
                        {program.duration}
                      </span>
                    </div>
                  </div>

                  {/* Program Details */}
                  <details className="mb-4">
                    <summary className="cursor-pointer text-green-600 font-medium hover:text-green-700 transition-colors">
                      বিস্তারিত দেখুন
                    </summary>
                    <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                      {program.details}
                    </p>
                  </details>

                  {/* Hidden structured data */}
                  <meta itemProp="provider" content="আহাম্মদ ফাউন্ডেশন" />
                  <meta itemProp="areaServed" content="Bangladesh" />
                </div>
              </article>
            ))}
          </div>

          {/* No results message */}
          {filteredPrograms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                এই বিভাগে কোনো কার্যক্রম পাওয়া যায়নি।
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
