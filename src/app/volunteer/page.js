'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const VolunteerPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    occupation: '',
    address: '',
    interests: [],
    experience: '',
    availability: '',
    motivation: '',
    skills: '',
    emergencyContact: '',
    emergencyPhone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  const interestOptions = [
    'শিক্ষা সহায়তা',
    'স্বাস্থ্য সেবা',
    'খাদ্য বিতরণ',
    'দুর্যোগ ব্যবস্থাপনা',
    'কমিউনিটি উন্নয়ন',
    'প্রশিক্ষণ ও কর্মশালা',
    'তহবিল সংগ্রহ',
    'প্রচার ও যোগাযোগ'
  ];

  const availabilityOptions = [
    'সপ্তাহান্তে',
    'সন্ধ্যার পর',
    'দিনের বেলা',
    'পূর্ণকালীন',
    'প্রয়োজন অনুযায়ী'
  ];

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleInterestChange = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        age: '',
        occupation: '',
        address: '',
        interests: [],
        experience: '',
        availability: '',
        motivation: '',
        skills: '',
        emergencyContact: '',
        emergencyPhone: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-green-600 to-green-700 flex items-center">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">স্বেচ্ছাসেবক নিবন্ধন</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              আমাদের সাথে যুক্ত হয়ে সমাজ সেবায় অংশগ্রহণ করুন
            </p>
          </div>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section 
        ref={setSectionRef('why')}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.why ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">কেন স্বেচ্ছাসেবক হবেন?</h2>
            <div className="w-20 h-1 bg-green-600 rounded mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '❤️', title: 'সমাজ সেবা', desc: 'সমাজের কল্যাণে অবদান রাখুন' },
              { icon: '🤝', title: 'নেটওয়ার্কিং', desc: 'নতুন মানুষের সাথে পরিচয়' },
              { icon: '📈', title: 'দক্ষতা বৃদ্ধি', desc: 'নতুন দক্ষতা অর্জন করুন' },
              { icon: '🌟', title: 'অভিজ্ঞতা', desc: 'মূল্যবান অভিজ্ঞতা লাভ করুন' }
            ].map((benefit, index) => (
              <div
                key={index}
                className={`text-center bg-gray-50 p-6 rounded-xl shadow-lg transform transition-all duration-1000 hover:scale-105 ${
                  isVisible.why ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section 
        ref={setSectionRef('form')}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div
              className={`text-center mb-12 transform transition-all duration-1000 ${
                isVisible.form ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">নিবন্ধন ফর্ম</h2>
              <p className="text-gray-600 text-lg">
                নিচের ফর্মটি পূরণ করে আমাদের স্বেচ্ছাসেবক দলে যোগ দিন
              </p>
            </div>

            <div
              className={`bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-1000 delay-300 ${
                isVisible.form ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">
                    সফলভাবে নিবন্ধিত হয়েছেন!
                  </h3>
                  <p className="text-gray-600">
                    আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। ধন্যবাদ!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">ব্যক্তিগত তথ্য</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          পূর্ণ নাম *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="আপনার পূর্ণ নাম লিখুন"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          ইমেইল *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          মোবাইল নম্বর *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="০১৭xxxxxxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          বয়স *
                        </label>
                        <input
                          type="number"
                          name="age"
                          value={formData.age}
                          onChange={handleInputChange}
                          required
                          min="16"
                          max="70"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="২৫"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          পেশা
                        </label>
                        <input
                          type="text"
                          name="occupation"
                          value={formData.occupation}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="আপনার পেশা"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          ঠিকানা *
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="আপনার সম্পূর্ণ ঠিকানা"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">আগ্রহের ক্ষেত্র</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                      {interestOptions.map((interest) => (
                        <label
                          key={interest}
                          className="flex items-center space-x-3 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestChange(interest)}
                            className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                          />
                          <span className="text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      সময়ের সুবিধা
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">সময়ের সুবিধা নির্বাচন করুন</option>
                      {availabilityOptions.map((option) => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>

                  {/* Text Areas */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        পূর্ব অভিজ্ঞতা
                      </label>
                      <textarea
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="স্বেচ্ছাসেবা বা সমাজসেবায় আপনার পূর্ব অভিজ্ঞতা"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        বিশেষ দক্ষতা
                      </label>
                      <textarea
                        name="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="আপনার বিশেষ দক্ষতা বা যোগ্যতা"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      স্বেচ্ছাসেবক হওয়ার কারণ *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                      placeholder="কেন আপনি আমাদের সাথে স্বেচ্ছাসেবক হিসেবে কাজ করতে চান?"
                    />
                  </div>

                  {/* Emergency Contact */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">জরুরি যোগাযোগ</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          জরুরি যোগাযোগের নাম
                        </label>
                        <input
                          type="text"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="জরুরি অবস্থায় যোগাযোগের ব্যক্তির নাম"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          জরুরি যোগাযোগের নম্বর
                        </label>
                        <input
                          type="tel"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="০১৭xxxxxxxx"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-green-600 hover:bg-green-700 text-white px-12 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>জমা দেওয়া হচ্ছে...</span>
                        </div>
                      ) : (
                        'নিবন্ধন সম্পন্ন করুন'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerPage;
