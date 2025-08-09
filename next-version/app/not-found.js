import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-green-600 mb-4 animate-bounce-in">
            ৪০৪
          </h1>
          <div className="text-6xl mb-6 animate-float">
            😔
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          পেজটি পাওয়া যায়নি
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          দুঃখিত, আপনি যে পেজটি খুঁজছেন সেটি আমরা খুঁজে পাইনি। 
          হয়তো লিংকটি ভুল অথবা পেজটি সরানো হয়েছে।
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover-lift"
          >
            হোম পেজে ফিরে যান
          </Link>
          
          <Link
            href="/contact"
            className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            যোগাযোগ করুন
          </Link>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            জনপ্রিয় পেজসমূহ
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'আমাদের সম্পর্কে', href: '/about' },
              { name: 'আমাদের কার্যক্রম', href: '/programs' },
              { name: 'স্বেচ্ছাসেবক হন', href: '/volunteer' },
              { name: 'সংবাদ', href: '/news' }
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-green-600 hover:text-green-700 hover:underline transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
