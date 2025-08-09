"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: "/", label: "হোম" },
    { href: "/about", label: "আমাদের সম্পর্কে" },
    { href: "/programs", label: "আমাদের কার্যক্রম" },
    { href: "/gallery", label: "গ্যালারী" },
    { href: "/videos", label: "ভিডিও" },
    { href: "/volunteer", label: "স্বেচ্ছাসেবক নিবন্ধন" },
    { href: "/news", label: "সংবাদ" },
    { href: "/contact", label: "যোগাযোগ" },
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
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.875 2.026-1.297 3.323-1.297s2.448.422 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.608c-.384 0-.735-.157-.996-.418-.261-.261-.418-.612-.418-.996s.157-.735.418-.996c.261-.261.612-.418.996-.418s.735.157.996.418c.261.261.418.612.418.996s-.157.735-.418.996c-.261.261-.612.418-.996.418zm.261 2.953c0-1.297-.49-2.448-1.297-3.323-.875-.875-2.026-1.297-3.323-1.297s-2.448.422-3.323 1.297c-.807.875-1.297 2.026-1.297 3.323s.49 2.448 1.297 3.323c.875.875 2.026 1.297 3.323 1.297s2.448-.422 3.323-1.297c.807-.875 1.297-2.026 1.297-3.323z" />
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
    {
      href: "tel:01317277858",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      label: "Phone",
    },
  ];

  return (
    <>
      {/* Top Section - Social Links */}
      <div className="bg-green-600 text-white w-full fixed top-0 z-50 shadow-md">
        <div className="container">
          <div className="flex justify-between items-center h-14 lg:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link
                href="/"
                className="text-lg sm:text-xl lg:text-2xl font-bold text-white hover:text-green-100 transition-colors duration-300"
              >
                আহাম্মদ ফাউন্ডেশন
              </Link>
            </div>

            {/* Social Links - Desktop */}
            <div className="hidden lg:flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-200 transition-all duration-300 p-2.5 rounded-lg hover:bg-green-700 hover:scale-110"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-white hover:text-green-200 focus:outline-none focus:text-green-200 p-2.5 rounded-lg hover:bg-green-700 transition-all duration-300"
                aria-label="Toggle menu"
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${
                    isMenuOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Navigation Links */}
      <nav className="bg-white shadow-lg fixed w-full top-14 lg:top-16 z-40 border-b border-gray-200">
        <div className="container">
          <div className="flex justify-center items-center h-16 lg:h-18">
            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 px-4 py-3 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 hover:bg-green-50 border-b-2 border-transparent hover:border-green-600 relative group"
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ease-in-out border-l border-gray-200 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-green-50">
            <h2 className="text-lg font-bold text-green-600">মেনু</h2>
            <button
              onClick={closeMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none p-2 rounded-lg hover:bg-green-100 transition-all duration-300"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto">
            <div className="px-6 py-6">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                নেভিগেশন
              </h3>
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="text-gray-700 hover:text-green-600 py-3 px-4 rounded-lg text-base font-medium transition-all duration-300 hover:bg-green-50 hover:translate-x-1 block group"
                  >
                    <div className="flex items-center justify-between">
                      <span>{link.label}</span>
                      <svg
                        className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="px-6 py-6 border-t border-gray-200 bg-gray-50">
              <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                যোগাযোগ
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 transition-all duration-300 p-3 rounded-lg hover:bg-green-100 flex items-center justify-center hover:scale-105"
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

      {/* Spacer for fixed navbar */}
      <div className="h-[7.5rem] lg:h-[8.25rem]"></div>
    </>
  );
};

export default Navbar;
