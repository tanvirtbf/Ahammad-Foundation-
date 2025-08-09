'use client';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactTypes = [
    { id: 'general', label: 'সাধারণ যোগাযোগ', icon: '💬' },
    { id: 'volunteer', label: 'স্বেচ্ছাসেবক হতে চাই', icon: '🤝' },
    { id: 'donation', label: 'দান করতে চাই', icon: '💝' },
    { id: 'partnership', label: 'অংশীদারিত্ব', icon: '🤝' },
    { id: 'media', label: 'মিডিয়া ও প্রেস', icon: '📺' },
    { id: 'complaint', label: 'অভিযোগ', icon: '⚠️' }
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'নাম আবশ্যক';
    if (!formData.email.trim()) newErrors.email = 'ইমেইল আবশ্যক';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'সঠিক ইমেইল দিন';
    if (!formData.phone.trim()) newErrors.phone = 'ফোন নম্বর আবশ্যক';
    if (!formData.subject.trim()) newErrors.subject = 'বিষয় আবশ্যক';
    if (!formData.message.trim()) newErrors.message = 'বার্তা আবশ্যক';
    else if (formData.message.length < 10) newErrors.message = 'বার্তা কমপক্ষে ১০ অক্ষরের হতে হবে';

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
            বার্তা পাঠানো হয়েছে!
          </h2>
          <p className="text-gray-600 mb-6">
            আপনার বার্তা আমরা পেয়েছি। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', email: '', phone: '', subject: '', message: '', type: 'general'
              });
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            নতুন বার্তা পাঠান
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            যোগাযোগ করুন
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমাদের সাথে যোগাযোগ করুন। আপনার যেকোনো প্রশ্ন, পরামর্শ বা সহায়তার জন্য 
            আমরা সর্বদা প্রস্তুত।
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-8">
                আমাদের বার্তা পাঠান
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Contact Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    যোগাযোগের ধরন
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {contactTypes.map((type) => (
                      <label
                        key={type.id}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                          formData.type === type.id
                            ? 'border-green-500 bg-green-50 text-green-700'
                            : 'border-gray-300 hover:border-green-300'
                        }`}
                      >
                        <input
                          type="radio"
                          name="type"
                          value={type.id}
                          checked={formData.type === type.id}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="text-lg mr-2">{type.icon}</span>
                        <span className="text-sm font-medium">{type.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      নাম *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="আপনার নাম"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ইমেইল *
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
                    বিষয় *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.subject ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="আপনার বার্তার বিষয়"
                  />
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    বার্তা *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.message ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-green-600 hover:bg-green-700 transform hover:scale-105'
                  } text-white`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      পাঠানো হচ্ছে...
                    </span>
                  ) : (
                    'বার্তা পাঠান'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  যোগাযোগের তথ্য
                </h2>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: "📍",
                      title: "ঠিকানা",
                      details: ["আহাম্মদ ফাউন্ডেশন", "ধানমন্ডি, ঢাকা-১২০৫", "বাংলাদেশ"]
                    },
                    {
                      icon: "📞",
                      title: "ফোন",
                      details: ["+৮৮০ ১৭xxxxxxxx", "+৮৮০ ১৮xxxxxxxx"]
                    },
                    {
                      icon: "✉️",
                      title: "ইমেইল",
                      details: ["info@ahammad-foundation.org", "contact@ahammad-foundation.org"]
                    },
                    {
                      icon: "🕒",
                      title: "কার্যসময়",
                      details: ["রবিবার - বৃহস্পতিবার: ৯:০০ - ১৭:০০", "শুক্রবার: ৯:০০ - ১২:০০", "শনিবার: বন্ধ"]
                    }
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-lg">
                      <div className="text-3xl">{contact.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          {contact.title}
                        </h3>
                        {contact.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  সামাজিক মাধ্যম
                </h3>
                <div className="flex space-x-4">
                  {[
                    { name: 'Facebook', icon: '📘', color: 'bg-blue-600' },
                    { name: 'Twitter', icon: '🐦', color: 'bg-blue-400' },
                    { name: 'Instagram', icon: '📷', color: 'bg-pink-600' },
                    { name: 'YouTube', icon: '📺', color: 'bg-red-600' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className={`w-12 h-12 ${social.color} rounded-full flex items-center justify-center text-white hover:opacity-80 transition-opacity`}
                    >
                      <span className="text-xl">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              আমাদের অবস্থান
            </h2>
            <p className="text-xl text-gray-600">
              আমাদের অফিসে সরাসরি আসতে চাইলে এই ঠিকানায় আসুন
            </p>
          </div>
          
          {/* Map Placeholder */}
          <div className="bg-gradient-to-br from-green-400 to-blue-500 rounded-xl h-96 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="text-6xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold mb-2">ইন্টারঅ্যাক্টিভ ম্যাপ</h3>
              <p className="text-lg opacity-90">
                আহাম্মদ ফাউন্ডেশন, ধানমন্ডি, ঢাকা
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              প্রায়শই জিজ্ঞাসিত প্রশ্ন
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "কীভাবে স্বেচ্ছাসেবক হতে পারি?",
                answer: "আমাদের স্বেচ্ছাসেবক নিবন্ধন পেজে গিয়ে ফর্ম পূরণ করুন। আমরা আপনার সাথে যোগাযোগ করব।"
              },
              {
                question: "দান করার উপায় কী?",
                answer: "আপনি আমাদের অফিসে সরাসরি দান করতে পারেন অথবা ব্যাংক ট্রান্সফারের মাধ্যমে দান করতে পারেন।"
              },
              {
                question: "আপনাদের কার্যক্রমে কীভাবে অংশগ্রহণ করব?",
                answer: "আমাদের সাথে যোগাযোগ করুন অথবা আমাদের সামাজিক মাধ্যম ফলো করে আপডেট পান।"
              },
              {
                question: "সাহায্যের জন্য কীভাবে আবেদন করব?",
                answer: "আমাদের অফিসে এসে আবেদন করতে পারেন অথবা ফোনে যোগাযোগ করতে পারেন।"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
