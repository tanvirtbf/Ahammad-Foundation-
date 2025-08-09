import Link from "next/link";
import ProgramsList from "../components/ProgramsList";
import Breadcrumbs from "../components/Breadcrumbs";

// Programs page metadata
export const metadata = {
  title: "আমাদের কার্যক্রম",
  description:
    "আহাম্মদ ফাউন্ডেশনের বিভিন্ন সামাজিক কল্যাণমূলক কার্যক্রম। শিক্ষা বৃত্তি, স্বাস্থ্যসেবা, খাদ্য বিতরণ, কারিগরি প্রশিক্ষণ এবং দুর্যোগ ত্রাণ কার্যক্রম সম্পর্কে জানুন।",
  keywords:
    "আহাম্মদ ফাউন্ডেশন কার্যক্রম, শিক্ষা বৃত্তি, স্বাস্থ্য ক্যাম্প, খাদ্য বিতরণ, কারিগরি প্রশিক্ষণ, দুর্যোগ ত্রাণ, সামাজিক কল্যাণ প্রোগ্রাম",
  openGraph: {
    title: "আমাদের কার্যক্রম | আহাম্মদ ফাউন্ডেশন",
    description:
      "আহাম্মদ ফাউন্ডেশনের বিভিন্ন সামাজিক কল্যাণমূলক কার্যক্রম সম্পর্কে জানুন।",
    url: "https://ahammad-foundation.org/programs",
    images: [
      {
        url: "/images/programs-og.jpg",
        width: 1200,
        height: 630,
        alt: "আহাম্মদ ফাউন্ডেশনের কার্যক্রম",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "আমাদের কার্যক্রম | আহাম্মদ ফাউন্ডেশন",
    description:
      "আহাম্মদ ফাউন্ডেশনের বিভিন্ন সামাজিক কল্যাণমূলক কার্যক্রম সম্পর্কে জানুন।",
    images: ["/images/programs-og.jpg"],
  },
  alternates: {
    canonical: "https://ahammad-foundation.org/programs",
  },
};

export default function Programs() {
  // Structured data for programs
  const programsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "আহাম্মদ ফাউন্ডেশনের কার্যক্রম",
    description: "আহাম্মদ ফাউন্ডেশনের বিভিন্ন সামাজিক কল্যাণমূলক কার্যক্রম",
    url: "https://ahammad-foundation.org/programs",
    numberOfItems: 6,
    itemListElement: [],
  };

  const programs = [
    {
      id: 1,
      title: "শিক্ষা বৃত্তি প্রোগ্রাম",
      category: "education",
      description: "মেধাবী কিন্তু দরিদ্র শিক্ষার্থীদের জন্য বৃত্তি প্রদান",
      details:
        "প্রতি বছর ১০০+ শিক্ষার্থীকে বৃত্তি প্রদান করা হয়। এতে রয়েছে টিউশন ফি, বই-খাতা এবং অন্যান্য শিক্ষা উপকরণের খরচ।",
      beneficiaries: "৫০০+ শিক্ষার্থী",
      duration: "চলমান",
      image: "/images/education1.jpg",
    },
    {
      id: 2,
      title: "বিনামূল্যে স্বাস্থ্য ক্যাম্প",
      category: "health",
      description: "গ্রামাঞ্চলে বিনামূল্যে চিকিৎসা সেবা প্রদান",
      details:
        "অভিজ্ঞ ডাক্তার ও নার্সদের নিয়ে মাসিক স্বাস্থ্য ক্যাম্প আয়োজন। বিনামূল্যে চেকআপ, ওষুধ বিতরণ এবং স্বাস্থ্য পরামর্শ।",
      beneficiaries: "৩০০০+ রোগী",
      duration: "মাসিক",
      image: "/images/health1.jpg",
    },
    {
      id: 3,
      title: "খাদ্য বিতরণ কার্যক্রম",
      category: "food",
      description: "অভাবী পরিবারগুলোর মধ্যে খাদ্য সামগ্রী বিতরণ",
      details:
        "রমজান মাসে ইফতার বিতরণ, শীতকালে গরম খাবার এবং দুর্যোগের সময় জরুরি খাদ্য সহায়তা প্রদান।",
      beneficiaries: "২০০০+ পরিবার",
      duration: "নিয়মিত",
      image: "/images/food1.jpg",
    },
    {
      id: 4,
      title: "কারিগরি প্রশিক্ষণ কেন্দ্র",
      category: "skill",
      description: "যুবকদের জন্য বিভিন্ন কারিগরি দক্ষতা প্রশিক্ষণ",
      details:
        "কম্পিউটার, সেলাই, ইলেকট্রিক্যাল, প্লাম্বিং এবং অন্যান্য কারিগরি বিষয়ে প্রশিক্ষণ। প্রশিক্ষণ শেষে চাকরির ব্যবস্থা।",
      beneficiaries: "৮০০+ যুবক",
      duration: "৬ মাস কোর্স",
      image: "/images/skill1.jpg",
    },
    {
      id: 5,
      title: "দুর্যোগ ত্রাণ কার্যক্রম",
      category: "disaster",
      description: "প্রাকৃতিক দুর্যোগের সময় জরুরি সহায়তা",
      details:
        "বন্যা, ঘূর্ণিঝড়, ভূমিকম্প এবং অন্যান্য দুর্যোগের সময় তাৎক্ষণিক ত্রাণ সামগ্রী বিতরণ এবং পুনর্বাসন সহায়তা।",
      beneficiaries: "১৫০০+ পরিবার",
      duration: "জরুরি ভিত্তিতে",
      image: "/images/disaster1.jpg",
    },
    {
      id: 6,
      title: "মহিলা ক্ষমতায়ন প্রোগ্রাম",
      category: "women",
      description: "মহিলাদের আর্থিক স্বাবলম্বিতার জন্য প্রশিক্ষণ",
      details:
        "সেলাই, হস্তশিল্প, রান্না এবং ছোট ব্যবসার প্রশিক্ষণ। ক্ষুদ্র ঋণ সুবিধা এবং বাজারজাতকরণে সহায়তা।",
      beneficiaries: "৬০০+ মহিলা",
      duration: "৩ মাস কোর্স",
      image: "/images/women1.jpg",
    },
  ];

  // Generate structured data for each program
  programsSchema.itemListElement = programs.map((program, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: program.title,
      description: program.description,
      provider: {
        "@type": "Organization",
        name: "আহাম্মদ ফাউন্ডেশন",
      },
      areaServed: "Bangladesh",
      audience: {
        "@type": "Audience",
        audienceType: program.beneficiaries,
      },
    },
  }));

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(programsSchema),
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "আমাদের কার্যক্রম" }]} />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            আমাদের কার্যক্রম
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমরা বিভিন্ন ক্ষেত্রে কাজ করে সমাজের উন্নয়নে অবদান রাখছি। আমাদের
            প্রতিটি কার্যক্রম মানুষের জীবনে ইতিবাচক পরিবর্তন আনতে ডিজাইন করা।
          </p>
        </div>
      </header>

      {/* Programs List with Filter */}
      <ProgramsList programs={programs} />

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">আমাদের প্রভাব</h2>
            <p className="text-xl opacity-90">
              আমাদের কার্যক্রমের মাধ্যমে অর্জিত সাফল্য
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "৮০০০+", label: "মানুষ সাহায্য পেয়েছে" },
              { number: "৫০+", label: "সফল প্রকল্প" },
              { number: "১৫+", label: "এলাকায় কাজ" },
              { number: "৯৫%", label: "সন্তুষ্ট উপকারভোগী" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            আমাদের সাথে যুক্ত হন
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            আপনিও আমাদের কার্যক্রমে অংশগ্রহণ করে সমাজের কল্যাণে অবদান রাখুন।
            একসাথে আমরা আরও বেশি মানুষের জীবনে পরিবর্তন আনতে পারি।
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/volunteer"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              স্বেচ্ছাসেবক হন
            </Link>
            <Link
              href="/contact"
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              যোগাযোগ করুন
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
