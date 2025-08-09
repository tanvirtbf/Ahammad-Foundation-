// SEO Configuration and Utilities

export const siteConfig = {
  name: "আহাম্মদ ফাউন্ডেশন",
  description: "আহাম্মদ ফাউন্ডেশন একটি অলাভজনক সংস্থা যা ২০১৫ সাল থেকে অসহায় মানুষদের সাহায্য করে এবং সমাজের উন্নয়নে কাজ করে।",
  url: "https://ahammad-foundation.org",
  ogImage: "https://ahammad-foundation.org/images/og-image.jpg",
  links: {
    facebook: "https://facebook.com/ahammad.foundation",
    twitter: "https://twitter.com/ahammad_foundation",
    instagram: "https://instagram.com/ahammad_foundation",
    youtube: "https://youtube.com/c/ahammad-foundation"
  }
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  keywords: [
    "আহাম্মদ ফাউন্ডেশন",
    "অলাভজনক সংস্থা",
    "দাতব্য প্রতিষ্ঠান",
    "সামাজিক সেবা",
    "শিক্ষা সহায়তা",
    "স্বাস্থ্যসেবা",
    "দক্ষতা উন্নয়ন",
    "দুর্যোগ ত্রাণ",
    "স্বেচ্ছাসেবক",
    "সমাজ উন্নয়ন",
    "বাংলাদেশ",
    "charity",
    "nonprofit",
    "social service",
    "education",
    "healthcare",
    "volunteer"
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ahammad_foundation",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

// Generate structured data for organization
export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "NGO",
  "name": "আহাম্মদ ফাউন্ডেশন",
  "alternateName": "Ahammad Foundation",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/images/logo.png`,
  "description": siteConfig.description,
  "foundingDate": "2015",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "১২৩ মেইন রোড",
    "addressLocality": "ঢাকা",
    "addressRegion": "ঢাকা বিভাগ",
    "postalCode": "১০০০",
    "addressCountry": "BD"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+880-XXX-XXXXXXX",
    "contactType": "customer service",
    "availableLanguage": ["Bengali", "English"],
    "areaServed": "BD"
  },
  "sameAs": [
    siteConfig.links.facebook,
    siteConfig.links.twitter,
    siteConfig.links.instagram,
    siteConfig.links.youtube
  ],
  "areaServed": "Bangladesh",
  "knowsAbout": [
    "Education Support",
    "Healthcare Services", 
    "Skill Development",
    "Disaster Relief",
    "Social Welfare"
  ]
});

// Generate website schema
export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.name,
  "alternateName": "Ahammad Foundation",
  "url": siteConfig.url,
  "description": siteConfig.description,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteConfig.url}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
  "publisher": {
    "@type": "Organization",
    "name": siteConfig.name,
    "url": siteConfig.url
  }
});

// Generate breadcrumb schema
export const generateBreadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    "item": item.href ? `${siteConfig.url}${item.href}` : undefined
  }))
});

// SEO utility functions
export const generatePageMetadata = (page) => {
  const baseMetadata = {
    ...defaultMetadata,
    alternates: {
      canonical: `${siteConfig.url}${page.path || ''}`,
      languages: {
        'bn-BD': `${siteConfig.url}${page.path || ''}`,
        'en-US': `${siteConfig.url}/en${page.path || ''}`,
      },
    },
  };

  if (page.title) {
    baseMetadata.title = page.title;
    baseMetadata.openGraph.title = page.title;
    baseMetadata.twitter.title = page.title;
  }

  if (page.description) {
    baseMetadata.description = page.description;
    baseMetadata.openGraph.description = page.description;
    baseMetadata.twitter.description = page.description;
  }

  if (page.keywords) {
    baseMetadata.keywords = [...baseMetadata.keywords, ...page.keywords];
  }

  if (page.image) {
    baseMetadata.openGraph.images = [
      {
        url: page.image,
        width: 1200,
        height: 630,
        alt: page.title || siteConfig.name,
      },
    ];
    baseMetadata.twitter.images = [page.image];
  }

  return baseMetadata;
};

// Performance optimization utilities
export const preloadCriticalResources = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
  { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
  { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
];

// Analytics configuration
export const analyticsConfig = {
  googleAnalytics: {
    measurementId: 'G-XXXXXXXXXX', // Replace with actual GA4 measurement ID
  },
  googleTagManager: {
    containerId: 'GTM-XXXXXXX', // Replace with actual GTM container ID
  },
  facebookPixel: {
    pixelId: 'XXXXXXXXXXXXXXX', // Replace with actual Facebook Pixel ID
  }
};

export default {
  siteConfig,
  defaultMetadata,
  generateOrganizationSchema,
  generateWebsiteSchema,
  generateBreadcrumbSchema,
  generatePageMetadata,
  preloadCriticalResources,
  analyticsConfig
};
