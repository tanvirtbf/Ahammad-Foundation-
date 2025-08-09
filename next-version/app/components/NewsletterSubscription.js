"use client";
import { useState } from "react";

const NewsletterSubscription = ({ className = "" }) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("ইমেইল ঠিকানা আবশ্যক");
      return;
    }

    if (!validateEmail(email)) {
      setError("সঠিক ইমেইল ঠিকানা দিন");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const formData = new FormData();
      formData.append("access_key", "a197f4ce-a494-4a0e-a5c9-0b1e1e6ec823");
      formData.append("email", email);
      formData.append(
        "form_type",
        "Newsletter Subscription - আহাম্মদ ফাউন্ডেশন"
      );
      formData.append("subject", "নিউজলেটার সাবস্ক্রিপশন");
      formData.append("message", `নতুন নিউজলেটার সাবস্ক্রিপশন: ${email}`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        setEmail("");
      } else {
        console.log("Error", data);
        setError("সাবস্ক্রিপশনে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("সাবস্ক্রিপশনে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`text-center ${className}`}>
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
          <div className="flex items-center justify-center mb-2">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
            <span className="font-semibold">সফলভাবে সাবস্ক্রাইব হয়েছে!</span>
          </div>
          <p className="text-sm">আপনি আমাদের নিউজলেটার পাবেন।</p>
        </div>
        <button
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-green-600 hover:text-green-700 text-sm underline"
        >
          আরেকটি ইমেইল যোগ করুন
        </button>
      </div>
    );
  }

  return (
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto"
      >
        <div className="flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
            placeholder="আপনার ইমেইল ঠিকানা"
            className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-600 ${
              error ? "border-2 border-red-500 text-gray-800" : "text-gray-800"
            }`}
            disabled={isSubmitting}
          />
          {error && <p className="text-red-300 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
            isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-white text-green-600 hover:bg-gray-100"
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              পাঠানো হচ্ছে...
            </span>
          ) : (
            "সাবস্ক্রাইব করুন"
          )}
        </button>
      </form>
    </div>
  );
};

export default NewsletterSubscription;
