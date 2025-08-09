'use client';
import { useState } from 'react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    address: '',
    education: '',
    profession: '',
    experience: '',
    interests: [],
    availability: '',
    motivation: '',
    skills: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    { id: 'education', label: 'শিক্ষা সহায়তা', icon: '📚' },
    { id: 'health', label: 'স্বাস্থ্য সেবা', icon: '🏥' },
    { id: 'food', label: 'খাদ্য বিতরণ', icon: '🍽️' },
    { id: 'disaster', label: 'দুর্যোগ ত্রাণ', icon: '🆘' },
    { id: 'training', label: 'প্রশিক্ষণ', icon: '🛠️' },
    { id: 'fundraising', label: 'তহবিল সংগ্রহ', icon: '💰' },
    { id: 'admin', label: 'প্রশাসনিক কাজ', icon: '📋' },
    { id: 'media', label: 'মিডিয়া ও প্রচার', icon: '📢' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleInterestChange = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'নাম আবশ্যক';
    if (!formData.email.trim()) newErrors.email = 'ইমেইল আবশ্যক';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'সঠিক ইমেইল দিন';
    if (!formData.phone.trim()) newErrors.phone = 'ফোন নম্বর আবশ্যক';
    else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) newErrors.phone = 'সঠিক ফোন নম্বর দিন';
    if (!formData.age) newErrors.age = 'বয়স আবশ্যক';
    else if (formData.age < 16 || formData.age > 80) newErrors.age = 'বয়স ১৬-৮০ এর মধ্যে হতে হবে';
    if (!formData.gender) newErrors.gender = 'লিঙ্গ নির্বাচন করুন';
    if (!formData.address.trim()) newErrors.address = 'ঠিকানা আবশ্যক';
    if (!formData.education.trim()) newErrors.education = 'শিক্ষাগত যোগ্যতা আবশ্যক';
    if (!formData.availability) newErrors.availability = 'সময় নির্বাচন করুন';
    if (!formData.motivation.trim()) newErrors.motivation = 'অনুপ্রেরণা লিখুন';
    if (formData.interests.length === 0) newErrors.interests = 'কমপক্ষে একটি আগ্রহের ক্ষেত্র নির্বাচন করুন';
    if (!formData.emergencyContact.trim()) newErrors.emergencyContact = 'জরুরি যোগাযোগের নাম আবশ্যক';
    if (!formData.emergencyPhone.trim()) newErrors.emergencyPhone = 'জরুরি যোগাযোগের ফোন আবশ্যক';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            সফলভাবে নিবন্ধিত হয়েছে!
          </h2>
          <p className="text-gray-600 mb-6">
            আপনার আবেদন পেয়েছি। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', email: '', phone: '', age: '', gender: '', address: '',
                education: '', profession: '', experience: '', interests: [],
                availability: '', motivation: '', skills: '', emergencyContact: '', emergencyPhone: ''
              });
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            নতুন আবেদন করুন
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            স্বেচ্ছাসেবক নিবন্ধন
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমাদের সাথে যুক্ত হয়ে সমাজের কল্যাণে অবদান রাখুন। 
            আপনার সময় ও দক্ষতা দিয়ে অসহায় মানুষদের পাশে দাঁড়ান।
          </p>
        </div>
      </section>

      {/* Why Volunteer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              কেন স্বেচ্ছাসেবক হবেন?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "❤️",
                title: "সমাজসেবা",
                description: "অসহায় মানুষদের পাশে দাঁড়িয়ে সমাজে ইতিবাচক পরিবর্তন আনুন"
              },
              {
                icon: "🤝",
                title: "নেটওয়ার্কিং",
                description: "সমমনা মানুষদের সাথে পরিচিত হন এবং নতুন বন্ধুত্ব গড়ুন"
              },
              {
                icon: "🎯",
                title: "দক্ষতা বৃদ্ধি",
                description: "নতুন দক্ষতা শিখুন এবং নেতৃত্বের গুণাবলী বিকশিত করুন"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              নিবন্ধন ফর্ম
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    পূর্ণ নাম *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ইমেইল ঠিকানা *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ফোন নম্বর *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+৮৮০ ১৭xxxxxxxx"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    বয়স *
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleInputChange}
                    min="16"
                    max="80"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="২৫"
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  লিঙ্গ *
                </label>
                <div className="flex space-x-4">
                  {['পুরুষ', 'মহিলা', 'অন্যান্য'].map((gender) => (
                    <label key={gender} className="flex items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={gender}
                        checked={formData.gender === gender}
                        onChange={handleInputChange}
                        className="mr-2 text-green-600 focus:ring-green-500"
                      />
                      {gender}
                    </label>
                  ))}
                </div>
                {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
              </div>

              {/* Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ঠিকানা *
                </label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  rows="3"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                />
                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
              </div>

              {/* Education and Profession */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    শিক্ষাগত যোগ্যতা *
                  </label>
                  <input
                    type="text"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.education ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="যেমন: স্নাতক, এইচএসসি ইত্যাদি"
                  />
                  {errors.education && <p className="text-red-500 text-sm mt-1">{errors.education}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    পেশা
                  </label>
                  <input
                    type="text"
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="আপনার বর্তমান পেশা"
                  />
                </div>
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  আগ্রহের ক্ষেত্র * (একাধিক নির্বাচন করতে পারেন)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {interestOptions.map((interest) => (
                    <label
                      key={interest.id}
                      className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                        formData.interests.includes(interest.id)
                          ? 'border-green-500 bg-green-50 text-green-700'
                          : 'border-gray-300 hover:border-green-300'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest.id)}
                        onChange={() => handleInterestChange(interest.id)}
                        className="sr-only"
                      />
                      <span className="text-xl mr-2">{interest.icon}</span>
                      <span className="text-sm font-medium">{interest.label}</span>
                    </label>
                  ))}
                </div>
                {errors.interests && <p className="text-red-500 text-sm mt-1">{errors.interests}</p>}
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  সময়ের সুবিধা *
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.availability ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">নির্বাচন করুন</option>
                  <option value="weekends">শুধু সপ্তাহান্তে</option>
                  <option value="weekdays">সপ্তাহের দিনে</option>
                  <option value="flexible">যেকোনো সময়</option>
                  <option value="evenings">সন্ধ্যার পর</option>
                </select>
                {errors.availability && <p className="text-red-500 text-sm mt-1">{errors.availability}</p>}
              </div>

              {/* Skills and Experience */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    বিশেষ দক্ষতা
                  </label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="যেমন: কম্পিউটার, ভাষা, চিকিৎসা ইত্যাদি"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    পূর্ব অভিজ্ঞতা
                  </label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="স্বেচ্ছাসেবী কাজের পূর্ব অভিজ্ঞতা থাকলে লিখুন"
                  />
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    জরুরি যোগাযোগের নাম *
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.emergencyContact ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="জরুরি অবস্থায় যোগাযোগের নাম"
                  />
                  {errors.emergencyContact && <p className="text-red-500 text-sm mt-1">{errors.emergencyContact}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    জরুরি যোগাযোগের ফোন *
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.emergencyPhone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+৮৮০ ১৭xxxxxxxx"
                  />
                  {errors.emergencyPhone && <p className="text-red-500 text-sm mt-1">{errors.emergencyPhone}</p>}
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  স্বেচ্ছাসেবক হওয়ার অনুপ্রেরণা *
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.motivation ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="কেন আপনি আমাদের সাথে স্বেচ্ছাসেবক হিসেবে কাজ করতে চান?"
                />
                {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      জমা দেওয়া হচ্ছে...
                    </span>
                  ) : (
                    'নিবন্ধন সম্পন্ন করুন'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
