import GalleryGrid from "../components/GalleryGrid";
import Breadcrumbs from "../components/Breadcrumbs";

// Gallery page metadata
export const metadata = {
  title: "ছবির গ্যালারি",
  description:
    "আহাম্মদ ফাউন্ডেশনের বিভিন্ন কার্যক্রম ও অনুষ্ঠানের ছবি। শিক্ষা বৃত্তি, স্বাস্থ্য ক্যাম্প, খাদ্য বিতরণ, প্রশিক্ষণ কর্মশালা এবং অন্যান্য সামাজিক কার্যক্রমের স্মৃতি।",
  keywords:
    "আহাম্মদ ফাউন্ডেশন ছবি, গ্যালারি, কার্যক্রমের ছবি, শিক্ষা বৃত্তি ছবি, স্বাস্থ্য ক্যাম্প ছবি, খাদ্য বিতরণ ছবি, প্রশিক্ষণ ছবি, সামাজিক কার্যক্রম",
  openGraph: {
    title: "ছবির গ্যালারি | আহাম্মদ ফাউন্ডেশন",
    description:
      "আহাম্মদ ফাউন্ডেশনের বিভিন্ন কার্যক্রম ও অনুষ্ঠানের ছবি দেখুন।",
    url: "https://ahammad-foundation.org/gallery",
    images: [
      {
        url: "/images/gallery-og.jpg",
        width: 1200,
        height: 630,
        alt: "আহাম্মদ ফাউন্ডেশনের গ্যালারি",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ছবির গ্যালারি | আহাম্মদ ফাউন্ডেশন",
    description:
      "আহাম্মদ ফাউন্ডেশনের বিভিন্ন কার্যক্রম ও অনুষ্ঠানের ছবি দেখুন।",
    images: ["/images/gallery-og.jpg"],
  },
  alternates: {
    canonical: "https://ahammad-foundation.org/gallery",
  },
};

export default function Gallery() {
  // Structured data for gallery
  const gallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "আহাম্মদ ফাউন্ডেশনের ছবির গ্যালারি",
    description: "আহাম্মদ ফাউন্ডেশনের বিভিন্ন কার্যক্রম ও অনুষ্ঠানের ছবি",
    url: "https://ahammad-foundation.org/gallery",
    publisher: {
      "@type": "Organization",
      name: "আহাম্মদ ফাউন্ডেশন",
      url: "https://ahammad-foundation.org",
    },
  };

  const images = [
    {
      id: 1,
      title: "শিক্ষা বৃত্তি প্রদান অনুষ্ঠান",
      category: "education",
      description: "মেধাবী শিক্ষার্থীদের মধ্যে বৃত্তি প্রদান",
      date: "১৫ জানুয়ারি, ২০২৫",
    },
    {
      id: 2,
      title: "বিনামূল্যে স্বাস্থ্য ক্যাম্প",
      category: "health",
      description: "গ্রামাঞ্চলে চিকিৎসা সেবা প্রদান",
      date: "১০ জানুয়ারি, ২০২৫",
    },
    {
      id: 3,
      title: "শীতকালীন কম্বল বিতরণ",
      category: "food",
      description: "দরিদ্র পরিবারগুলোর মধ্যে কম্বল বিতরণ",
      date: "৫ জানুয়ারি, ২০২৫",
    },
    {
      id: 4,
      title: "বার্ষিক সম্মেলন ২০২৪",
      category: "events",
      description: "স্বেচ্ছাসেবকদের বার্ষিক সম্মেলন",
      date: "২৫ ডিসেম্বর, ২০২৪",
    },
    {
      id: 5,
      title: "কারিগরি প্রশিক্ষণ কর্মশালা",
      category: "training",
      description: "যুবকদের জন্য কম্পিউটার প্রশিক্ষণ",
      date: "২০ ডিসেম্বর, ২০২৪",
    },
    {
      id: 6,
      title: "নতুন স্কুল উদ্বোধন",
      category: "education",
      description: "গ্রামাঞ্চলে নতুন প্রাথমিক বিদ্যালয় উদ্বোধন",
      date: "১৫ ডিসেম্বর, ২০২৪",
    },
    {
      id: 7,
      title: "ইফতার বিতরণ কার্যক্রম",
      category: "food",
      description: "রমজান মাসে ইফতার বিতরণ",
      date: "১০ এপ্রিল, ২০২৪",
    },
    {
      id: 8,
      title: "চোখের চিকিৎসা ক্যাম্প",
      category: "health",
      description: "বিনামূল্যে চোখের পরীক্ষা ও চশমা বিতরণ",
      date: "৫ মার্চ, ২০২৪",
    },
    {
      id: 9,
      title: "মহিলা ক্ষমতায়ন কর্মশালা",
      category: "training",
      description: "মহিলাদের জন্য সেলাই প্রশিক্ষণ",
      date: "২৮ ফেব্রুয়ারি, ২০২৪",
    },
    {
      id: 10,
      title: "বন্যা ত্রাণ বিতরণ",
      category: "food",
      description: "বন্যা আক্রান্ত এলাকায় ত্রাণ সামগ্রী বিতরণ",
      date: "১৫ আগস্ট, ২০২৩",
    },
    {
      id: 11,
      title: "শিক্ষক প্রশিক্ষণ কর্মসূচি",
      category: "training",
      description: "গ্রামীণ শিক্ষকদের প্রশিক্ষণ কর্মসূচি",
      date: "১০ জুলাই, ২০২৩",
    },
    {
      id: 12,
      title: "স্বাস্থ্য সচেতনতা সেমিনার",
      category: "health",
      description: "কমিউনিটি স্বাস্থ্য সচেতনতা কর্মসূচি",
      date: "৫ জুন, ২০২৩",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema),
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "ছবির গ্যালারি" }]} />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            আমাদের গ্যালারী
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমাদের বিভিন্ন কার্যক্রম ও অনুষ্ঠানের স্মৃতিচারণ। প্রতিটি ছবি আমাদের
            সেবার গল্প বলে।
          </p>
        </div>
      </header>

      {/* Gallery Grid with Filter */}
      <GalleryGrid images={images} />

      {/* Statistics */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              আমাদের কার্যক্রমের পরিসংখ্যান
            </h2>
            <p className="text-xl text-gray-600">
              ছবির মাধ্যমে আমাদের কাজের প্রভাব
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "৫০০+", label: "ছবি সংগ্রহ" },
              { number: "১০০+", label: "কার্যক্রম নথিভুক্ত" },
              { number: "৫০+", label: "স্থান পরিদর্শন" },
              { number: "৮+", label: "বছরের ইতিহাস" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
