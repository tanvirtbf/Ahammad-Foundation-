import Link from 'next/link';

export default function Breadcrumbs({ items }) {
  // Default breadcrumb structure
  const defaultItems = [
    { label: 'হোম', href: '/' },
    ...items
  ];

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": defaultItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": item.href ? `https://ahammad-foundation.org${item.href}` : undefined
    }))
  };

  return (
    <>
      {/* Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <ol className="flex items-center space-x-2 text-sm" role="list">
            {defaultItems.map((item, index) => (
              <li key={index} className="flex items-center" role="listitem">
                {index > 0 && (
                  <span className="mx-2 text-gray-400" aria-hidden="true">
                    /
                  </span>
                )}
                {item.href && index < defaultItems.length - 1 ? (
                  <Link
                    href={item.href}
                    className="text-green-600 hover:text-green-700 transition-colors duration-200"
                    aria-label={`${item.label} পেজে যান`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span 
                    className="text-gray-600 font-medium"
                    aria-current={index === defaultItems.length - 1 ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
