import AboutTabs from "../components/AboutTabs";

// About page metadata
export const metadata = {
  title: "আমাদের সম্পর্কে",
  description:
    "আহাম্মদ ফাউন্ডেশন ২০১৫ সাল থেকে অসহায় মানুষদের পাশে দাঁড়িয়ে সমাজের উন্নয়নে কাজ করে আসছে। আমাদের মিশন, ভিশন এবং টিম সম্পর্কে জানুন।",
  keywords:
    "আহাম্মদ ফাউন্ডেশন সম্পর্কে, মিশন, ভিশন, টিম, প্রতিষ্ঠাতা, অলাভজনক সংস্থার ইতিহাস, সামাজিক সেবা সংস্থা",
  openGraph: {
    title: "আমাদের সম্পর্কে | আহাম্মদ ফাউন্ডেশন",
    description:
      "আহাম্মদ ফাউন্ডেশন ২০১৫ সাল থেকে অসহায় মানুষদের পাশে দাঁড়িয়ে সমাজের উন্নয়নে কাজ করে আসছে।",
    url: "https://ahammad-foundation.org/about",
    images: [
      {
        url: "/images/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "আহাম্মদ ফাউন্ডেশন টিম",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "আমাদের সম্পর্কে | আহাম্মদ ফাউন্ডেশন",
    description:
      "আহাম্মদ ফাউন্ডেশন ২০১৫ সাল থেকে অসহায় মানুষদের পাশে দাঁড়িয়ে সমাজের উন্নয়নে কাজ করে আসছে।",
    images: ["/images/about-og.jpg"],
  },
  alternates: {
    canonical: "https://ahammad-foundation.org/about",
  },
};

export default function About() {
  // Structured data for About page
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "আহাম্মদ ফাউন্ডেশন",
    alternateName: "Ahammad Foundation",
    url: "https://ahammad-foundation.org",
    logo: "https://ahammad-foundation.org/images/logo.png",
    description:
      "আহাম্মদ ফাউন্ডেশন একটি অলাভজনক সংস্থা যা ২০১৫ সাল থেকে অসহায় মানুষদের সাহায্য করে এবং সমাজের উন্নয়নে কাজ করে।",
    foundingDate: "2015",
    founder: {
      "@type": "Person",
      name: "মোহাম্মদ আহাম্মদ",
      jobTitle: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "BD",
      addressLocality: "Dhaka",
      addressRegion: "Dhaka Division",
    },
    areaServed: "Bangladesh",
    knowsAbout: [
      "Education",
      "Healthcare",
      "Skill Development",
      "Disaster Relief",
      "Social Welfare",
    ],
    seeks: "Donations and Volunteers for social welfare activities",
    mission:
      "অসহায় ও দুস্থ মানুষদের পাশে দাঁড়িয়ে তাদের জীবনযাত্রার মান উন্নয়ন করা।",
  };

  const teamMembers = [
    {
      name: "মোহাম্মদ আহাম্মদ",
      position: "প্রতিষ্ঠাতা ও চেয়ারম্যান",
      description: "২০ বছরের সামাজিক কাজের অভিজ্ঞতা",
      image: "/images/team1.jpg",
    },
    {
      name: "ফাতেমা খাতুন",
      position: "নির্বাহী পরিচালক",
      description: "শিক্ষা ও স্বাস্থ্য বিভাগের প্রধান",
      image: "/images/team2.jpg",
    },
    {
      name: "ডা. রহিম উদ্দিন",
      position: "মেডিকেল অ্যাডভাইজার",
      description: "১৫ বছরের চিকিৎসা সেবার অভিজ্ঞতা",
      image: "/images/team3.jpg",
    },
    {
      name: "প্রফেসর করিম",
      position: "শিক্ষা উপদেষ্টা",
      description: "শিক্ষা ক্ষেত্রে ২৫ বছরের অভিজ্ঞতা",
      image: "/images/team4.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            আমাদের সম্পর্কে
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            <strong>আহাম্মদ ফাউন্ডেশন</strong> একটি অলাভজনক সংস্থা যা{" "}
            <time dateTime="2015">২০১৫ সাল</time> থেকে অসহায় মানুষদের পাশে
            দাঁড়িয়ে সমাজের উন্নয়নে কাজ করে আসছে।
          </p>
        </div>
      </header>

      {/* Mission, Vision, Values Tabs */}
      <AboutTabs />

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">আমাদের অর্জন</h2>
            <p className="text-xl opacity-90">
              গত ৮ বছরে আমাদের কিছু উল্লেখযোগ্য অর্জন
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "১০০০+", label: "সাহায্যপ্রাপ্ত পরিবার" },
              { number: "৫০+", label: "সফল প্রকল্প" },
              { number: "২০০+", label: "স্বেচ্ছাসেবক" },
              { number: "৮+", label: "বছরের অভিজ্ঞতা" },
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

      {/* Team Section */}
      <section className="py-20 bg-gray-100" aria-labelledby="team-heading">
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2
              id="team-heading"
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              আমাদের টিম
            </h2>
            <p className="text-xl text-gray-600">
              অভিজ্ঞ ও দক্ষ ব্যক্তিদের নিয়ে গঠিত আমাদের টিম
            </p>
          </header>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            role="list"
          >
            {teamMembers.map((member, index) => (
              <article
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
                role="listitem"
                itemScope
                itemType="https://schema.org/Person"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span
                    className="text-white text-2xl font-bold"
                    aria-hidden="true"
                  >
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold text-gray-800 mb-2"
                  itemProp="name"
                >
                  {member.name}
                </h3>
                <p
                  className="text-green-600 font-medium mb-3"
                  itemProp="jobTitle"
                >
                  {member.position}
                </p>
                <p className="text-gray-600 text-sm" itemProp="description">
                  {member.description}
                </p>
                <meta itemProp="worksFor" content="আহাম্মদ ফাউন্ডেশন" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                আমাদের ইতিহাস
              </h2>
              <p className="text-xl text-gray-600">
                আহাম্মদ ফাউন্ডেশনের যাত্রা শুরু থেকে আজ পর্যন্ত
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  year: "২০১৫",
                  title: "ফাউন্ডেশন প্রতিষ্ঠা",
                  description:
                    "মোহাম্মদ আহাম্মদের নেতৃত্বে আহাম্মদ ফাউন্ডেশনের যাত্রা শুরু।",
                },
                {
                  year: "২০১৭",
                  title: "প্রথম বড় প্রকল্প",
                  description:
                    "গ্রামাঞ্চলে প্রথম স্কুল প্রতিষ্ঠা এবং ১০০ শিশুর শিক্ষার ব্যবস্থা।",
                },
                {
                  year: "২০১৯",
                  title: "স্বাস্থ্য সেবা শুরু",
                  description:
                    "বিনামূল্যে মেডিকেল ক্যাম্প এবং ওষুধ বিতরণ কার্যক্রম শুরু।",
                },
                {
                  year: "২০২১",
                  title: "কোভিড-১৯ সহায়তা",
                  description:
                    "মহামারীর সময় ১০০০+ পরিবারকে খাদ্য ও চিকিৎসা সহায়তা প্রদান।",
                },
                {
                  year: "২০২৩",
                  title: "দক্ষতা উন্নয়ন কেন্দ্র",
                  description: "যুবকদের জন্য কারিগরি প্রশিক্ষণ কেন্দ্র স্থাপন।",
                },
                {
                  year: "২০২৫",
                  title: "ডিজিটাল উপস্থিতি",
                  description:
                    "অনলাইন প্ল্যাটফর্মের মাধ্যমে আরও বেশি মানুষের কাছে পৌঁছানো।",
                },
              ].map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0 w-20 h-20 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {milestone.year}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
