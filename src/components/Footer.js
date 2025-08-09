"use client";

import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/programs", label: "আমাদের কার্যক্রম" },
    { href: "/volunteer", label: "স্বেচ্ছাসেবক নিবন্ধন" },
  ];

  const services = [
    { href: "/programs", label: "শিক্ষা সহায়তা" },
    { href: "/programs", label: "স্বাস্থ্য সেবা" },
    { href: "/programs", label: "খাদ্য বিতরণ" },
    { href: "/programs", label: "দুর্যোগ ব্যবস্থাপনা" },
  ];

  const socialLinks = [
    {
      href: "https://facebook.com/ahammadFoundation",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      label: "Facebook",
    },
    {
      href: "https://instagram.com/ahammadFoundation",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297z" />
        </svg>
      ),
      label: "Instagram",
    },
    {
      href: "https://youtube.com/@ahammadFoundation",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      label: "YouTube",
    },
    {
      href: "mailto:ahammad2022foundation@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z" />
        </svg>
      ),
      label: "Email",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container py-12 sm:py-16 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold text-green-400 mb-4 sm:mb-6 block hover:text-green-300 transition-colors duration-300"
            >
              আহাম্মদ ফাউন্ডেশন
            </Link>
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              আহাম্মদ ফাউন্ডেশন একটি অলাভজনক সেবামূলক সংস্থা যা ২০১৮ সাল থেকে
              সমাজের অসহায় ও দুস্থ মানুষদের পাশে দাঁড়িয়ে আসছে। আমাদের লক্ষ্য
              হলো শিক্ষা, স্বাস্থ্য, খাদ্য নিরাপত্তা এবং দুর্যোগকালীন সহায়তার
              মাধ্যমে একটি সুন্দর ও কল্যাণকর সমাজ গড়ে তোলা।
            </p>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 text-gray-300">
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">ঢাকা, বাংলাদেশ</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base">+৮৮০ ১৩১৭২৭৭৮৫৮</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-sm sm:text-base break-all">
                  ahammad2022foundation@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-green-400">
              দ্রুত লিংক
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center space-x-2 group py-1"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-green-400">
              আমাদের সেবা
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-green-400 transition-all duration-300 flex items-center space-x-2 group py-1"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    <span className="text-sm sm:text-base">
                      {service.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-10 sm:mt-12 lg:mt-16 pt-8 sm:pt-10 lg:pt-12 border-t border-gray-700">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-400">
                নিউজলেটার সাবস্ক্রিপশন
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                আমাদের সর্বশেষ কার্যক্রম ও সংবাদ পেতে নিউজলেটার সাবস্ক্রাইব করুন
              </p>
              <div className="flex flex-col xs:flex-row gap-3 xs:gap-0">
                <input
                  type="email"
                  placeholder="আপনার ইমেইল ঠিকানা"
                  className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg xs:rounded-l-lg xs:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-white placeholder-gray-400 text-sm sm:text-base transition-all duration-300"
                />
                <button className="bg-green-600 hover:bg-green-700 px-4 sm:px-6 py-3 rounded-lg xs:rounded-l-none xs:rounded-r-lg transition-all duration-300 font-semibold text-sm sm:text-base hover:shadow-lg">
                  সাবস্ক্রাইব
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center md:text-right">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-green-400">
                আমাদের ফলো করুন
              </h3>
              <div className="flex justify-center md:justify-end space-x-3 sm:space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-green-600 p-2.5 sm:p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-800 py-4 sm:py-6">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              © {currentYear} আহাম্মদ ফাউন্ডেশন। সকল অধিকার সংরক্ষিত।
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                গোপনীয়তা নীতি
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                ব্যবহারের শর্তাবলী
              </Link>
              <Link
                href="/sitemap"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300"
              >
                সাইটম্যাপ
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 sm:bottom-8 right-6 sm:right-8 bg-green-600 hover:bg-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-40 hover:shadow-2xl"
        aria-label="Back to top"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
