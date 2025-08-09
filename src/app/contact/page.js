'use client';

import { useState, useEffect, useRef } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState({});
  const sectionRefs = useRef({});

  const contactInfo = [
    {
      icon: '📍',
      title: 'ঠিকানা',
      details: ['ঢাকা, বাংলাদেশ', 'পোস্ট কোড: ১২০০']
    },
    {
      icon: '📞',
      title: 'ফোন',
      details: ['+৮৮০ ১৩১৭২৭৭৮৫৮', '+৮৮০ ১৭xxxxxxxx']
    },
    {
      icon: '📧',
      title: 'ইমেইল',
      details: ['ahammad2022foundation@gmail.com', 'info@ahammadFoundation.org']
    },
    {
      icon: '🕒',
      title: 'কার্যসময়',
      details: ['রবি - বৃহস্পতি: ৯:০০ - ৫:০০', 'শুক্রবার: ৯:০০ - ১২:০০']
    }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      url: 'https://facebook.com/ahammadFoundation',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/ahammadFoundation',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      url: 'https://youtube.com/@ahammadFoundation',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
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
        subject: '',
        message: ''
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
            <h1 className="text-5xl font-bold mb-4">যোগাযোগ করুন</h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              আমাদের সাথে যোগাযোগ করুন এবং সমাজ সেবায় অংশগ্রহণ করুন
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section 
        ref={setSectionRef('info')}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.info ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">যোগাযোগের তথ্য</h2>
            <div className="w-20 h-1 bg-green-600 rounded mx-auto mb-6"></div>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              আমাদের সাথে যোগাযোগ করার বিভিন্ন মাধ্যম
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`text-center bg-gray-50 p-6 rounded-xl shadow-lg transform transition-all duration-1000 hover:scale-105 ${
                  isVisible.info ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{info.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 mb-1">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section 
        ref={setSectionRef('form')}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible.form ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">আমাদের বার্তা পাঠান</h3>
                
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-4">✅</div>
                    <h4 className="text-xl font-bold text-green-600 mb-4">
                      বার্তা সফলভাবে পাঠানো হয়েছে!
                    </h4>
                    <p className="text-gray-600">
                      আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব। ধন্যবাদ!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          নাম *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="আপনার নাম"
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
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          ফোন নম্বর
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="০১৭xxxxxxxx"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">
                          বিষয় *
                        </label>
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                          placeholder="বার্তার বিষয়"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">
                        বার্তা *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows="6"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300"
                        placeholder="আপনার বার্তা লিখুন..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center space-x-2">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>পাঠানো হচ্ছে...</span>
                        </div>
                      ) : (
                        'বার্তা পাঠান'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Map & Additional Info */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible.form ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">আমাদের অবস্থান</h3>
                
                {/* Map Placeholder */}
                <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>Google Maps এর লিংক</p>
                    <p className="text-sm">ঢাকা, বাংলাদেশ</p>
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-800 mb-4">সামাজিক মাধ্যম</h4>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Quick Info */}
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-bold text-gray-800 mb-3">দ্রুত যোগাযোগ</h4>
                  <div className="space-y-2 text-gray-600">
                    <p>📞 জরুরি: +৮৮০ ১৩১৭২৭৭৮৫৮</p>
                    <p>📧 ইমেইল: ahammad2022foundation@gmail.com</p>
                    <p>🕒 সাপ্তাহিক ছুটি: শনিবার</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        ref={setSectionRef('faq')}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-4">
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${
              isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">প্রায়শই জিজ্ঞাসিত প্রশ্ন</h2>
            <div className="w-20 h-1 bg-green-600 rounded mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: 'কীভাবে স্বেচ্ছাসেবক হিসেবে যোগ দিতে পারি?',
                answer: 'আমাদের স্বেচ্ছাসেবক নিবন্ধন পৃষ্ঠায় গিয়ে ফর্ম পূরণ করুন অথবা সরাসরি আমাদের অফিসে যোগাযোগ করুন।'
              },
              {
                question: 'আপনাদের কার্যক্রমে কীভাবে অনুদান দিতে পারি?',
                answer: 'আমাদের সাথে ফোনে বা ইমেইলে যোগাযোগ করুন। আমরা আপনাকে অনুদানের বিভিন্ন মাধ্যম সম্পর্কে জানাবো।'
              },
              {
                question: 'আপনাদের কার্যক্রমের স্বচ্ছতা কীভাবে নিশ্চিত করা হয়?',
                answer: 'আমরা নিয়মিত আর্থিক প্রতিবেদন প্রকাশ করি এবং সকল কার্যক্রমের বিস্তারিত তথ্য আমাদের ওয়েবসাইটে প্রকাশ করা হয়।'
              },
              {
                question: 'কোন এলাকায় আপনাদের কার্যক্রম রয়েছে?',
                answer: 'আমরা মূলত ঢাকা ও আশেপাশের এলাকায় কাজ করি, তবে প্রয়োজনে সারাদেশে আমাদের কার্যক্রম পৌঁছে দিই।'
              }
            ].map((faq, index) => (
              <div
                key={index}
                className={`bg-gray-50 rounded-lg p-6 mb-4 transform transition-all duration-1000 ${
                  isVisible.faq ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h4 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
