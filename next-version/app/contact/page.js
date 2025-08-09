import ContactForm from "../components/ContactForm";
import Breadcrumbs from "../components/Breadcrumbs";

// Contact page metadata
export const metadata = {
  title: "যোগাযোগ",
  description:
    "আহাম্মদ ফাউন্ডেশনের সাথে যোগাযোগ করুন। আমাদের ঠিকানা, ফোন নম্বর, ইমেইল এবং যোগাযোগ ফর্ম। স্বেচ্ছাসেবক, দান, অংশীদারিত্ব বা সাধারণ যোগাযোগের জন্য আমাদের সাথে যোগাযোগ করুন।",
  keywords:
    "আহাম্মদ ফাউন্ডেশন যোগাযোগ, ঠিকানা, ফোন নম্বর, ইমেইল, যোগাযোগ ফর্ম, স্বেচ্ছাসেবক যোগদান, দান করুন, অংশীদারিত্ব",
  openGraph: {
    title: "যোগাযোগ | আহাম্মদ ফাউন্ডেশন",
    description:
      "আহাম্মদ ফাউন্ডেশনের সাথে যোগাযোগ করুন। স্বেচ্ছাসেবক, দান, অংশীদারিত্ব বা সাধারণ যোগাযোগের জন্য।",
    url: "https://ahammad-foundation.org/contact",
    images: [
      {
        url: "/images/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "আহাম্মদ ফাউন্ডেশনের সাথে যোগাযোগ",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "যোগাযোগ | আহাম্মদ ফাউন্ডেশন",
    description:
      "আহাম্মদ ফাউন্ডেশনের সাথে যোগাযোগ করুন। স্বেচ্ছাসেবক, দান, অংশীদারিত্ব বা সাধারণ যোগাযোগের জন্য।",
    images: ["/images/contact-og.jpg"],
  },
  alternates: {
    canonical: "https://ahammad-foundation.org/contact",
  },
};

export default function Contact() {
  // Structured data for contact page
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "আহাম্মদ ফাউন্ডেশনের সাথে যোগাযোগ",
    description: "আহাম্মদ ফাউন্ডেশনের সাথে যোগাযোগ করুন",
    url: "https://ahammad-foundation.org/contact",
    mainEntity: {
      "@type": "Organization",
      name: "আহাম্মদ ফাউন্ডেশন",
      address: {
        "@type": "PostalAddress",
        streetAddress: "১২৩ মেইন রোড",
        addressLocality: "ঢাকা",
        addressRegion: "ঢাকা বিভাগ",
        postalCode: "১০০০",
        addressCountry: "BD",
      },
      telephone: "+880-XXX-XXXXXXX",
      email: "info@ahammad-foundation.org",
      url: "https://ahammad-foundation.org",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+880-XXX-XXXXXXX",
          contactType: "customer service",
          availableLanguage: ["Bengali", "English"],
          areaServed: "BD",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />

      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ label: "যোগাযোগ" }]} />

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">যোগাযোগ</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            আমাদের সাথে যোগাযোগ করুন। আমরা আপনার প্রশ্ন, পরামর্শ এবং সহযোগিতার
            জন্য সর্বদা প্রস্তুত।
          </p>
        </div>
      </header>

      {/* Contact Information */}
      <section
        className="py-20 bg-white"
        aria-labelledby="contact-info-heading"
      >
        <div className="container mx-auto px-4">
          <header className="text-center mb-16">
            <h2
              id="contact-info-heading"
              className="text-4xl font-bold text-gray-800 mb-4"
            >
              যোগাযোগের তথ্য
            </h2>
            <p className="text-xl text-gray-600">
              আমাদের সাথে যোগাযোগের বিভিন্ন মাধ্যম
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Address */}
            <article
              className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">
                  📍
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                ঠিকানা
              </h3>
              <address className="text-gray-600 not-italic">
                <span itemProp="streetAddress">১২ৃ মেইন রোড</span>
                <br />
                <span itemProp="addressLocality">ঢাকা</span>,{" "}
                <span itemProp="addressRegion">ঢাকা বিভাগ</span>
                <br />
                <span itemProp="postalCode">১০০০</span>
                <br />
                <span itemProp="addressCountry">বাংলাদেশ</span>
              </address>
            </article>

            {/* Phone */}
            <article className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">
                  📞
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">ফোন</h3>
              <div className="text-gray-600">
                <a
                  href="tel:+880XXXXXXXXX"
                  className="hover:text-green-600 transition-colors"
                >
                  +৮৮০ XXX-XXXXXXX
                </a>
                <br />
                <a
                  href="tel:+880XXXXXXXXX"
                  className="hover:text-green-600 transition-colors"
                >
                  +৮৮০ XXX-XXXXXXX
                </a>
              </div>
            </article>

            {/* Email */}
            <article className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">
                  ✉️
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                ইমেইল
              </h3>
              <div className="text-gray-600">
                <a
                  href="mailto:info@ahammad-foundation.org"
                  className="hover:text-green-600 transition-colors"
                >
                  info@ahammad-foundation.org
                </a>
                <br />
                <a
                  href="mailto:contact@ahammad-foundation.org"
                  className="hover:text-green-600 transition-colors"
                >
                  contact@ahammad-foundation.org
                </a>
              </div>
            </article>

            {/* Office Hours */}
            <article className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl" aria-hidden="true">
                  🕒
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                অফিস সময়
              </h3>
              <div className="text-gray-600">
                <time>রবিবার - বৃহস্পতিবার</time>
                <br />
                <time>সকাল ৯:০০ - বিকাল ৫:০০</time>
                <br />
                <span className="text-sm text-gray-500">শুক্রবার বন্ধ</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        className="py-20 bg-gray-50"
        aria-labelledby="contact-form-heading"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <header className="text-center mb-12">
              <h2
                id="contact-form-heading"
                className="text-4xl font-bold text-gray-800 mb-4"
              >
                আমাদের সাথে যোগাযোগ করুন
              </h2>
              <p className="text-xl text-gray-600">
                নিচের ফর্মটি পূরণ করে আমাদের কাছে আপনার বার্তা পাঠান
              </p>
            </header>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
