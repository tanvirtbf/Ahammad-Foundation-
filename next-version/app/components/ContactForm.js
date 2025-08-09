"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    type: "general",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactTypes = [
    { id: "general", label: "সাধারণ যোগাযোগ", icon: "💬" },
    { id: "volunteer", label: "স্বেচ্ছাসেবক হতে চাই", icon: "🤝" },
    { id: "donation", label: "দান করতে চাই", icon: "💝" },
    { id: "partnership", label: "অংশীদারিত্ব", icon: "🤝" },
    { id: "media", label: "মিডিয়া ও প্রেস", icon: "📺" },
    { id: "complaint", label: "অভিযোগ", icon: "⚠️" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "নাম আবশ্যক";
    if (!formData.email.trim()) newErrors.email = "ইমেইল আবশ্যক";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "সঠিক ইমেইল দিন";
    if (!formData.phone.trim()) newErrors.phone = "ফোন নম্বর আবশ্যক";
    if (!formData.subject.trim()) newErrors.subject = "বিষয় আবশ্যক";
    if (!formData.message.trim()) newErrors.message = "বার্তা আবশ্যক";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        type: "general",
      });
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">
          ধন্যবাদ!
        </h3>
        <p className="text-green-700 mb-4">
          আপনার বার্তা সফলভাবে পাঠানো হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors duration-300"
        >
          নতুন বার্তা পাঠান
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      {/* Contact Type Selection */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-3">
          যোগাযোগের ধরন
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {contactTypes.map((type) => (
            <label
              key={type.id}
              className={`flex items-center space-x-2 p-3 border rounded-lg cursor-pointer transition-all duration-200 ${
                formData.type === type.id
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-gray-300 hover:border-green-300"
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
              <span className="text-lg">{type.icon}</span>
              <span className="text-sm font-medium">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            পূর্ণ নাম *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="আপনার পূর্ণ নাম লিখুন"
            required
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            ইমেইল ঠিকানা *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="example@email.com"
            required
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            ফোন নম্বর *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="+880 1XXX-XXXXXX"
            required
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errors.phone && (
            <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
            বিষয় *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="আপনার বার্তার বিষয়"
            required
            aria-describedby={errors.subject ? "subject-error" : undefined}
          />
          {errors.subject && (
            <p id="subject-error" className="text-red-500 text-sm mt-1" role="alert">
              {errors.subject}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          বার্তা *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={formData.message}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-vertical ${
            errors.message ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="আপনার বার্তা বিস্তারিত লিখুন..."
          required
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 ${
          isSubmitting
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-green-600 hover:bg-green-700 transform hover:scale-105"
        } text-white shadow-lg`}
        aria-label={isSubmitting ? "বার্তা পাঠানো হচ্ছে" : "বার্তা পাঠান"}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center space-x-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>পাঠানো হচ্ছে...</span>
          </span>
        ) : (
          "বার্তা পাঠান"
        )}
      </button>
    </form>
  );
}
