"use client";
import { useState } from "react";
import Link from "next/link";
import NewsletterSubscription from "../components/NewsletterSubscription";

export default function News() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedNews, setSelectedNews] = useState(null);

  const categories = [
    { id: "all", name: "সব সংবাদ", icon: "📰" },
    { id: "programs", name: "কার্যক্রম", icon: "🎯" },
    { id: "events", name: "অনুষ্ঠান", icon: "🎉" },
    { id: "achievements", name: "অর্জন", icon: "🏆" },
    { id: "announcements", name: "ঘোষণা", icon: "📢" },
    { id: "media", name: "মিডিয়া", icon: "📺" },
  ];

  const newsItems = [
    {
      id: 1,
      title: "শীতকালীন কম্বল বিতরণ কার্যক্রম সম্পন্ন",
      category: "programs",
      excerpt:
        "এই শীতে আমরা ৫০০টি পরিবারের মধ্যে কম্বল বিতরণ করেছি। দরিদ্র ও অসহায় পরিবারগুলো এই সহায়তায় অত্যন্ত খুশি।",
      content:
        "গত সপ্তাহে আহাম্মদ ফাউন্ডেশনের উদ্যোগে শীতকালীন কম্বল বিতরণ কার্যক্রম সফলভাবে সম্পন্ন হয়েছে। এই কার্যক্রমে ঢাকা ও আশেপাশের এলাকার ৫০০টি দরিদ্র পরিবারের মধ্যে উষ্ণ কম্বল বিতরণ করা হয়েছে। প্রতিটি পরিবার দুইটি করে কম্বল পেয়েছে। এছাড়াও শিশুদের জন্য বিশেষ ছোট কম্বলের ব্যবস্থা করা হয়েছে।",
      date: "১৫ জানুয়ারি, ২০২৫",
      author: "আহাম্মদ ফাউন্ডেশন টিম",
      image: "/images/news1.jpg",
      featured: true,
    },
    {
      id: 2,
      title: "নতুন প্রাথমিক বিদ্যালয় উদ্বোধন",
      category: "events",
      excerpt:
        "গ্রামাঞ্চলে একটি নতুন প্রাথমিক বিদ্যালয় প্রতিষ্ঠা করা হয়েছে যেখানে ১৫০ জন শিশু পড়াশোনা করতে পারবে।",
      content:
        "মানিকগঞ্জের একটি প্রত্যন্ত গ্রামে আহাম্মদ ফাউন্ডেশনের অর্থায়নে নতুন একটি প্রাথমিক বিদ্যালয় উদ্বোধন করা হয়েছে। এই বিদ্যালয়ে ১৫০ জন শিশু একসাথে পড়াশোনা করতে পারবে। বিদ্যালয়টিতে ৫টি শ্রেণিকক্ষ, একটি লাইব্রেরি এবং খেলার মাঠ রয়েছে।",
      date: "১০ জানুয়ারি, ২০২৫",
      author: "শিক্ষা বিভাগ",
      image: "/images/news2.jpg",
      featured: false,
    },
    {
      id: 3,
      title: "বিনামূল্যে স্বাস্থ্য ক্যাম্পে ৩০০+ রোগীর সেবা",
      category: "programs",
      excerpt:
        "আমাদের মেডিকেল টিম গত সপ্তাহে একটি বিনামূল্যে স্বাস্থ্য ক্যাম্প আয়োজন করে ৩০০+ রোগীর চিকিৎসা সেবা প্রদান করেছে।",
      content:
        "সাভারের একটি গ্রামে আয়োজিত বিনামূল্যে স্বাস্থ্য ক্যাম্পে ৩০০+ রোগী চিকিৎসা সেবা পেয়েছেন। এই ক্যাম্পে ৫ জন অভিজ্ঞ ডাক্তার ও ১০ জন নার্স কাজ করেছেন। সাধারণ চিকিৎসার পাশাপাশি বিনামূল্যে ওষুধ বিতরণ করা হয়েছে।",
      date: "৫ জানুয়ারি, ২০২৫",
      author: "স্বাস্থ্য বিভাগ",
      image: "/images/news3.jpg",
      featured: false,
    },
    {
      id: 4,
      title: "আহাম্মদ ফাউন্ডেশন জাতীয় পুরস্কার পেয়েছে",
      category: "achievements",
      excerpt:
        "সমাজসেবায় অবদানের জন্য আহাম্মদ ফাউন্ডেশন জাতীয় স্বেচ্ছাসেবী সংস্থা পুরস্কার ২০২৪ পেয়েছে।",
      content:
        "সমাজসেবায় অসামান্য অবদানের জন্য আহাম্মদ ফাউন্ডেশন জাতীয় স্বেচ্ছাসেবী সংস্থা পুরস্কার ২০২৪ লাভ করেছে। এই পুরস্কার প্রদান করা হয় সেই সব সংস্থাকে যারা সমাজের কল্যাণে নিরলসভাবে কাজ করে যাচ্ছে।",
      date: "২৮ ডিসেম্বর, ২০২৪",
      author: "প্রশাসনিক বিভাগ",
      image: "/images/news4.jpg",
      featured: true,
    },
    {
      id: 5,
      title: "নতুন স্বেচ্ছাসেবক নিয়োগ শুরু",
      category: "announcements",
      excerpt:
        "আগামী মাস থেকে নতুন স্বেচ্ছাসেবক নিয়োগ কার্যক্রম শুরু হবে। আগ্রহী ব্যক্তিরা আবেদন করতে পারেন।",
      content:
        "আহাম্মদ ফাউন্ডেশন আগামী ফেব্রুয়ারি মাস থেকে নতুন স্বেচ্ছাসেবক নিয়োগ কার্যক্রম শুরু করবে। যারা সমাজসেবায় আগ্রহী তারা আমাদের ওয়েবসাইটের মাধ্যমে আবেদন করতে পারেন। বিশেষ করে শিক্ষা ও স্বাস্থ্য বিভাগে স্বেচ্ছাসেবকের প্রয়োজন রয়েছে।",
      date: "২০ ডিসেম্বর, ২০২৪",
      author: "মানব সম্পদ বিভাগ",
      image: "/images/news5.jpg",
      featured: false,
    },
    {
      id: 6,
      title: "টেলিভিশনে আহাম্মদ ফাউন্ডেশনের সাক্ষাৎকার",
      category: "media",
      excerpt:
        "জাতীয় টেলিভিশনে আমাদের চেয়ারম্যানের সাক্ষাৎকার প্রচারিত হয়েছে যেখানে আমাদের ভবিষ্যৎ পরিকল্পনা নিয়ে আলোচনা করা হয়েছে।",
      content:
        "গত রবিবার জাতীয় টেলিভিশনের একটি বিশেষ অনুষ্ঠানে আহাম্মদ ফাউন্ডেশনের চেয়ারম্যান মোহাম্মদ আহাম্মদের সাক্ষাৎকার প্রচারিত হয়েছে। এই সাক্ষাৎকারে তিনি আমাদের গত ৮ বছরের কার্যক্রম এবং ভবিষ্যৎ পরিকল্পনা নিয়ে বিস্তারিত আলোচনা করেছেন।",
      date: "১৫ ডিসেম্বর, ২০২৪",
      author: "মিডিয়া বিভাগ",
      image: "/images/news6.jpg",
      featured: false,
    },
  ];

  const filteredNews =
    activeCategory === "all"
      ? newsItems
      : newsItems.filter((news) => news.category === activeCategory);

  const featuredNews = newsItems.filter((news) => news.featured);
  const regularNews = filteredNews.filter((news) => !news.featured);

  const openModal = (news) => {
    setSelectedNews(news);
  };

  const closeModal = () => {
    setSelectedNews(null);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            সংবাদ ও আপডেট
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমাদের সাম্প্রতিক কার্যক্রম, অর্জন এবং ভবিষ্যৎ পরিকল্পনা সম্পর্কে
            জানুন। আমাদের প্রতিটি কাজের আপডেট এখানে পাবেন।
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white sticky top-20 z-40 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-green-600 text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-green-100 hover:text-green-600"
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      {featuredNews.length > 0 && activeCategory === "all" && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              গুরুত্বপূর্ণ সংবাদ
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredNews.map((news) => (
                <div
                  key={news.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => openModal(news)}
                >
                  {/* News Image */}
                  <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 rounded-t-xl flex items-center justify-center">
                    <span className="text-white text-4xl">
                      {categories.find((cat) => cat.id === news.category)?.icon}
                    </span>
                  </div>

                  {/* News Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium">
                        ফিচার্ড
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {news.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        লেখক: {news.author}
                      </span>
                      <span className="text-green-600 hover:text-green-700 font-medium text-sm">
                        বিস্তারিত পড়ুন →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {activeCategory !== "all" && (
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              {categories.find((cat) => cat.id === activeCategory)?.name}
            </h2>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularNews.map((news, index) => (
              <div
                key={news.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openModal(news)}
              >
                {/* News Image */}
                <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 rounded-t-xl flex items-center justify-center">
                  <span className="text-white text-3xl">
                    {categories.find((cat) => cat.id === news.category)?.icon}
                  </span>
                </div>

                {/* News Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">
                      {categories.find((cat) => cat.id === news.category)?.name}
                    </span>
                    <span className="text-sm text-gray-500">{news.date}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                    {news.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">{news.author}</span>
                    <span className="text-green-600 hover:text-green-700 font-medium text-sm">
                      পড়ুন →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredNews.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-2xl font-semibold text-gray-600 mb-2">
                কোনো সংবাদ পাওয়া যায়নি
              </h3>
              <p className="text-gray-500">
                এই ক্যাটেগরিতে এখনো কোনো সংবাদ প্রকাশিত হয়নি।
              </p>
            </div>
          )}
        </div>
      </section>

      {/* News Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative max-w-4xl w-full my-8">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 transition-colors z-10"
            >
              ×
            </button>

            {/* News Article */}
            <div className="bg-white rounded-lg overflow-hidden">
              {/* News Image */}
              <div className="h-64 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white text-6xl">
                  {
                    categories.find((cat) => cat.id === selectedNews.category)
                      ?.icon
                  }
                </span>
              </div>

              {/* News Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-green-100 text-green-600 px-4 py-2 rounded-full font-medium">
                    {
                      categories.find((cat) => cat.id === selectedNews.category)
                        ?.name
                    }
                  </span>
                  <span className="text-gray-500">{selectedNews.date}</span>
                </div>

                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                  {selectedNews.title}
                </h1>

                <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                  {selectedNews.content}
                </p>

                <div className="border-t pt-4">
                  <p className="text-sm text-gray-500">
                    লেখক: {selectedNews.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">নিয়মিত আপডেট পান</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            আমাদের সাম্প্রতিক কার্যক্রম ও সংবাদের আপডেট পেতে আমাদের নিউজলেটার
            সাবস্ক্রাইব করুন।
          </p>
          <NewsletterSubscription />
        </div>
      </section>
    </div>
  );
}
